const tcpSteps = [
  {
    kicker: 'STEP 01 / SETUP',
    state: 'CLOSED',
    title: 'Two endpoints are ready.',
    explanation: 'TCP is a conversation between two endpoints. Before any application data moves, both sides need to agree on where the byte stream begins.',
    fact: 'Sequence numbers turn a stream into a trackable conversation.',
    actionTitle: 'Meet the endpoints',
    actionPrompt: 'The client and server are waiting. Start the TCP conversation when you are ready.',
    button: 'Start the handshake',
    mode: 'idle',
    flags: 'TCP',
    sequence: 'READY',
  },
  {
    kicker: 'STEP 02 / CLIENT REQUEST',
    state: 'CLOSED',
    title: 'The client asks permission.',
    explanation: 'The client sends a SYN segment. SYN means “synchronize”: “I want to open a connection, and my first sequence number is 1000.”',
    fact: 'SYN asks permission and announces the client’s starting sequence number.',
    actionTitle: 'Send SYN',
    actionPrompt: 'Watch the client announce its starting point to the server.',
    button: 'Send SYN',
    mode: 'syn',
    flags: 'SYN',
    sequence: 'SEQ 1000',
  },
  {
    kicker: 'STEP 03 / SERVER RESPONSE',
    state: 'SYN-SENT',
    title: 'The server answers.',
    explanation: 'The server replies with SYN + ACK. It acknowledges the client’s sequence number and chooses its own starting sequence number, 7000.',
    fact: 'SYN + ACK says: “I hear you, and here is where my side begins.”',
    actionTitle: 'Send SYN · ACK',
    actionPrompt: 'The server confirms what it heard and introduces its own sequence number.',
    button: 'Send SYN · ACK',
    mode: 'synack',
    flags: 'SYN · ACK',
    sequence: 'SEQ 7000 / ACK 1001',
  },
  {
    kicker: 'STEP 04 / CLIENT CONFIRMATION',
    state: 'SYN-RECEIVED',
    title: 'Both sides agree.',
    explanation: 'The client sends the final ACK. Now both endpoints know the other’s starting sequence number, and the TCP connection is established.',
    fact: 'The third message turns two independent intentions into shared state.',
    actionTitle: 'Send final ACK',
    actionPrompt: 'Complete the three-way handshake and open the reliable byte stream.',
    button: 'Send final ACK',
    mode: 'ack',
    flags: 'ACK',
    sequence: 'ACK 7001',
  },
  {
    kicker: 'STEP 05 / DATA TRANSFER',
    state: 'ESTABLISHED',
    title: 'Now the byte stream can move.',
    explanation: 'TCP data segments carry application bytes. The segment has a sequence number so the receiver knows exactly where it belongs in the stream.',
    fact: 'TCP delivers bytes in order, even when the network moves segments independently.',
    actionTitle: 'Send a data segment',
    actionPrompt: 'Write a short message, then send it as one TCP segment.',
    button: 'Send data segment',
    mode: 'data',
    flags: 'DATA',
    sequence: 'SEQ 1001',
    actionType: 'data',
  },
  {
    kicker: 'STEP 06 / RECOVERY',
    state: 'ESTABLISHED',
    title: 'Reliability notices a missing segment.',
    explanation: 'A network can lose a segment. The receiver does not quietly guess: the sequence number leaves a gap, and TCP asks for the missing data to be retransmitted.',
    fact: 'Reliability is not the absence of failure. It is knowing what to do after failure.',
    actionTitle: 'Drop the next segment',
    actionPrompt: 'The next data segment will disappear. Watch the receiver detect the gap and request a replacement.',
    button: 'Simulate lost segment',
    mode: 'lost',
    flags: 'DATA',
    sequence: 'SEQ 1007',
    actionType: 'recovery',
  },
  {
    kicker: 'STEP 07 / CONNECTION CLOSE',
    state: 'ESTABLISHED',
    title: 'Close the conversation.',
    explanation: 'A TCP connection does not disappear when a page stops sending data. The client sends FIN to say “I have no more bytes,” and the other side acknowledges the close.',
    fact: 'Closing is also a conversation: finish, acknowledge, finish, acknowledge.',
    actionTitle: 'Close the connection',
    actionPrompt: 'Send FIN, receive the acknowledgement, and return the connection to CLOSED.',
    button: 'Send FIN',
    mode: 'fin',
    flags: 'FIN',
    sequence: 'SEQ 1008',
    actionType: 'close',
  },
];

