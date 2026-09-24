const journeySteps = [
  {
    index: '00 / THE CIRCUIT',
    icon: '✆',
    title: 'A path had to be opened.',
    body: 'Early networks often reserved a continuous physical path for each conversation, much like a telephone call. That worked, but it was expensive and fragile: one busy route could block everyone who needed it.',
    problem: 'Making a dedicated connection possible — but not scalable to the whole planet.',
    tag: 'TELEPHONE + TELEGRAPH',
  },
  {
    index: '01 / THE PACKET',
    icon: '⌁',
    title: 'A message could travel in pieces.',
    body: 'Packet switching broke a message into small pieces. Each piece could find its own way through a network, then the receiving machine could put the pieces back together. A busy route no longer had to hold the entire conversation.',
    problem: 'Sharing scarce routes between many conversations at the same time.',
    tag: 'ARPANET · 1969',
  },
  {
    index: '02 / THE ADDRESS',
    icon: '⌖',
    title: 'Every packet needed a destination.',
    body: 'Packets need a common way to name their source and destination. The Internet Protocol gave hosts addresses and gave routers a way to move each packet one network at a time toward its target.',
    problem: 'Giving independently connected networks one shared addressing and routing language.',
    tag: 'INTERNET PROTOCOL · 1970s',
  },
  {
    index: '03 / THE PROMISE',
    icon: '↔',
    title: 'Arriving was not the same as being reliable.',
    body: 'Networks can lose a packet, deliver one late, or send pieces in the wrong order. TCP adds sequence numbers, acknowledgements, retransmission, and flow control so an application can act as if the connection were dependable.',
    problem: 'Making an unreliable packet network dependable enough for useful applications.',
    tag: 'TRANSMISSION CONTROL PROTOCOL · 1980s',
  },
  {
    index: '04 / THE NAME',
    icon: 'Aa',
    title: 'People remember names. Routers need numbers.',
    body: 'DNS added a naming system to the Internet. A name such as www.example.org could resolve to an IP address, making the network easier for people to use without memorizing routing tables and numeric addresses.',
    problem: 'Giving human-friendly destinations a place in a machine network.',
    tag: 'DOMAIN NAME SYSTEM · 1983',
  },
  {
    index: '05 / THE PAGE',
    icon: '▤',
    title: 'A network could carry a document.',
    body: 'At CERN, Tim Berners-Lee combined URLs, HTTP, and HTML. A URL named a resource, HTTP asked for it, and HTML described the page. The first website went live in 1991.',
    problem: 'Turning a connected network into a navigable collection of linked documents.',
    tag: 'URL + HTTP + HTML · 1991',
  },
  {
    index: '06 / THE WINDOW',
    icon: '✦',
    title: 'The page became a place you could enter.',
    body: 'Mosaic brought images and inline links into an approachable browser. Netscape Navigator made that experience feel like a window, and JavaScript gave the page a small new ability: it could respond.',
    problem: 'Making the Web visible, familiar, and interactive for millions of people.',
    tag: 'MOSAIC + NETSCAPE · 1993–1995',
  },
];

const analogyByStep = [
  'Imagine sending a long letter. A dedicated circuit is one train on one track: elegant, but the whole track is reserved while the train moves. Packet switching is a fleet of envelopes, each carrying a piece of the letter and a return address.',
  'A packet is a small, self-contained piece of a message. It can wait, take a different route, and still know what it is carrying and where it is going.',
  'An IP address is a destination written in a language routers can read. The address does not promise a perfect trip; it gives every hop a next step.',
  'TCP is the memory and the conversation manager. It remembers the order, notices what is missing, and asks for missing pieces to be sent again.',
  'DNS is the phone book of the network. It turns a name people can remember into an address machines can route toward.',
  'The Web adds a language for requesting and describing resources. A page is no longer just a stream of bytes; it has structure, links, and meaning.',
  'A browser is the interpreter at the edge of the network. It turns packets into layout, links, images, and eventually behavior.',
];

