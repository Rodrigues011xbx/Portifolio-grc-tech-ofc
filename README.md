<div align="center">

<img src="public/banner.png" alt="GRC Tech Banner" width="100%" />

<br />

# ⚡ Gabriel Rodrigues Calixto — Portfolio

### _An immersive, cinematic developer portfolio built with cutting-edge web technologies._

<br />

[![Deploy to Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://portifolio-grc-tech.netlify.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Personal-8B5CF6?style=for-the-badge)](/)

<br />

[🌐 **Live Demo**](https://portifolio-grc-tech.netlify.app) · [📫 **Contact**](https://portifolio-grc-tech.netlify.app/#contact) · [💼 **LinkedIn**](https://linkedin.com)

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

</div>

## 🎬 About

A high-performance, cinematic portfolio showcasing my work as a **Backend / Full-Stack Developer**. The site features immersive 3D elements, smooth scroll-driven animations, dark/light theme switching, and a terminal-inspired interactive section — all optimized for a premium user experience.

> _"Built to be more than a resume — an experience."_

<br />

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|:---:|:---:|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js_16-000?style=flat-square&logo=next.js) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **UI Library** | ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **3D Engine** | ![Three.js](https://img.shields.io/badge/Three.js-000?style=flat-square&logo=three.js) ![R3F](https://img.shields.io/badge/React_Three_Fiber-000?style=flat-square) |
| **Animations** | ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black) |
| **Smooth Scroll** | ![Lenis](https://img.shields.io/badge/Lenis-000?style=flat-square) |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **Icons** | ![Lucide](https://img.shields.io/badge/Lucide_React-F56565?style=flat-square) |
| **Theming** | ![next-themes](https://img.shields.io/badge/next--themes-000?style=flat-square) |
| **Deploy** | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white) |

</div>

<br />

## ✨ Features

<table>
<tr>
<td width="50%">

🎥 **Cinematic Loading Screen**
> Immersive entry animation with a full-screen loader

🌐 **3D Interactive Elements**
> Powered by React Three Fiber & Drei

🧭 **Smooth Scroll Navigation**
> Butter-smooth scrolling with Lenis

🎨 **Dark / Light Theme**
> Seamless theme switching with next-themes

🖱️ **Custom Cursor**
> Responsive cursor that reacts to interactive elements

</td>
<td width="50%">

📽️ **Section Transitions**
> Scale, wipe, and fade transitions between sections

🏗️ **Architecture Showcase**
> Dedicated section for system design philosophy

💻 **Interactive Terminal**
> Command-line inspired section

📱 **Fully Responsive**
> Optimized for all screen sizes

⚡ **Marquee Animations**
> Dynamic scrolling tech banners

</td>
</tr>
</table>

<br />

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Main page orchestrator
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── about/              # About section
│   ├── animations/         # Marquee & SectionTransition
│   ├── architecture/       # Architecture showcase
│   ├── contact/            # Contact form section
│   ├── experience/         # Work experience timeline
│   ├── hero/               # Hero section with 3D
│   ├── layout/             # Navbar & Footer
│   ├── projects/           # Projects gallery
│   ├── skills/             # Skills grid
│   ├── ui/                 # CustomCursor, Terminal, LoadingScreen
│   └── Providers.tsx       # Theme & context providers
├── data/
│   ├── experience.ts       # Work experience data
│   ├── projects.ts         # Projects data
│   └── skills.ts           # Skills & categories
├── hooks/
│   ├── useMediaQuery.ts    # Responsive breakpoint hook
│   ├── useMousePosition.ts # Mouse tracking for cursor
│   └── useSmoothScroll.ts  # Lenis smooth scroll hook
└── types/                  # TypeScript type definitions
```

<br />

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 22
- **npm** ≥ 10

### Installation

```bash
# Clone the repository
git clone https://github.com/Rodrigues011xbx/Portifolio-grc-tech-ofc.git

# Navigate to the project
cd Portifolio-grc-tech-ofc

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | 🔧 Start development server |
| `npm run build` | 📦 Create production build |
| `npm run start` | 🚀 Start production server |
| `npm run lint` | 🔍 Run ESLint |

<br />

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for continuous deployment to Netlify.

```mermaid
graph LR
    A["🔀 Push to main"] --> B["⚙️ GitHub Actions"]
    B --> C["📥 Install deps"]
    C --> D["🔨 Build project"]
    D --> E["🚀 Deploy to Netlify"]
    E --> F["✅ Live"]

    style A fill:#6366f1,stroke:#4f46e5,color:#fff
    style B fill:#2563eb,stroke:#1d4ed8,color:#fff
    style C fill:#0891b2,stroke:#0e7490,color:#fff
    style D fill:#059669,stroke:#047857,color:#fff
    style E fill:#00C7B7,stroke:#00a89d,color:#fff
    style F fill:#22c55e,stroke:#16a34a,color:#fff
```

### Setup

Two repository secrets are required in **GitHub → Settings → Secrets and variables → Actions**:

| Secret | Source |
|---|---|
| `NETLIFY_AUTH_TOKEN` | Netlify → User Settings → Applications → Personal access tokens |
| `NETLIFY_SITE_ID` | Netlify → Site Configuration → General → Site ID |

The workflow is defined at [`.github/workflows/netlify.yml`](.github/workflows/netlify.yml).

<br />

## 📊 Skills Overview

<div align="center">

| Category | Skills |
|:---:|:---|
| **Languages** | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Frameworks** | ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express-000?style=flat-square&logo=express) ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/-Next.js-000?style=flat-square&logo=next.js) ![Three.js](https://img.shields.io/badge/-Three.js-000?style=flat-square&logo=three.js) |
| **Databases** | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) |
| **Cloud & Infra** | ![AWS](https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-web-services&logoColor=white) ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white) ![MinIO](https://img.shields.io/badge/-MinIO-C72E49?style=flat-square&logo=minio&logoColor=white) |
| **Tools** | ![RabbitMQ](https://img.shields.io/badge/-RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white) ![Testing](https://img.shields.io/badge/-Automated_Testing-8B5CF6?style=flat-square) ![AI](https://img.shields.io/badge/-AI_/_LLMs-10B981?style=flat-square) |
| **Architecture** | ![REST](https://img.shields.io/badge/-REST_APIs-FF6C37?style=flat-square) ![SaaS](https://img.shields.io/badge/-SaaS_Systems-6366F1?style=flat-square) ![UseCases](https://img.shields.io/badge/-Use_Cases_Architecture-0EA5E9?style=flat-square) |

</div>

<br />

## 📄 License

This project is for personal portfolio purposes.

---

<div align="center">

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

**Built with ☕ and precision by [Gabriel Rodrigues Calixto](https://portifolio-grc-tech.netlify.app)**

<br />

![Visitors](https://komarev.com/ghpvc/?username=Rodrigues011xbx&label=Profile%20Views&color=0e75b6&style=flat)

</div>
