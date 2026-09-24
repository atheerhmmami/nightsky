const infrastructureStages = [
  {
    kicker: 'LAYER 00 / PHYSICAL LINK',
    title: 'Two machines. One direct path.',
    label: 'DIRECT CONNECTION',
    status: '1 PATH AVAILABLE',
    era: 'BEFORE PACKET SWITCHING',
    hint: 'A physical path is necessary before any protocol can travel.',
    explanation: 'The earliest useful networks began with a direct physical relationship: two endpoints, one cable, one reserved path. A protocol is only a set of instructions; something physical has to carry those instructions.',
    solves: 'Moves bits between two known places.',
    limit: 'No alternate route and no efficient sharing.',
    actionTitle: 'Lay the first link',
    actionPrompt: 'Start with the simplest infrastructure: a direct connection between two machines.',
    button: 'Build the first layer',
  },
  {
    kicker: 'LAYER 01 / CIRCUIT SWITCHING',
    title: 'A switch creates a shared meeting place.',
    label: 'CIRCUIT SWITCH',
    status: 'PATHS RESERVED ON DEMAND',
    era: 'TELEPHONE INFRASTRUCTURE',
    hint: 'A switch connects endpoints, but the conversation still owns a reserved path.',
    explanation: 'Telephone networks used switches and operators to create a circuit between callers. The switch was a place where paths could be joined, which made networks useful at a larger scale without changing the basic idea of a reserved conversation.',
    solves: 'Connects many endpoints through a central exchange.',
    limit: 'A reserved path uses capacity even when data is quiet.',
    actionTitle: 'Add a circuit switch',
    actionPrompt: 'Add the exchange that lets more than two machines reach one another.',
    button: 'Add the switch',
  },
  {
    kicker: 'LAYER 02 / PACKET SWITCHING',
    title: 'A node can forward one piece at a time.',
    label: 'PACKET-SWITCHED NETWORK',
    status: 'MANY FLOWS / SHARED LINKS',
    era: 'ARPANET · 1960s',
    hint: 'The new idea: a message can be split, routed, and reassembled.',
    explanation: 'Packet-switched networks moved small pieces through store-and-forward nodes. Instead of reserving one private circuit for an entire conversation, many machines could share links and take different routes. ARPANET demonstrated the idea through hosts connected to packet-switching nodes called IMPs.',
    solves: 'Shares scarce links across many conversations.',
    limit: 'Pieces can arrive late, out of order, or not at all.',
    actionTitle: 'Replace circuits with packet nodes',
    actionPrompt: 'Add routers that inspect each piece and choose a next hop instead of reserving a path.',
    button: 'Add packet nodes',
  },
  {
    kicker: 'LAYER 03 / ADDRESSING + ROUTING',
    title: 'A destination becomes a language routers share.',
    label: 'IP NETWORK TOPOLOGY',
    status: 'ROUTES CAN BE COMPARED',
    era: 'INTERNET PROTOCOL · 1970s–80s',
    hint: 'Addressing turns geography into a routing decision.',
    explanation: 'Packet switching needs a common way to describe where a packet is going. IP addresses give endpoints and networks identities; routing tables let each router choose a next hop. This is the logical infrastructure that turns a collection of links into one addressable network.',
    solves: 'Lets independent nodes make forwarding decisions.',
    limit: 'IP itself does not promise that a packet will arrive.',
    actionTitle: 'Add IP addresses and routes',
    actionPrompt: 'Give the nodes identities and show how a router decides where traffic goes next.',
    button: 'Add addressing + routes',
  },
  {
    kicker: 'LAYER 04 / NETWORK OF NETWORKS',
    title: 'Independent networks agree to exchange traffic.',
    label: 'PEERING + INTERCONNECTION',
    status: 'NETWORKS BECOME ONE',
    era: 'INTERNET INTERCONNECTION',
    hint: 'The Internet is not one giant switch. It is networks choosing to work together.',
    explanation: 'The Internet is a network of networks. Organizations, ISPs, universities, and backbones connect at peering points and private links, then use common protocols so traffic can cross organizational boundaries. No single operator owns the whole route.',
    solves: 'Extends reach across independently operated networks.',
    limit: 'Different operators must agree on technical and policy boundaries.',
    actionTitle: 'Connect the networks',
    actionPrompt: 'Add an interconnection point so separate networks can exchange traffic.',
    button: 'Connect the networks',
  },
  {
    kicker: 'LAYER 05 / PHYSICAL REACH',
    title: 'Global reach still has a physical shape.',
    label: 'FIBER / RADIO / SATELLITE',
    status: 'LAST MILE + BACKBONE',
    era: 'GLOBAL PHYSICAL INFRASTRUCTURE',
    hint: 'The "cloud" is cables, towers, landing stations, radios, and rooms full of equipment.',
    explanation: 'Digital networks still depend on physical paths: fiber in the ground, undersea cables, microwave and radio links, cellular towers, satellites, and equipment rooms. Last-mile access connects homes and businesses to the larger network.',
    solves: 'Carries traffic across cities, countries, and oceans.',
    limit: 'Physical routes need power, maintenance, repair, and redundancy.',
    actionTitle: 'Extend the physical reach',
    actionPrompt: 'Add the physical routes that make a global network visible in the real world.',
    button: 'Add global reach',
  },
  {
    kicker: 'LAYER 06 / OPERATIONS + STANDARDS',
    title: 'A network survives because people maintain it.',
    label: 'OPERATIONS + SHARED RULES',
    status: 'SERVICE DEPENDS ON CARE',
    era: 'THE INVISIBLE LAYER',
    hint: 'Standards make strangers interoperate; operations keep the system alive.',
    explanation: 'Infrastructure is also organizational. Protocol specifications, naming systems, routing policies, monitoring, security, maintenance crews, and agreements between operators make a physical network dependable and understandable to the people using it.',
    solves: 'Keeps independent infrastructure compatible and alive.',
    limit: 'No layer is static; capacity and policy must evolve.',
    actionTitle: 'Add standards and operations',
    actionPrompt: 'Add the shared rules and human work that turn equipment into a service.',
    button: 'Add operations + standards',
  },
  {
    kicker: 'LAYER 07 / TCP CAN RIDE HERE',
    title: 'Now TCP has something to coordinate.',
    label: 'PROTOCOL STACK',
    status: 'FOUNDATION COMPLETE',
    era: 'TCP IS A GUEST, NOT THE HOUSE',
    hint: 'TCP can provide reliability because the infrastructure gives it an addressable network to use.',
    explanation: 'TCP is a protocol that rides on IP and the links beneath it. It adds sequence, acknowledgements, and recovery to a best-effort packet network. The protocol does not create the cables, routers, addresses, or agreements; it makes a promise on top of them.',
    solves: 'Adds reliable, ordered delivery to the existing network.',
    limit: 'Its promise only works when the underlying service is reachable.',
    actionTitle: 'Place TCP on the foundation',
    actionPrompt: 'Review the layers that make a TCP conversation possible, without simulating individual TCP segments.',
    button: 'Show the foundation',
  },
];