const journeyButtons = [...document.querySelectorAll('.journey-step')];
let currentJourneyIndex = 0;
const detailIndex = document.querySelector('#detailIndex');
const detailIcon = document.querySelector('#detailIcon');
const detailTitle = document.querySelector('#detailTitle');
const detailBody = document.querySelector('#detailBody');
const detailProblem = document.querySelector('#detailProblem');
const detailTag = document.querySelector('#detailTag');
const railProgress = document.querySelector('#railProgress');
const analogyBody = document.querySelector('#analogyBody');

function refreshTranslation() {
  window.NIGHTSKY_I18N?.apply(document);
}

function renderJourney(index) {
  const step = journeySteps[index];
  if (!step) return;
  currentJourneyIndex = index;

  journeyButtons.forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });

  detailIndex.textContent = step.index;
  detailIcon.textContent = step.icon;
  detailTitle.textContent = step.title;
  detailBody.textContent = step.body;
  detailProblem.textContent = step.problem;
  detailTag.textContent = step.tag;
  analogyBody.textContent = analogyByStep[index];

  const progress = index === 0 ? 0 : (index / (journeySteps.length - 1)) * 100;
  railProgress.style.height = `${progress}%`;
  railProgress.style.width = `${progress}%`;
  refreshTranslation();
}

journeyButtons.forEach((button) => {
  button.addEventListener('click', () => renderJourney(Number(button.dataset.step)));
});
renderJourney(0);

const packetCountInput = document.querySelector('#packetCount');
const packetCountOutput = document.querySelector('#packetCountOutput');
const dropPacketInput = document.querySelector('#dropPacket');
const dropPacketLabel = document.querySelector('#dropPacketLabel');
const sendPacketsButton = document.querySelector('#sendPackets');
const packetTrack = document.querySelector('#packetTrack');
const workshopStatus = document.querySelector('#workshopStatus');
const workshopMessage = document.querySelector('#workshopMessage');
const workshopSteps = [...document.querySelectorAll('[data-workshop-step]')];
let workshopRun = 0;
let workshopTimers = [];
let workshopRunning = false;

function clearWorkshopTimers() {
  workshopTimers.forEach((timer) => window.clearTimeout(timer));
  workshopTimers = [];
}

function setWorkshopStep(currentStep) {
  const order = ['split', 'travel', 'repair'];
  workshopSteps.forEach((step) => {
    const stepName = step.dataset.workshopStep;
    step.classList.toggle('is-current', stepName === currentStep);
    step.classList.toggle('is-done', order.indexOf(stepName) < order.indexOf(currentStep));
  });
}

function makePacketPiece(index) {
  const piece = document.createElement('div');
  piece.className = 'packet-piece';
  const number = document.createElement('b');
  number.textContent = `0${index + 1}`;
  const label = document.createElement('span');
  label.textContent = 'DATA';
  const note = document.createElement('small');
  note.textContent = 'SEQ';
  piece.append(number, label, note);
  return piece;
}

function renderPacketPreview() {
  const count = Number(packetCountInput.value);
  packetCountOutput.textContent = `${count} packet${count === 1 ? '' : 's'}`;
  dropPacketLabel.textContent = dropPacketInput.checked ? 'Simulate packet loss' : 'Deliver every piece';
  packetTrack.innerHTML = '';
  for (let index = 0; index < count; index += 1) packetTrack.appendChild(makePacketPiece(index));
  workshopStatus.textContent = 'READY TO SEND';
  workshopMessage.textContent = `A message is waiting to be split into ${count} smaller pieces.`;
  setWorkshopStep('split');
  refreshTranslation();
}