const stepButtons = [...document.querySelectorAll('[data-tcp-step]')];
const stepCount = document.querySelector('#stepCount');
const stepProgress = document.querySelector('#stepProgress');
const workspaceKicker = document.querySelector('#workspaceKicker');
const labTitle = document.querySelector('#labTitle');
const tcpState = document.querySelector('#tcpState');
const stepExplanation = document.querySelector('#stepExplanation');
const stepFact = document.querySelector('#stepFact strong');
const actionIndex = document.querySelector('#actionIndex');
const actionTitle = document.querySelector('#actionTitle');
const actionPrompt = document.querySelector('#actionPrompt');
const messageField = document.querySelector('#messageField');
const messageInput = document.querySelector('#tcpMessage');
const primaryButton = document.querySelector('#tcpPrimary');
const resetButton = document.querySelector('#tcpReset');
const wireBoard = document.querySelector('#wireBoard');
const clientEndpoint = document.querySelector('#clientEndpoint');
const serverEndpoint = document.querySelector('#serverEndpoint');
const tcpPacket = document.querySelector('#tcpPacket');
const packetProtocol = tcpPacket.querySelector('b');
const packetFlags = tcpPacket.querySelector('span');
const packetSequence = tcpPacket.querySelector('i');
const wireStatus = document.querySelector('#wireStatus');
const wireStatusValue = document.querySelector('#wireStatusValue');
const tcpLog = document.querySelector('#tcpLog');
const logStatus = document.querySelector('#logStatus');

let currentStep = 0;
let busy = false;
let finished = false;
let runToken = 0;

const wait = (milliseconds) => new Promise((resolve) => window.setTimeout(resolve, milliseconds));

function isCurrentToken(token) {
  return token === runToken;
}

function setEndpointState(activeSide) {
  clientEndpoint.classList.toggle('is-active', activeSide === 'client' || activeSide === 'both');
  serverEndpoint.classList.toggle('is-active', activeSide === 'server' || activeSide === 'both');
}

function setPacket({ mode, flags, sequence, visible = true, response = false, lost = false }) {
  packetProtocol.textContent = 'TCP';
  packetFlags.textContent = flags;
  packetSequence.textContent = sequence;
  tcpPacket.className = 'tcp-packet';
  if (visible) tcpPacket.classList.add('is-visible');
  if (response) tcpPacket.classList.add('is-response');
  if (lost) tcpPacket.classList.add('is-lost');
  if (mode) tcpPacket.dataset.mode = mode;
  tcpPacket.style.left = '50%';
  tcpPacket.style.top = '50%';
}

function setWireStatus(label, value) {
  wireStatus.textContent = label;
  wireStatusValue.textContent = value;
}

function addLog(direction, title, detail, tone = '') {
  const placeholder = tcpLog.querySelector('.log-placeholder');
  if (placeholder) placeholder.remove();

  const item = document.createElement('li');
  if (tone) item.classList.add(`is-${tone}`);

  const directionElement = document.createElement('span');
  directionElement.className = 'log-direction';
  directionElement.textContent = direction;

  const eventElement = document.createElement('div');
  eventElement.className = 'log-event';
  const titleElement = document.createElement('strong');
  titleElement.textContent = title;
  const detailElement = document.createElement('span');
  detailElement.textContent = detail;
  eventElement.append(titleElement, document.createElement('br'), detailElement);

  item.append(directionElement, eventElement);
  tcpLog.appendChild(item);
}

function setState(state) {
  tcpState.textContent = state;
}