const stepButtons = [...document.querySelectorAll('[data-infra-step]')];
const buildStepCount = document.querySelector('#buildStepCount');
const buildProgress = document.querySelector('#buildProgress');
const buildKicker = document.querySelector('#buildKicker');
const buildTitle = document.querySelector('#buildTitle');
const layerCount = document.querySelector('#layerCount');
const buildCanvas = document.querySelector('#buildCanvas');
const buildIllustration = document.querySelector('#buildIllustration');
const canvasLabel = document.querySelector('#canvasLabel');
const canvasStatus = document.querySelector('#canvasStatus');
const canvasHint = document.querySelector('#canvasHint');
const canvasEra = document.querySelector('#canvasEra');
const buildExplanation = document.querySelector('#buildExplanation');
const buildSolves = document.querySelector('#buildSolves');
const buildLimit = document.querySelector('#buildLimit');
const actionLayer = document.querySelector('#actionLayer');
const actionTitle = document.querySelector('#actionTitle');
const actionPrompt = document.querySelector('#actionPrompt');
const buildPrimary = document.querySelector('#buildPrimary');
const buildReset = document.querySelector('#buildReset');

let currentStage = 0;

function svgLinks(links) {
  return `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${links
    .map((link) => `<line class="build-link ${link.className || ''}" x1="${link.x1}" y1="${link.y1}" x2="${link.x2}" y2="${link.y2}" />`)
    .join('')}</svg>`;
}

function node(className, label, detail, extra = '') {
  return `<div class="${className} ${extra}"><b>${label}</b><span>${detail}</span></div>`;
}

function label(className, text) {
  return `<span class="build-label ${className}">${text}</span>`;
}

