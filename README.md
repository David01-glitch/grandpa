# Grandpa's Workshop

A lightweight DIY and woodworking blog for older adults — built with React, Vite, Tailwind, and Express.

## Tech Stack
- React 18 + Vite
- React Router DOM
- Tailwind CSS
- Express.js + compression (production server)

## Install
```bash
npm install
```

## Development
```bash
npm run dev
```
Opens at http://localhost:5173

## Production Build
```bash
npm run build
```
Output goes to `/dist`.

## Run Production Server
```bash
npm start
```
Serves the built site via Express with gzip compression at http://localhost:3000

## Deployment

### Heroku / Render / Railway
1. Push this repository to your Git host.
2. Connect the repo to your platform of choice.
3. Build command: `npm install && npm run build`
4. Start command: `npm start`
5. Node 18+ required.

A `Procfile` and `app.json` are included for one-click Heroku deploys.

### Static hosting (Netlify, Vercel, Cloudflare Pages)
- Build command: `npm run build`
- Publish directory: `dist`
- Add a SPA redirect rule from `/*` → `/index.html` (200).

## Project Structure
```
src/
  assets/images/   Local images (hero, woodworking, furniture, garage, tutorials, community, blog)
  components/     Navbar, Footer, Section, ExpandableCard, FAQ, Newsletter, CookieBanner
  pages/          Home, About, Blog, Community, Tutorials, Contact, Category, Legal, NotFound
  data/site.js    Site copy, categories, articles, testimonials, FAQs
  utils/analytics.js  Google Analytics helpers
```

## Contact
- Email: grandpasworkshop@gmail.com
- Phone: (414) 555-9903
- Address: 216 Timber Ridge Rd, Milwaukee, WI 53217
