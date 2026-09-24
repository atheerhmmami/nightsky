# Before TCP — The Night the World Learned to Talk

An interactive, narrative field guide to the infrastructure that made the Internet and the early World Wide Web possible.

The site is Arabic-first by default, with a casual Saudi tone. The language toggle in the top bar switches the full interface to English. It is intentionally built with plain HTML, CSS, and JavaScript so it can be hosted directly on GitHub Pages without a framework, build step, backend, or database.

## What the project teaches

The homepage tells the broader story and keeps the build simulation separate from that narrative.

The dedicated **Infrastructure Lab** (`infrastructure.html`) is a step-by-step build of the foundation beneath TCP. It does not simulate individual TCP segments. The learner builds, in order:

1. A direct physical link
2. A circuit switch
3. Packet-switched nodes
4. IP addressing and routing
5. Network interconnection and peering
6. Global physical reach: fiber, radio, satellites, and last-mile access
7. Operations, standards, policy, and maintenance
8. The protocol stack that TCP can use

The final step makes the distinction explicit: TCP is a protocol that rides on infrastructure; it does not create the cables, routers, addresses, or agreements beneath it.

The homepage also explains the early Web context:

- Dedicated telephone and telegraph circuits
- Packet switching and ARPANET
- IP addressing and routing
- DNS naming
- URLs, HTTP, and HTML
- Mosaic, Netscape Navigator, and early JavaScript

## Storytelling

The site includes narrated reconstruction snippets and clearly labeled historical notes. The narrative is educational storytelling rather than invented dialogue. The infrastructure build is a local visual model and never opens real network connections.

## Run locally

From this directory:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) or [the infrastructure lab](http://localhost:8000/infrastructure.html).

## Publish with GitHub Pages

1. Push this directory to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save and wait for the Pages URL to appear.

## Historical framing

TCP did not create the World Wide Web or the physical Internet. The short version is:

- Dedicated telephone and telegraph circuits established the idea of a managed connection.
- Packet switching and ARPANET demonstrated a different way to share network capacity.
- The Internet Protocol supplied a common addressing and routing language.
- Network interconnection made independently operated networks work as one Internet.
- TCP added reliability on top of a best-effort packet network.
- Tim Berners-Lee created the Web's core ideas at CERN around 1989–1991.
- NCSA Mosaic helped popularize the Web in 1993.
- Netscape Navigator made the Web broadly accessible starting in 1994.

The site links to primary and foundational sources in the homepage's **Read the original blueprints** section.

## Files

- `index.html` — narrative homepage and infrastructure gateway
- `infrastructure.html` — dedicated, step-by-step network-infrastructure build
- `styles.css` — shared visual system and homepage design
- `infrastructure.css` — focused infrastructure-lab layout and responsive styles
- `app.js` — homepage timeline, packet workshop, and Netscape demo interactions
- `infrastructure.js` — infrastructure stages, build visualizer, and step navigation
- `i18n.js` — Arabic-first language toggle and casual Saudi Arabic copy
- `cody.css` — minimal warm-paper visual system inspired by the reference
- `tcp.html` — legacy redirect to the infrastructure lab