function renderStageIllustration(stageIndex) {
  if (stageIndex === 0) {
    return `${svgLinks([{ x1: 14, y1: 48, x2: 86, y2: 48, className: 'is-active' }])}${node('build-node node-a', 'MACHINE A', '10.0.0.10', 'is-highlight')}${node('build-node node-b', 'MACHINE B', '10.0.0.20', 'is-highlight')}`;
  }

  if (stageIndex === 1) {
    return `${svgLinks([
      { x1: 14, y1: 32, x2: 48, y2: 48, className: 'is-active' },
      { x1: 14, y1: 68, x2: 48, y2: 48, className: 'is-active' },
      { x1: 52, y1: 48, x2: 86, y2: 32, className: 'is-active' },
      { x1: 52, y1: 48, x2: 86, y2: 68, className: 'is-active' },
    ])}${node('build-node node-a', 'CALLER A', 'reserved circuit')}${node('build-node node-c', 'CALLER B', 'reserved circuit')}${node('build-node node-b', 'CALLER C', 'reserved circuit')}${node('build-switch switch-a', 'SWITCH', 'manual / circuit exchange', 'is-highlight')}`;
  }

  if (stageIndex === 2) {
    return `${svgLinks([
      { x1: 14, y1: 28, x2: 42, y2: 32, className: 'is-active' },
      { x1: 42, y1: 32, x2: 72, y2: 25, className: 'is-active' },
      { x1: 72, y1: 25, x2: 86, y2: 28, className: 'is-active' },
      { x1: 14, y1: 72, x2: 42, y2: 68, className: 'is-amber is-active' },
      { x1: 42, y1: 68, x2: 72, y2: 75, className: 'is-amber is-active' },
      { x1: 72, y1: 75, x2: 86, y2: 72, className: 'is-amber is-active' },
      { x1: 42, y1: 32, x2: 42, y2: 68, className: 'is-lavender is-active' },
    ])}${node('build-node node-a', 'HOST A', 'source')}${node('build-node node-c', 'HOST B', 'source')}${node('build-switch switch-a', 'ROUTER 1', 'next hop', 'is-highlight')}${node('build-switch switch-b', 'ROUTER 2', 'next hop', 'is-highlight')}${node('build-node node-b', 'HOST C', 'destination')}${label('label-address', 'STORE + FORWARD')}`;
  }

  if (stageIndex === 3) {
    return `${svgLinks([
      { x1: 14, y1: 30, x2: 42, y2: 35, className: 'is-active' },
      { x1: 42, y1: 35, x2: 74, y2: 28, className: 'is-active' },
      { x1: 14, y1: 70, x2: 42, y2: 65, className: 'is-amber is-active' },
      { x1: 42, y1: 65, x2: 74, y2: 72, className: 'is-amber is-active' },
      { x1: 74, y1: 28, x2: 86, y2: 30, className: 'is-lavender is-active' },
      { x1: 74, y1: 72, x2: 86, y2: 70, className: 'is-lavender is-active' },
    ])}${node('build-region region-a', 'NETWORK A', '10.0.0.0/24')}${node('build-region region-b', 'NETWORK B', '10.0.1.0/24')}${node('build-region region-c', 'NETWORK C', '10.0.2.0/24')}${node('build-region region-d', 'NETWORK D', '10.0.3.0/24')}${node('build-gateway gateway-a', 'ROUTER', 'prefix + next hop', 'is-highlight')}${label('label-address', 'IP ADDRESSES')}${label('label-route', 'ROUTE TABLE')}`;
  }

  if (stageIndex === 4) {
    return `${svgLinks([
      { x1: 17, y1: 26, x2: 48, y2: 48, className: 'is-active' },
      { x1: 17, y1: 74, x2: 48, y2: 48, className: 'is-amber is-active' },
      { x1: 83, y1: 26, x2: 52, y2: 48, className: 'is-lavender is-active' },
      { x1: 83, y1: 74, x2: 52, y2: 48, className: 'is-lavender is-active' },
    ])}${node('build-region region-a', 'ISP A', 'private network')}${node('build-region region-b', 'ISP B', 'campus network')}${node('build-region region-c', 'ISP C', 'regional network')}${node('build-region region-d', 'ISP D', 'content network')}${node('build-gateway gateway-a', 'IXP', 'exchange traffic', 'is-highlight')}${label('label-address', 'PEERING')}${label('label-route', 'AUTONOMOUS SYSTEMS')}`;
  }

  if (stageIndex === 5) {
    return `${svgLinks([
      { x1: 17, y1: 27, x2: 49, y2: 48, className: 'is-active' },
      { x1: 83, y1: 27, x2: 51, y2: 48, className: 'is-lavender is-active' },
      { x1: 17, y1: 75, x2: 49, y2: 48, className: 'is-amber is-active' },
      { x1: 83, y1: 75, x2: 51, y2: 48, className: 'is-amber is-active' },
      { x1: 49, y1: 48, x2: 51, y2: 48, className: 'is-lavender is-active' },
    ])}${node('build-region region-a', 'CITY', 'fiber + cells')}${node('build-region region-c', 'COAST', 'landing station')}${node('build-region region-b', 'OCEAN', 'undersea cable')}${node('build-region region-d', 'RURAL', 'last mile')}${node('build-cable cable-a', 'FIBER', 'terrestrial route', 'is-highlight')}${node('build-cable cable-b', 'CABLE', 'submarine route', 'is-highlight')}${node('build-tower tower-a', 'TOWER', 'radio access', 'is-highlight')}${node('build-satellite satellite-a', 'SATELLITE', 'remote link', 'is-highlight')}`;
  }

  if (stageIndex === 6) {
    return `${svgLinks([
      { x1: 16, y1: 27, x2: 49, y2: 48, className: 'is-active' },
      { x1: 84, y1: 27, x2: 51, y2: 48, className: 'is-active' },
      { x1: 16, y1: 74, x2: 49, y2: 48, className: 'is-amber is-active' },
      { x1: 84, y1: 74, x2: 51, y2: 48, className: 'is-amber is-active' },
    ])}${node('build-region region-a', 'POLICY', 'peering rules')}${node('build-region region-c', 'RFCs', 'shared language')}${node('build-region region-b', 'OPS', 'monitor + repair')}${node('build-region region-d', 'SECURITY', 'protect + observe')}${node('build-gateway gateway-a', 'SERVICE', 'reliable enough to use', 'is-highlight')}${label('label-address', 'STANDARDS')}${label('label-ops', 'HUMAN SYSTEMS')}`;
  }

  return `${svgLinks([
    { x1: 15, y1: 30, x2: 41, y2: 50, className: 'is-active' },
    { x1: 85, y1: 30, x2: 59, y2: 50, className: 'is-lavender is-active' },
    { x1: 15, y1: 72, x2: 41, y2: 50, className: 'is-amber is-active' },
    { x1: 85, y1: 72, x2: 59, y2: 50, className: 'is-amber is-active' },
  ])}<div class="build-stack"><span>APPLICATION</span><span>TCP</span><span>IP</span><span>LINK / PHYSICAL</span><b>the protocol rides on the house</b></div>${label('label-address', 'FOUNDATION COMPLETE')}`;
}