function renderStep() {
  const step = tcpSteps[currentStep];
  const isLast = currentStep === tcpSteps.length - 1;
  const isFinished = finished && isLast;

  stepButtons.forEach((button, index) => {
    const complete = index < currentStep || (finished && index <= currentStep);
    button.classList.toggle('is-current', index === currentStep && !isFinished);
    button.classList.toggle('is-complete', complete);
    button.setAttribute('aria-current', index === currentStep ? 'step' : 'false');
    button.disabled = index > currentStep || busy;
  });

  stepCount.textContent = `${String(currentStep + 1).padStart(2, '0')} / 07`;
  stepProgress.style.width = finished ? '100%' : `${(currentStep / (tcpSteps.length - 1)) * 100}%`;
  workspaceKicker.textContent = step.kicker;
  labTitle.textContent = step.title;
  setState(isFinished ? 'CLOSED' : step.state);
  stepExplanation.textContent = step.explanation;
  stepFact.textContent = step.fact;
  actionIndex.textContent = String(currentStep + 1).padStart(2, '0');
  actionTitle.textContent = isFinished ? 'Connection complete' : step.actionTitle;
  actionPrompt.textContent = isFinished ? 'The byte stream is closed. Start again to run the same conversation with a new message.' : step.actionPrompt;
  messageField.classList.toggle('is-visible', !isFinished && step.actionType === 'data');
  messageInput.disabled = busy || isFinished || step.actionType !== 'data';

  if (isFinished) {
    primaryButton.innerHTML = 'Run it again <span aria-hidden="true">↻</span>';
    primaryButton.disabled = false;
  } else {
    primaryButton.innerHTML = `${step.button} <span aria-hidden="true">→</span>`;
    primaryButton.disabled = busy;
  }
  resetButton.disabled = busy;

  if (isFinished) {
    setEndpointState('');
    setPacket({ mode: 'closed', flags: '—', sequence: 'CLOSED', visible: false });
    setWireStatus('CONNECTION CLOSED', 'NO SEGMENT SENT');
    logStatus.textContent = 'CONNECTION CLOSED';
  } else {
    const preview = {
      idle: { active: '', flags: '—', sequence: 'READY', status: 'WAITING FOR YOUR INPUT', value: 'NO SEGMENT SENT' },
      syn: { active: 'client', flags: 'SYN', sequence: 'SEQ 1000', status: 'CLIENT IS READY', value: 'NEXT: SYN' },
      synack: { active: 'server', flags: 'SYN · ACK', sequence: 'SEQ 7000 / ACK 1001', status: 'SERVER IS READY', value: 'NEXT: SYN · ACK' },
      ack: { active: 'both', flags: 'ACK', sequence: 'ACK 7001', status: 'CLIENT IS READY', value: 'NEXT: ACK' },
      data: { active: 'client', flags: 'DATA', sequence: 'SEQ 1001', status: 'READY TO SEND DATA', value: 'BYTE STREAM OPEN' },
      lost: { active: 'client', flags: 'DATA', sequence: 'SEQ 1007', status: 'READY TO SIMULATE LOSS', value: 'RECOVERY TEST' },
      fin: { active: 'client', flags: 'FIN', sequence: 'SEQ 1008', status: 'READY TO CLOSE', value: 'NEXT: FIN' },
    }[step.mode];
    setEndpointState(preview.active);
    setPacket({ mode: step.mode, flags: preview.flags, sequence: preview.sequence, visible: step.mode !== 'idle', response: step.mode === 'synack' || step.mode === 'ack', lost: false });
    setWireStatus(preview.status, preview.value);
    logStatus.textContent = busy ? 'TRANSMITTING' : currentStep === 0 ? 'AWAITING CONNECTION' : 'CONVERSATION IN PROGRESS';
  }
}

async function moveSegment({ from, to, mode, flags, sequence, response = false, lost = false, state, side, status, value }) {
  const token = runToken;
  busy = true;
  primaryButton.disabled = true;
  resetButton.disabled = true;
  setEndpointState(side);
  setPacket({ mode, flags, sequence, visible: true, response, lost });
  tcpPacket.style.left = from;
  setWireStatus(status, value);
  setState(state);
  await wait(700);
  if (!isCurrentToken(token)) return;
  tcpPacket.style.left = to;
  await wait(260);
}

function clearPacket() {
  tcpPacket.className = 'tcp-packet';
  tcpPacket.style.left = '50%';
  tcpPacket.style.top = '50%';
}

async function runSimpleTransition(config) {
  const token = runToken;
  await moveSegment(config);
  if (!isCurrentToken(token)) return;
  addLog(config.logDirection, config.logTitle, config.logDetail, config.tone || '');
  currentStep += 1;
  busy = false;
  renderStep();
}

