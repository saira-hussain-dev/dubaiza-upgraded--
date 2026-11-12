# DubaiZA — React + Vite

Red & white UAE classified marketplace, upgraded to match the live https://dubaiza.com design.

## Run
```bash
npm install
npm run dev
```
Open the localhost link Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## What is in this version (upgraded 2026-11-12)
- Header with logo, Home / Categories / Blog / FAQs nav, language dropdown, and a working mobile hamburger menu
- Two-column hero "Buy. Sell. Thrive." with location + category + keyword search and quick pills
- Categories section: Motors, Property, Jobs, Mobiles & Tablets, Electronics, Furniture & Home Garden, Services, Community
- Discover United Arab Emirates: Abu Dhabi, Ajman, Dubai, Fujairah, Ras al-Khaimah, Sharjah, Umm al-Quwain
- Blog section (15 posts) and FAQ section (12 questions)
- Listing cards, favourites, search, sorting, demo login/register, messages, notifications, Post Ad, and Profile panel
- Icons: lucide-react (no emojis). Fully responsive for desktop, tablet and mobile.

## Edit listings
Edit only `src/data/listings.js` — titles, prices, locations and images.
Site content (emirates, blog, FAQs) is in `src/data/site.js`.

## Backend note
Frontend only for now. Login is a localStorage demo, messages stay in this browser tab, notifications are sample data, and posted ads appear only locally. A real backend + database is the next phase.
