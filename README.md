# Before TCP — The Night the World Learned to Talk

An interactive, narrative field guide to the ideas that made the Internet and the early World Wide Web possible.

The site is intentionally built with plain HTML, CSS, and JavaScript so it can be hosted directly on GitHub Pages without a framework, build step, backend, or database.

## What the project teaches

The homepage tells the broader story of the early Web and keeps the simulation separate from that narrative.

The dedicated **TCP Lab** (`tcp.html`) is intentionally limited to one protocol. It walks a learner through:

1. Two TCP endpoints
2. The client’s SYN
3. The server’s SYN + ACK
4. The client’s final ACK
5. A data segment with sequence and acknowledgement numbers
6. A simulated lost segment and retransmission
7. A clean FIN/ACK close

The dedicated lab does not mix in DNS, IP routing, HTTP, or HTML.

The surrounding story explains the layers that came before and after TCP:

- Dedicated telephone and telegraph circuits
- Packet switching and ARPANET
- IP addressing and routing
- TCP reliability
- DNS naming
- URLs, HTTP, and HTML
- Mosaic, Netscape Navigator, and early JavaScript

## Storytelling

The site includes narrated reconstruction snippets and small, clearly labeled historical notes. The narrative is educational storytelling rather than invented dialogue. The connection lab uses a fictional `first.example` destination and never makes a real network request.

## Run locally

From this directory:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Publish with GitHub Pages

1. Push this directory to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save and wait for the Pages URL to appear.

## Historical framing

TCP did not create the World Wide Web. The short version is:

- TCP/IP was developed through work led by Vint Cerf and Bob Kahn in the 1970s.
- Tim Berners-Lee created the Web's core ideas at CERN around 1989–1991.
- NCSA Mosaic helped popularize the Web in 1993.
- Netscape Navigator made the Web broadly accessible starting in 1994.
- JavaScript was created at Netscape by Brendan Eich in 1995.
- Netscape contributors also developed the HTTP cookie mechanism in the 1990s.

The site links to primary and foundational sources in the **Read the original blueprints** section.

## Files

- `index.html` — narrative homepage and simulation gateway
- `tcp.html` — dedicated, step-by-step TCP-only simulation
- `styles.css` — shared visual system and homepage design
- `tcp.css` — focused TCP-lab layout and responsive styles
- `app.js` — homepage timeline, packet workshop, and Netscape demo interactions
- `tcp.js` — TCP stepper, handshake animation, recovery, and connection close
