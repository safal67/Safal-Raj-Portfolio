# Deployment Guide: Safal Raj Portfolio Website

This document provides step-by-step instructions for deploying your portfolio website publicly so that companies and recruiters can view it live.

---

## ⚡ Option 1: Vercel (Recommended — 2 Minutes, Free)

Vercel is the creator of Next.js and the industry standard for deploying React + Vite portfolio websites. It provides free SSL (HTTPS), global CDN speed, and auto-deploys whenever you push changes to GitHub.

### Step 1: Push project to GitHub

Open terminal in your project directory:

```powershell
cd C:\Users\safal\.gemini\antigravity\scratch\safal-pm-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

Create a new repository on [GitHub](https://github.com/new) named `safal-pm-portfolio` (Public), then run:

```powershell
git remote add origin https://github.com/safal67/safal-pm-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account (`safal67`).
2. Click **"Add New..."** → **"Project"**.
3. Select your `safal-pm-portfolio` repository.
4. Vercel automatically detects **Vite** configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. In ~45 seconds, your site will be live at a link like: `https://safal-pm-portfolio.vercel.app`!

---

## 🌐 Option 2: Netlify (Drag & Drop or GitHub)

If you prefer Netlify:

### Method A: Drag & Drop Build Folder
1. Run `npm run build` inside `safal-pm-portfolio` directory.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder directly onto the page.
4. Your site will instantly go live with a custom Netlify URL!

### Method B: GitHub Continuous Deployment
1. Log in to [Netlify](https://www.netlify.com/) with GitHub.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select `safal67/safal-pm-portfolio` and click **"Deploy Site"**.

---

## 🔗 Custom Domain (Optional)
If you purchase a custom domain (e.g., `safalraj.com` or `safalraj.in` on GoDaddy/Namecheap):
1. In Vercel or Netlify settings, click **"Domains"**.
2. Add your custom domain `safalraj.com`.
3. Update your DNS CNAME / A records as instructed by Vercel/Netlify.
