# Sammunat Landing Page

A modern, responsive landing page built with React and Vite. This project showcases a complete solution for a landing page with multiple sections including navigation, hero section, features, problem/solution comparison, how-it-works guide, contact form, and footer.

##  Project Overview

Sammunat is a landing page designed to present a product or service with multiple engaging sections. It includes:

- Responsive Navigation: Header with navigation links
- Hero Section: Eye-catching introduction section
- Features: Showcase of key features
- Problem & Solution: Comparison of problems and solutions
- How It Works: Step-by-step guide or process explanation
- Contact Section: User contact form
- Footer: Site footer with information

---

## 🛠 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | ^19.2.0 | UI Framework |
| Vite | ^7.2.4 | Build tool & Dev server |
| JavaScript | ES6+ | Programming language |
| CSS | 3 | Styling |
| ESLint | ^9.39.1 | Code quality & linting |
| Node.js | 14+ | Runtime environment |

---

## 📁 Project Structure

```
sammunat-landing/
│
├── 📄 index.html              # Main HTML entry point
├── 📄 package.json            # Project dependencies & scripts
├── 📄 vite.config.js          # Vite configuration
├── 📄 eslint.config.js        # ESLint configuration
├── 📄 README.md               # This file
│
├── public/                    # Static assets (images, favicon, etc.)
│
└── src/                       # Source code
    ├── main.jsx              # React entry point
    ├── App.jsx               # Main App component
    ├── App.css               # App styles
    ├── index.css             # Global styles
    │
    ├── assets/               # Project assets (images, icons, media)
    │
    └── components/           # React components
        ├── Navbar.jsx        # Navigation bar component
        ├── Navbar.css        # Navbar styles
        │
        ├── Hero.jsx          # Hero section component
        ├── Hero.css          # Hero styles
        │
        ├── Features.jsx      # Features showcase component
        ├── Features.css      # Features styles
        │
        ├── ProblemSolution.jsx    # Problem/Solution component
        ├── ProblemSolution.css    # Problem/Solution styles
        │
        ├── HowItWorks.jsx    # How it works guide component
        ├── HowItWorks.css    # How it works styles
        │
        ├── Contact.jsx       # Contact form component
        ├── Contact.css       # Contact styles
        │
        ├── Footer.jsx        # Footer component
        └── Footer.css        # Footer styles
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** - Package manager
- **Git** (optional) - For version control

To check if you have Node.js installed:
```bash
node --version
npm --version
```

---

## 📦 Installation Steps

### Step 1: Clone or Navigate to Project Directory

```bash
cd "c:\Users\lenovo\Desktop\samunat landing page\sammunat-landing"
```

### Step 2: Install Dependencies

Install all required packages listed in `package.json`:

```bash
npm install
```

This command will:
- Download all dependencies from npm registry
- Create a `node_modules` folder
- Generate a `package-lock.json` file for version locking

Expected output:
```
added XX packages in Xs
```

### Step 3: Verify Installation

Check that everything is installed correctly:

```bash
npm list
```

---

## 🎨 Styling System

### CSS Architecture

- **Global Styles**: `src/index.css` - Reset, variables, and global rules
- **App Styles**: `src/App.css` - App-level layout and positioning
- **Component Styles**: Individual `.css` files for each component

### CSS File Organization

Each component has a corresponding CSS file:
```
Component.jsx → Component.css
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [ESLint Documentation](https://eslint.org)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 📄 License

This project is created for Sammunat. All rights reserved.

---

## ✅ Quick Reference

### Development Checklist
- [ ] Install Node.js and npm
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open browser to `http://localhost:5173`
- [ ] Start editing components

### Before Deploying
- [ ] Run `npm run lint` - No errors
- [ ] Run `npm run build` - Success
- [ ] Run `npm run preview` - Test build
- [ ] Check responsiveness
- [ ] Test all links and forms

---

**Last Updated**: December 2025
**Project Version**: 0.0.0
**Node Version Required**: 14+
