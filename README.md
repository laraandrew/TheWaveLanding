# Landing Page - AI Automation for SMBs

A modern, fully responsive landing page built with Next.js, TailwindCSS, and Framer Motion.

## Features

- ✅ Dark theme (default) with light/dark toggle
- ✅ Splash screen with slide-up animation
- ✅ Fully responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ All sections as specified with exact content
- ✅ Reusable components architecture

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── CTAButton.tsx        # Reusable CTA button component
│   ├── FounderCard.tsx      # Founder card component
│   ├── Header.tsx           # Header with nav and theme toggle
│   ├── Hero.tsx             # Hero section component
│   ├── SectionWrapper.tsx   # Wrapper for sections with animations
│   ├── SplashScreen.tsx     # Splash screen with slide-up animation
│   ├── TestimonialCard.tsx  # Testimonial card component
│   ├── TierCard.tsx         # Tier/pricing card component
│   └── ThemeProvider.tsx    # Theme context provider
└── package.json
```

## Color Palette

- Background: Black / Dark Gray
- Text: White
- Accents: Green (#00FF7F)
- Buttons: Blue (#3B82F6)

## Build

```bash
npm run build
```

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.