function renderStage() {
  const stage = infrastructureStages[currentStage];
  const isFinal = currentStage === infrastructureStages.length - 1;

  stepButtons.forEach((button, index) => {
    const complete = index < currentStage;
    button.classList.toggle('is-current', index === currentStage);
    button.classList.toggle('is-complete', complete);
    button.setAttribute('aria-current', index === currentStage ? 'step' : 'false');
    button.disabled = index > currentStage;
  });

  buildStepCount.textContent = `${String(currentStage).padStart(2, '0')} / 07`;
  layerCount.textContent = `${String(currentStage).padStart(2, '0')} / 07`;
  buildProgress.style.width = `${(currentStage / (infrastructureStages.length - 1)) * 100}%`;
  buildKicker.textContent = stage.kicker;
  buildTitle.textContent = stage.title;
  canvasLabel.textContent = stage.label;
  canvasStatus.textContent = stage.status;
  canvasHint.textContent = stage.hint;
  canvasEra.textContent = stage.era;
  buildExplanation.textContent = stage.explanation;
  buildSolves.textContent = stage.solves;
  buildLimit.textContent = stage.limit;
  actionLayer.textContent = String(currentStage).padStart(2, '0');
  actionTitle.textContent = stage.actionTitle;
  actionPrompt.textContent = stage.actionPrompt;
  buildPrimary.innerHTML = isFinal ? 'Build again <span aria-hidden="true">↻</span>' : `${stage.button} <span aria-hidden="true">→</span>`;
  buildCanvas.dataset.stage = String(currentStage);
  buildIllustration.innerHTML = renderStageIllustration(currentStage);
}

function resetBuild() {
  currentStage = 0;
  renderStage();
}

stepButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const requestedStage = Number(button.dataset.infraStep);
    if (requestedStage > currentStage) return;
    currentStage = requestedStage;
    renderStage();
  });
});

buildPrimary.addEventListener('click', () => {
  if (currentStage === infrastructureStages.length - 1) {
    resetBuild();
    return;
  }
  currentStage += 1;
  renderStage();
});

buildReset.addEventListener('click', resetBuild);
renderStage();