function runPacketWorkshop() {
  clearWorkshopTimers();
  const run = workshopRun + 1;
  workshopRun = run;
  workshopRunning = true;
  sendPacketsButton.disabled = true;
  sendPacketsButton.innerHTML = 'Sending <span aria-hidden="true">· · ·</span>';
  renderPacketPreview();
  workshopStatus.textContent = 'SPLITTING';
  workshopMessage.textContent = 'The message is becoming independent pieces.';
  setWorkshopStep('split');

  const count = Number(packetCountInput.value);
  const shouldDrop = dropPacketInput.checked;
  const lostIndex = Math.min(count - 1, Math.max(0, Math.floor(count / 2)));
  const pieces = [...packetTrack.querySelectorAll('.packet-piece')];

  workshopTimers.push(window.setTimeout(() => {
    if (run !== workshopRun) return;
    pieces.forEach((piece, index) => {
      if (index !== lostIndex || !shouldDrop) piece.classList.add('is-sent');
    });
    workshopStatus.textContent = 'IN TRANSIT';
    workshopMessage.textContent = 'Each piece carries an address, a sequence number, and a small piece of the message.';
    setWorkshopStep('travel');
    refreshTranslation();
  }, 420));

  if (shouldDrop) {
    workshopTimers.push(window.setTimeout(() => {
      if (run !== workshopRun) return;
      pieces[lostIndex].classList.add('is-lost');
      workshopStatus.textContent = 'MISSING PIECE';
      workshopMessage.textContent = `The receiver notices that packet 0${lostIndex + 1} never arrived.`;
      setWorkshopStep('repair');
      refreshTranslation();
    }, 1020));

    workshopTimers.push(window.setTimeout(() => {
      if (run !== workshopRun) return;
      pieces[lostIndex].classList.remove('is-lost');
      pieces[lostIndex].classList.add('is-repaired');
      workshopStatus.textContent = 'REPAIRING';
      workshopMessage.textContent = 'TCP remembers the gap and asks the sender to retransmit the missing sequence.';
      refreshTranslation();
    }, 1640));
  }

  workshopTimers.push(window.setTimeout(() => {
    if (run !== workshopRun) return;
    pieces.forEach((piece, index) => {
      piece.classList.add('is-sent');
      if (shouldDrop && index === lostIndex) piece.classList.add('is-repaired');
    });
    workshopStatus.textContent = 'REASSEMBLED';
    workshopMessage.textContent = shouldDrop
      ? 'Every sequence is present. The receiver can rebuild the original message.'
      : 'Every piece arrived in order. The message is ready to be read.';
    setWorkshopStep('repair');
    refreshTranslation();
    workshopSteps.forEach((step) => step.classList.add('is-done'));
    workshopRunning = false;
    sendPacketsButton.disabled = false;
    sendPacketsButton.innerHTML = 'Send the pieces <span aria-hidden="true">↻</span>';
  }, shouldDrop ? 2350 : 1550));
}

packetCountInput.addEventListener('input', () => {
  if (!workshopRunning) renderPacketPreview();
});
dropPacketInput.addEventListener('change', () => {
  if (!workshopRunning) renderPacketPreview();
});
sendPacketsButton.addEventListener('click', runPacketWorkshop);
renderPacketPreview();

window.addEventListener('nightsky:languagechange', () => {
  renderJourney(currentJourneyIndex);
  if (!workshopRunning) renderPacketPreview();
});

const helloButton = document.querySelector('#helloButton');
const scriptOutput = document.querySelector('#scriptOutput');
const browserReload = document.querySelector('#browserReload');
const cookieStatus = document.querySelector('#cookieStatus');
let scriptClicks = 0;

function readVisitCookie() {
  const match = document.cookie.match(/(?:^|; )nightsky_visits=([^;]*)/);
  return match ? Number(match[1]) : 0;
}

function updateCookieStatus() {
  const visits = readVisitCookie();
  cookieStatus.textContent = visits ? `${visits} local visit${visits === 1 ? '' : 's'} remembered` : 'No local cookie yet';
  refreshTranslation();
}

function runScript() {
  scriptClicks += 1;
  const messages = [
    'The page changed. That is a tiny script at work.',
    'One click. One event. One small change to the document.',
    'You just made the page respond — a very early kind of magic.',
  ];
  scriptOutput.textContent = messages[(scriptClicks - 1) % messages.length];
  refreshTranslation();
}

function rememberVisit() {
  const nextVisit = readVisitCookie() + 1;
  document.cookie = `nightsky_visits=${nextVisit}; max-age=31536000; path=/; SameSite=Lax`;
  updateCookieStatus();
}

helloButton.addEventListener('click', runScript);
browserReload.addEventListener('click', () => {
  scriptClicks = 0;
  scriptOutput.textContent = 'The page is waiting for you.';
  refreshTranslation();
  helloButton.focus();
});
window.addEventListener('load', () => {
  rememberVisit();
  updateCookieStatus();
});
