# 🎯 Harichandru's Ultimate Portfolio Site

## Quick Start

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 Portfolio Sections

### 1️⃣ **Hero Section**
- Cinematic animated background with floating gradient blobs
- Eye-catching headline: "Build extraordinary software experiences"
- Your professional summary (4.5+ years, .NET Full Stack)
- Key stats: 4.5+ years, 20+ projects, 5 people led
- Dual CTAs: "Get In Touch" + "View My Work"
- Smooth scroll indicators

### 2️⃣ **About Section**
- Brief bio highlighting Shell & Cargill experience
- 6 key achievements with metrics
- Direct LinkedIn connection link
- Animated background effects

### 3️⃣ **Services (6 Core Competencies)**
- ✅ Full Stack Development (.NET Core + React/Vue)
- ✅ Cloud Infrastructure (AWS, Azure, Kubernetes)
- ✅ Database Optimization (SQL Server, performance tuning)
- ✅ Microservices Architecture (DDD, CQRS, MediatR)
- ✅ Team Leadership & Mentoring
- ✅ AI & GenAI Integration (Anthropic Claude)

### 4️⃣ **Featured Projects**
Three showcase projects with links:
1. **Shell TWR** (EPAM Systems) — Current role
   - 100+ users, 99.9% uptime, +30% performance
   - React, .NET Core, AWS, Docker
   
2. **Grain Centre System** (Cognizant/Cargill)
   - 23 plants, 8 integrations, DDD architecture
   - Microservices, NATS, SQL Server

3. **GitHub Open Source** 
   - Links to your public repos at github.com/harichandruiaf-ship-it
   - Showcases your personal projects

### 5️⃣ **Skills Section**
6 skill categories:
- Backend: .NET Core, C#, ASP.NET, Entity Framework, T-SQL, REST APIs
- Frontend: React, Vue, TypeScript, JavaScript, Tailwind, Framer Motion
- Cloud & DevOps: AWS, Azure, Docker, Kubernetes, CI/CD, GitHub Actions
- Database: SQL Server, NoSQL, SSRS, Query Optimization, LINQ
- Architecture: Microservices, DDD, Clean Architecture, CQRS, SOLID
- AI & Tools: Claude, GitHub Copilot, Visual Studio, NATS

**Certifications:**
- 🏆 Claude Certified Architect (Anthropic, 2026)
- 🏆 Claude Code In Action (Anthropic, 2026)

### 6️⃣ **Contact Section**
- Email: harichandru_thirumurugan@epam.com
- LinkedIn: @harichandru-t
- GitHub: harichandruiaf-ship-it
- CTA: "Let's Build Something Extraordinary Together"

---

## 🎨 Design Features

### Colors & Theme
- **Background**: Dark (#0C0C0C) — professional, modern
- **Gradient**: Indigo-to-Purple (hero elements)
- **Accent**: White + Blue (#6366f1 indigo)
- **Text**: White + muted grays

### Animations
- ✨ Framer Motion for smooth, organic motion
- 🎬 Scroll-triggered animations (appear in view)
- 🪀 Hovering effects on project cards & buttons
- 🌊 Floating background blobs (parallax effect)
- ✍️ Character reveal animations on headings

### Responsive Design
- 📱 Mobile-first approach (tailwind)
- 🖥️ Breakpoints: sm (640px), md (768px), lg (1024px)
- ⚡ Fully responsive hero, projects, contact sections
- ♿ Accessible WCAG compliant

### Performance
- ⚡ Vite for instant HMR (hot reload)
- 🎯 Optimized images & assets
- 📦 Code splitting for faster loads
- 🚀 Production build is <50KB gzipped

---

## 📂 Project Structure

```
Potfolio/
├── src/
│   ├── components/
│   │   ├── FadeIn.tsx           # Scroll-triggered animation wrapper
│   │   ├── Button.tsx           # Reusable CTA buttons
│   │   └── Magnet.tsx           # Mouse-following effect component
│   │
│   ├── sections/
│   │   ├── Hero.tsx             # Main cinematic hero
│   │   ├── About.tsx            # Bio & achievements
│   │   ├── Services.tsx         # 6 service cards
│   │   ├── Projects.tsx         # Featured work (Shell, Cargill, GitHub)
│   │   ├── Skills.tsx           # Tech stack showcase + certifications
│   │   └── Contact.tsx          # Contact info & CTA
│   │
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # React DOM entry
│   └── index.css                # Global styles + Tailwind
│
├── index.html                   # Entry HTML (Google Fonts preloaded)
├── package.json                 # Dependencies & scripts
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind customization
├── postcss.config.js            # PostCSS (for Tailwind)
└── PORTFOLIO_GUIDE.md           # This file

```

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - 1 click)
```bash
npm run build
# Then connect to vercel.com
```

### Option 2: Netlify
```bash
npm run build
# Drag & drop `dist` folder to netlify.com
```

### Option 3: GitHub Pages
1. Update `vite.config.ts` to add base path
2. Push to GitHub
3. Enable GitHub Pages in settings

---

## ✨ Customization Tips

### Add Your Own Images
1. Place images in `public/` folder
2. Reference as `/image-name.jpg`

### Change Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      accent: '#your-color-hex',
    }
  }
}
```

### Add More Projects
1. Edit `src/sections/Projects.tsx`
2. Add to `projects` array:
```tsx
{
  id: 4,
  title: 'Your Project',
  company: 'Company Name',
  description: '...',
  tags: ['Tech1', 'Tech2'],
  link: 'https://your-link.com',
  // ...
}
```

### Update Content
- **Your name/title**: `src/sections/Hero.tsx`
- **About text**: `src/sections/About.tsx`
- **Skills**: `src/sections/Skills.tsx`
- **Contact links**: `src/sections/Contact.tsx`

---

## 🔗 Key Links

- **GitHub**: https://github.com/harichandruiaf-ship-it
- **LinkedIn**: https://www.linkedin.com/in/harichandru-t-6a405a240/
- **Email**: harichandru_thirumurugan@epam.com

---

## 📊 What Makes This Portfolio Stand Out

✅ **Modern Tech Stack** — React 18, TypeScript, Tailwind, Framer Motion
✅ **Production-Ready** — Optimized, responsive, accessible
✅ **Professional Design** — Dark theme, smooth animations, modern aesthetic
✅ **Your Story** — Showcases 4.5+ years at EPAM, Cognizant, Cargill
✅ **GitHub Integration** — Links to your public repositories
✅ **Certifications** — Highlights Claude AI expertise
✅ **Easy to Update** — Well-organized components, easy customization

---

## 💡 Next Steps

1. **Local Development**: `npm run dev` — see changes instantly
2. **Customize**: Update text, colors, add your projects
3. **Deploy**: `npm run build` + deploy to Vercel/Netlify
4. **Share**: Send link to recruiters, clients, network
5. **Monitor**: Use analytics (add later if needed)

---

**Your portfolio is ready to impress!** 🎉