async function beginHandshake() {
  const token = runToken;
  busy = true;
  addLog('SYSTEM', 'Two endpoints identified', 'Client 10.0.0.10:51000 and server 10.0.0.20:443 are ready.');
  setWireStatus('SETUP COMPLETE', 'NEXT: SYN');
  setState('CLOSED');
  await wait(450);
  if (!isCurrentToken(token)) return;
  currentStep = 1;
  busy = false;
  renderStep();
}

async function sendData() {
  const token = runToken;
  const message = messageInput.value.trim() || 'Hello, network.';
  const length = new TextEncoder().encode(message).length;
  busy = true;
  primaryButton.disabled = true;
  resetButton.disabled = true;
  setEndpointState('client');
  setPacket({ mode: 'data', flags: 'DATA', sequence: `SEQ 1001 / ${length} BYTES`, visible: true });
  tcpPacket.style.left = '29%';
  setWireStatus('DATA IN TRANSIT', 'CLIENT → SERVER');
  setState('ESTABLISHED');
  await wait(700);
  if (!isCurrentToken(token)) return;
  tcpPacket.style.left = '71%';
  addLog('CLIENT → SERVER', 'DATA · SEQ 1001', `"${message}" · ${length} bytes`);
  await wait(380);
  if (!isCurrentToken(token)) return;
  setEndpointState('server');
  setPacket({ mode: 'ack', flags: 'ACK', sequence: 'ACK 1007', visible: true, response: true });
  tcpPacket.style.left = '71%';
  setWireStatus('ACKNOWLEDGED', 'SERVER RECEIVED DATA');
  await wait(550);
  if (!isCurrentToken(token)) return;
  tcpPacket.style.left = '29%';
  addLog('SERVER → CLIENT', 'ACK · 1007', 'All bytes through sequence 1006 are accounted for.');
  currentStep = 5;
  busy = false;
  renderStep();
}

async function simulateLoss() {
  const token = runToken;
  busy = true;
  primaryButton.disabled = true;
  resetButton.disabled = true;
  setEndpointState('client');
  setPacket({ mode: 'data', flags: 'DATA', sequence: 'SEQ 1007', visible: true });
  tcpPacket.style.left = '29%';
  setWireStatus('DATA IN TRANSIT', 'CLIENT → SERVER');
  await wait(700);
  if (!isCurrentToken(token)) return;
  tcpPacket.style.left = '71%';
  setPacket({ mode: 'lost', flags: 'DATA', sequence: 'SEQ 1007', visible: true, lost: true });
  setWireStatus('SEGMENT LOST', 'GAP DETECTED');
  addLog('NETWORK', 'DATA · SEQ 1007 LOST', 'The segment never reaches the receiver.', 'alert');
  await wait(950);
  if (!isCurrentToken(token)) return;
  setEndpointState('client');
  setPacket({ mode: 'retransmit', flags: 'RETRANSMIT', sequence: 'SEQ 1007', visible: true });
  tcpPacket.style.left = '29%';
  setWireStatus('TIMEOUT / RETRANSMIT', 'SAME SEQUENCE RETRIED');
  await wait(700);
  if (!isCurrentToken(token)) return;
  tcpPacket.style.left = '71%';
  addLog('CLIENT → SERVER', 'RETRANSMIT · DATA SEQ 1007', 'TCP sends the missing sequence again.');
  await wait(380);
  if (!isCurrentToken(token)) return;
  setEndpointState('server');
  setPacket({ mode: 'ack', flags: 'ACK', sequence: 'ACK 1012', visible: true, response: true });
  tcpPacket.style.left = '71%';
  setWireStatus('RECOVERED', 'GAP CLOSED');
  addLog('SERVER → CLIENT', 'ACK · 1012', 'The receiver now has every byte in order.');
  currentStep = 6;
  busy = false;
  renderStep();
}

