# Pandit Computers & Printers — Website

A complete, production-ready, responsive website for a printing and computer services business. Built with semantic HTML5, hand-crafted CSS3 (no framework dependency), and vanilla JavaScript (ES6).

## 🗂️ Folder Structure

```
pandit-computers/
├── index.html                  Home page
├── about.html                  About Us
├── printing-services.html      19 printing service cards
├── computer-services.html      25 computer/digital service cards
├── gallery.html                Masonry gallery
├── pricing.html                Pricing tables + rate card
├── testimonials.html           12 customer reviews
├── faq.html                    22 FAQs
├── contact.html                Contact info + 4 forms + map
├── blog.html                   Blog listing
├── careers.html                Careers / job openings
├── track-order.html            Order tracking demo
├── privacy-policy.html
├── terms-conditions.html
├── refund-policy.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css               Full design system (tokens, components, responsive, dark mode)
├── js/
│   └── main.js                 All interactivity (nav, theme, forms, FAQ, etc.)
└── assets/
    ├── icons/
    │   └── favicon.svg
    └── images/                 (placeholder folder for real photography)
```

> Note: this build uses inline emoji/icon placeholders and CSS-drawn visual blocks instead of binary image assets, so the entire site is editable as plain text and has zero external image dependencies. Swap in real photography by replacing the relevant `<div>` placeholders (marked clearly in each page) with `<img>` tags pointing to files in `assets/images/`.

## 🚀 Quick Start

1. **No build step required.** This is a static site — just open `index.html` in a browser, or serve the folder with any static server:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```
2. Visit `http://localhost:8080`.

## 🌐 Deployment

Deploy directly to any static host:
- **Netlify / Vercel:** Drag and drop the folder, or connect a Git repo.
- **GitHub Pages:** Push to a repo and enable Pages on the `main` branch.
- **Traditional hosting (cPanel etc.):** Upload all files via FTP to your `public_html` directory.

Before going live:
- Replace `https://panditcomputers.example.com` throughout (meta tags, schema, sitemap.xml, robots.txt) with your real domain.
- Replace the phone number, email, and address placeholders with your actual business details (search for `+91 98765 43210`, `info@panditcomputers.example.com`, and `Shop No. 12, Main Market Road`).
- Replace the Google Map placeholder (`.map-wrap` divs) with a real embedded `<iframe>` from Google Maps.
- Replace emoji/placeholder visual blocks with real photography (shop front, machines, finished work) once available, optimized as WebP/JPEG and lazy-loaded (`loading="lazy"`).
- Connect the contact/order/booking/quote forms to a real backend (e.g., Formspree, Netlify Forms, or your own API) — currently they show client-side validation and a success toast only, with no server submission.

## 🎨 Design System

- **Palette:** Deep Navy `#0A1628`, Electric Blue `#1E6FD9`, Sky Blue `#4FA3E8`, White, Slate Grey — defined as CSS variables in `:root` and overridden for `[data-theme="dark"]`.
- **Typography:** Space Grotesk (display/headings) + Plus Jakarta Sans (body), loaded via Google Fonts.
- **Components:** Reusable card, button, form, and section classes — all defined once in `style.css` and reused across every page for consistency.
- **Dark Mode:** Toggle button in the navbar; preference saved to `localStorage`.
- **Animations:** Scroll-reveal via `IntersectionObserver`, animated counters, hover lifts, glassmorphism hero card, floating badges. Respects `prefers-reduced-motion`.

## ✅ Features Implemented

- Sticky/transparent-to-solid navbar with active link states
- Mobile hamburger menu
- Dark mode toggle with persistence
- Search overlay (UI only — wire up to real search/filter logic as needed)
- Floating WhatsApp, Call, and Scroll-to-top buttons
- Live chat widget placeholder (front-end only, simulated reply)
- Newsletter subscription form with validation
- 4 fully validated forms: Contact, Print Order (with file upload), Service Booking, Quote Request
- Order tracking demo page
- FAQ accordion (22 questions)
- Responsive masonry gallery
- Pricing tables + detailed rate card + "download price list" button (hook up to a real PDF)
- Breadcrumb navigation on every inner page
- SEO meta tags, Open Graph tags, and JSON-LD LocalBusiness schema
- `robots.txt` and `sitemap.xml`
- Fully responsive: mobile, tablet, desktop
- Accessible: semantic landmarks, ARIA labels on icon-only buttons, visible focus states, reduced-motion support

## 🔧 Customization Tips

- All site-wide colors/spacing/radii live in `css/style.css` under `:root` — change them once, and they cascade everywhere.
- To add/remove a service card, copy a `.service-card` block in `printing-services.html` or `computer-services.html`.
- To edit shared header/footer content across all pages, the Python generator scripts (`gen_*.py`, `build_pages.py`) used to scaffold this site are included for reference — re-run them after editing `build_pages.py` to regenerate all pages consistently. (Optional — you can also just hand-edit each HTML file directly.)

## 📞 Support

This is a demo/template build. For real deployment, replace all placeholder content (business details, map embed, images, backend form handling) with your actual data before publishing.
