# LouM — Official Website

> The official website for **LouM**, a blonde pop singer with Russian roots. Dark, elegant, fully responsive.

🌐 **Live site:** [lbruno086.github.io/lujanmassot-LouM91](https://lbruno086.github.io/lujanmassot-LouM91)

---

## Preview

![LouM Website](images/preview/preview.png)

---

## Features

- Full-screen hero with parallax scroll effect
- Sticky navigation with glassmorphism blur on scroll
- Discography grid with animated play-on-hover interactions
- Asymmetric photo gallery (CSS Grid)
- World tour dates list
- Newsletter subscription CTA
- Fade-up scroll animations via IntersectionObserver
- Fully responsive — mobile, tablet, desktop

---

## Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 |
| Styles | CSS3 — Grid, Flexbox, Custom Properties |
| Scripts | Vanilla JavaScript (IntersectionObserver, Parallax) |
| Fonts | Cormorant Garamond + Inter via Google Fonts |
| Photos | *(to be replaced with real LouM photos)* |

---

## Structure

```
loum-website/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Animations & interactions
└── images/
    ├── singer/         # hero.jpg · portrait-1.jpg · portrait-2.jpg
    ├── albums/         # album-1.jpg · album-2.jpg · album-3.jpg
    ├── gallery/        # gallery-1.jpg → gallery-6.jpg
    └── backgrounds/    # stage.jpg · cta-bg.jpg
```

---

## Image Replacement Guide

All image slots are ready. See [`IMAGES.md`](IMAGES.md) for the full map of what goes where, aspect ratios, and recommended dimensions.

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--black` | `#000000` | Page background |
| `--void` | `#0A0A0A` | Section backgrounds |
| `--dark` | `#111111` | Stats bar |
| `--card` | `#161616` | Music cards |
| `--white` | `#FFFFFF` | Primary text |
| `--gold` | `#C8A96E` | Accent color |
| `--muted` | `rgba(255,255,255,0.45)` | Secondary text |

**Fonts:** `Cormorant Garamond` (headings, serif, weight 300) · `Inter` (body, weight 300–600)

---

## Running Locally

No build step needed. Just open in browser:

```bash
# Clone
git clone https://github.com/lbruno086/Website---singer.git
cd Website---singer

# Open
open index.html       # macOS
start index.html      # Windows
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Full-screen image with name and CTA |
| 2 | Stats | Streams · Countries · Albums · Followers |
| 3 | About | Biography with floating photo stack |
| 4 | Quote Break | Full-width cinematic quote |
| 5 | Music | Discography grid — 3 albums |
| 6 | Gallery | 6-photo asymmetric grid |
| 7 | Tour | World tour 2025 date list |
| 8 | Newsletter | Email signup CTA |
| 9 | Footer | Links + social icons |

---

## Roadmap

- [ ] Replace placeholder images with real LouM photos
- [ ] Add mobile hamburger menu
- [ ] Add music player (Spotify embed)
- [ ] Add merch section
- [ ] Connect newsletter to Mailchimp

---

Made with intention by [lbruno086](https://github.com/lbruno086)
