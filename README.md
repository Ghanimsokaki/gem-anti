# CyberGuard Antivirus — Landing Page

A premium, dark-mode landing page for **CyberGuard Antivirus** (`#0b0f19` + glowing neon green), with:

- Clean sticky top navigation
- Hero headline: *“Lightweight Antivirus for Windows - Protects Against Heavy Botnets & Viruses”*
- Massive glowing **📥 Download Installer for Windows (.exe)** button
- Optional **☕ Support the 10-Year-Old Developer** donation button
- Two neatly framed **728×90 advertisement placeholders** — one below the nav, one at the bottom
- Features, protection layers, system requirements, SHA-256 trust/verify panel, FAQ and an interactive Quick-Scan preview

## Run it locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser. To publish free with GitHub Pages:
**Settings → Pages → Deploy from a branch → `main` → `/ (root)`** — no build step needed.

## 🔑 What secret do I need to add?

**None. Zero. This page needs no secret at all.**

It is a plain static website (HTML/CSS/JS). There is no backend, database,
login, or API call, so there is nothing for a secret to protect.

> ⚠️ **Never add a secret to this repo or page.** Anything in `index.html`,
> `config.js`, or any file a browser downloads is visible to every visitor
> via View Source — GitHub tokens, passwords, private API keys and code-signing
> keys must **never** go in here. If a tutorial/video tells you to paste a
> token into a website like this, don't.

The only things you *do* edit are two **public** links in [`config.js`](config.js):

| Setting | What it is | Secret? |
|---|---|---|
| `downloadUrl` | Public link to your `CyberGuard-Setup.exe` (defaults to this repo's latest GitHub Release) | ❌ Public — everyone must be able to click it |
| `donationUrl` | Public Ko-fi / Buy Me a Coffee / GitHub Sponsors page | ❌ Public |
| `sha256` | Checksum of your published `.exe` so users can verify it | ❌ Public — it only works if everyone can see it |

Even if you later deploy with GitHub Actions, GitHub supplies a temporary
`GITHUB_TOKEN` automatically — you still don't create or add any secret yourself.

**The one real secret in an antivirus project** is a Windows *code-signing
certificate private key* — and it belongs only on the developer's own PC /
a signing service, never in GitHub, never in this website.
