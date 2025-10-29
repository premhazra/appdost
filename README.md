# AppDost

What I included
- Vite + React scaffold
- Tailwind CSS + PostCSS config
- Simple components: Header, Hero, Card

How to run locally (Windows PowerShell)

1. Install dependencies

```powershell
cd "c:\appdost"
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Deployment

- Push the repository to GitHub.
- Deploy on Vercel or Netlify: connect your GitHub repository and select the root folder. Build command: `npm run build`. Publish directory: `dist`.

Recent additions in this workspace (inspired rebuild):

- Routing with `react-router-dom` and pages: Home, Discover, Profile, Messages.
- Discover page: searchable mock listings (see `src/data/listings.js`) with `SearchBar` and `ListingCard` components.
- Accessibility improvements: aria-labels on navigation and search.

If you want an even closer visual rebuild of appdost.in, I can iterate on styles, colors and layout — but I won't copy original assets or text verbatim without permission.

Notes and next steps
- Replace placeholder visuals and refine styles.
- Add routes, pages, and interactive features for fuller demo (profiles, messaging, search).

Next recommended steps (I can implement):
- Add more listings and categories & backend mock (JSON server) for demo data.
- Add unit/integration tests and simple CI via GitHub Actions.
- Prepare a polished README with screenshots and deploy to Vercel/Netlify.
