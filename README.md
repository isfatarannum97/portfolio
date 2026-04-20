# 🧑‍💻 Alex Morgan — Personal Portfolio

A modern, fully responsive personal portfolio built with **React (Vite)** + **Tailwind CSS**.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Site icon
│   └── resume.pdf           # ← Replace with YOUR resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav + dark mode toggle + mobile menu
│   │   ├── Hero.jsx         # Hero section with profile avatar + CTAs
│   │   ├── About.jsx        # Bio, stats, education timeline
│   │   ├── Skills.jsx       # Animated progress bars + tech pills
│   │   ├── Projects.jsx     # Project cards with links
│   │   ├── Contact.jsx      # Validated form + WhatsApp link
│   │   └── Footer.jsx       # Social links + nav
│   ├── hooks/
│   │   └── useInView.js     # Custom scroll-intersection hook
│   ├── pages/
│   │   └── Home.jsx         # Assembles all sections
│   ├── App.jsx              # Router + dark mode state
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives + custom utilities
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Installation & Running

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🎨 Customisation Guide

### Personal info
Edit the following files with your own content:

| What to change | File |
|---|---|
| Name, role, bio | `src/components/Hero.jsx` |
| Bio text, stats, education | `src/components/About.jsx` |
| Skill names & percentages | `src/components/Skills.jsx` |
| Project titles, descriptions, links | `src/components/Projects.jsx` |
| Email, WhatsApp number | `src/components/Contact.jsx` |
| Social media links | `src/components/Footer.jsx` + `Hero.jsx` |

### Resume
Drop your PDF into `public/resume.pdf` — the download button is already wired up.

### Profile photo
In `Hero.jsx`, replace the inline SVG avatar with:
```jsx
<img
  src="/profile.jpg"        // put profile.jpg in /public
  alt="Alex Morgan"
  className="w-full h-full object-cover rounded-full"
/>
```

### Colors / fonts
All design tokens live in `tailwind.config.js`:
```js
colors: {
  accent: '#c84b31',   // ← change to your brand color
  gold:   '#c9a84c',
}
fontFamily: {
  display: ['"Playfair Display"', ...],  // ← swap fonts here
  body:    ['"DM Sans"', ...],
}
```
Update the Google Fonts `<link>` in `index.html` to match any new font choices.

### Contact form backend
The form currently logs to the console. To wire it up for real:

**Option A — EmailJS (no backend needed)**
```bash
npm install @emailjs/browser
```
Replace the `setTimeout` in `Contact.jsx` with:
```js
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

**Option B — Formspree**
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## 🌙 Dark Mode
Dark mode is toggled via the moon/sun icon in the navbar. The preference is saved in `localStorage` and respects the OS system preference on first visit.

---

## 📦 Tech Stack
- **React 18** — UI components
- **Vite** — lightning-fast dev server & build
- **Tailwind CSS v3** — utility-first styling
- **React Router v6** — client-side routing
- **Lucide React** — icon library

---

## 🌐 Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag-and-drop the /dist folder to netlify.com
```

---

## 📄 License
MIT — free to use and modify for personal and commercial projects.