async function closeConnection() {
  const token = runToken;
  busy = true;
  primaryButton.disabled = true;
  resetButton.disabled = true;
  setEndpointState('client');
  setPacket({ mode: 'fin', flags: 'FIN', sequence: 'SEQ 1008', visible: true });
  tcpPacket.style.left = '29%';
  setWireStatus('CLIENT FIN', 'CLIENT → SERVER');
  setState('FIN-WAIT-1');
  await wait(700);
  if (!isCurrentToken(token)) return;
  tcpPacket.style.left = '71%';
  addLog('CLIENT → SERVER', 'FIN · SEQ 1008', 'The client says it has no more bytes to send.');
  await wait(380);
  if (!isCurrentToken(token)) return;
  setEndpointState('server');
  setPacket({ mode: 'finack', flags: 'FIN · ACK', sequence: 'SEQ 7001 / ACK 1009', visible: true, response: true });
  tcpPacket.style.left = '71%';
  setWireStatus('SERVER FIN · ACK', 'SERVER → CLIENT');
  setState('CLOSE-WAIT');
  await wait(700);
  if (!isCurrentToken(token)) return;
  tcpPacket.style.left = '29%';
  addLog('SERVER → CLIENT', 'FIN · ACK', 'The server acknowledges the close and sends its own FIN.');
  await wait(380);
  if (!isCurrentToken(token)) return;
  setEndpointState('client');
  setPacket({ mode: 'ack', flags: 'ACK', sequence: 'ACK 7002', visible: true });
  tcpPacket.style.left = '29%';
  setWireStatus('FINAL ACK', 'CLIENT → SERVER');
  setState('CLOSED');
  addLog('CLIENT → SERVER', 'ACK · 7002', 'Both endpoints agree that the byte stream is closed.');
  await wait(500);
  if (!isCurrentToken(token)) return;
  finished = true;
  busy = false;
  renderStep();
}

function resetSimulation() {
  runToken += 1;
  currentStep = 0;
  busy = false;
  finished = false;
  tcpLog.innerHTML = '<li class="log-placeholder">The connection is quiet. Start the simulation to record the first segment.</li>';
  logStatus.textContent = 'AWAITING CONNECTION';
  setState('CLOSED');
  setEndpointState('');
  clearPacket();
  setWireStatus('WAITING FOR YOUR INPUT', 'NO SEGMENT SENT');
  renderStep();
}

function handlePrimaryAction() {
  if (busy) return;
  if (finished) {
    resetSimulation();
    return;
  }
  if (currentStep === 0) beginHandshake();
  if (currentStep === 1) runSimpleTransition({ from: '29%', to: '71%', mode: 'syn', flags: 'SYN', sequence: 'SEQ 1000', state: 'SYN-SENT', side: 'client', status: 'SYN IN TRANSIT', value: 'CLIENT → SERVER', logDirection: 'CLIENT → SERVER', logTitle: 'SYN · SEQ 1000', logDetail: 'The client requests a synchronized byte stream.' });
  if (currentStep === 2) runSimpleTransition({ from: '71%', to: '29%', mode: 'synack', flags: 'SYN · ACK', sequence: 'SEQ 7000 / ACK 1001', state: 'SYN-RECEIVED', side: 'server', response: true, status: 'SYN · ACK IN TRANSIT', value: 'SERVER → CLIENT', logDirection: 'SERVER → CLIENT', logTitle: 'SYN · ACK · SEQ 7000', logDetail: 'The server acknowledges 1000 and introduces 7000.' });
  if (currentStep === 3) runSimpleTransition({ from: '29%', to: '71%', mode: 'ack', flags: 'ACK', sequence: 'ACK 7001', state: 'ESTABLISHED', side: 'client', status: 'FINAL ACK', value: 'CLIENT → SERVER', logDirection: 'CLIENT → SERVER', logTitle: 'ACK · 7001', logDetail: 'The three-way handshake is complete.' });
  if (currentStep === 4) sendData();
  if (currentStep === 5) simulateLoss();
  if (currentStep === 6) closeConnection();
}

stepButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (busy) return;
    const requestedStep = Number(button.dataset.tcpStep);
    if (requestedStep > currentStep) return;
    currentStep = requestedStep;
    renderStep();
  });
});

primaryButton.addEventListener('click', handlePrimaryAction);
resetButton.addEventListener('click', resetSimulation);
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && currentStep === 4 && !busy) handlePrimaryAction();
});

resetSimulation();
