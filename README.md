# Civic Vigilance - The People's Voice

A modern, performant landing page for Civic Vigilance - empowering citizens to report and resolve societal issues through transparency, community engagement, and real-time tracking.

## What is Civic Vigilance?

Civic Vigilance is a revolutionary platform designed to bridge the gap between citizens and authorities. We empower ordinary people to become the eyes and ears of their communities by providing a transparent, efficient system for reporting and tracking societal issues.

### Our Mission
Every voice matters. Every action counts. Civic Vigilance creates a direct line between concerned citizens and responsive authorities, ensuring every issue is heard, tracked, and resolved. We believe in civic empowerment - where citizens don't need permission to care about their communities.

### How It Works
1. **Report** - Citizens report issues with photos, location, and details
2. **Verify** - Our system verifies and categorizes reports based on severity
3. **Resolve** - Authorities take action with real-time updates to citizens

### Why Civic Vigilance?
Traditional complaint systems are fragmented, unresponsive, and lack transparency. Reports disappear into black holes, and communities lose faith. Civic Vigilance changes this narrative by creating accountability, transparency, and real-time tracking from report to resolution.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **React:** 19.0.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Icons:** Lucide React

## Performance Optimizations

This project has been extensively optimized for performance:

### Event Handler Optimizations
- **Throttled Scroll Listeners:** Navigation scroll tracking uses RAF (Request Animation Frame) throttling to prevent excessive re-renders
- **Throttled Mouse Tracking:** Hero section parallax effects use RAF throttling for smooth 60fps animations
- **Efficient Counter Animations:** Replaced multiple `setInterval` calls with single `requestAnimationFrame` loop

### Image Optimizations
- **Next.js Image Component:** All images use Next.js optimized Image component
- **Priority Loading:** Above-the-fold images marked with `priority` attribute
- **Blur Placeholders:** Hero image includes blur placeholder for better perceived performance
- **Optimized Formats:** Automatic WebP/AVIF format conversion
- **Specific Remote Patterns:** Restricted to specific Supabase domain for security
- **Long Cache TTL:** 30-day cache for optimized images

### Code Splitting & Lazy Loading
- **Dynamic Imports:** Below-the-fold sections lazy loaded with Next.js dynamic imports
- **Loading States:** Smooth loading spinners during chunk loading
- **Package Optimization:** Optimized imports for lucide-react, framer-motion, and Radix UI

### Build Optimizations
- **Console Removal:** Production builds remove console logs (except errors/warnings)
- **TypeScript Checking:** Enabled strict TypeScript checking for build-time error detection
- **ESLint Validation:** Enabled ESLint for code quality assurance

## UI/UX Improvements

### Dark Mode
- **Theme Toggle:** Beautiful animated theme switcher in navigation
- **System Preference Detection:** Respects user's system color scheme
- **Persistent State:** Theme preference saved to localStorage
- **Smooth Transitions:** Animated transitions between light/dark modes

### Accessibility
- **ARIA Labels:** Comprehensive aria-labels and aria-current attributes
- **Keyboard Navigation:** Full keyboard support for all interactive elements
- **Semantic HTML:** Proper use of semantic elements
- **Alt Text:** Descriptive alt text for all images
- **Focus States:** Clear focus indicators for keyboard navigation

### Performance Metrics
- **Reduced Layout Shifts:** Proper image dimensions and blur placeholders
- **Faster Initial Load:** Lazy loading and code splitting
- **Smooth Animations:** 60fps animations with RAF throttling
- **Reduced Bundle Size:** Tree-shaking and optimized imports

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
# Create production build
npm run build
# or
bun build

# Start production server
npm start
# or
bun start
```

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page with lazy loading
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Optimized navigation with scroll tracking
│   │   ├── HeroSection.tsx    # Hero with parallax effects
│   │   ├── FeaturesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CivicDutySection.tsx
│   │   ├── ReportDemoSection.tsx
│   │   ├── Footer.tsx
│   │   ├── BackToTop.tsx
│   │   ├── ThemeToggle.tsx    # Dark mode toggle
│   │   └── ui/                # Radix UI components
│   └── lib/
│       ├── performance.ts     # Throttle/debounce utilities
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration (optimized)
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Features

- **Instant Reporting:** Photo, location, and description-based issue reporting
- **Real-Time Tracking:** Transparent issue tracking from submission to resolution
- **Community Engagement:** Connect with thousands of active citizens
- **Verified Actions:** All reports verified and prioritized
- **Impact Analytics:** View statistics and community impact
- **Smart Notifications:** Instant alerts for local issues

## Performance Best Practices Used

1. **Request Animation Frame Throttling:** All animation-heavy event listeners
2. **Passive Event Listeners:** Scroll and mouse events for better scrolling performance
3. **useCallback & useMemo:** Prevent unnecessary re-renders
4. **Dynamic Imports:** Code splitting for better initial load
5. **Image Optimization:** WebP/AVIF with proper dimensions and blur placeholders
6. **Bundle Analysis:** Optimized package imports and tree-shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Civic Vigilance Team

## Contributing

This project is optimized for performance and maintainability. When contributing:
- Follow TypeScript strict mode
- Use proper semantic HTML
- Add ARIA labels for accessibility
- Optimize images before adding
- Use throttle/debounce for event handlers
- Test in both light and dark modes

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vijendrapratap/civic_vigilance_website)

This project is optimized for Vercel deployment. Simply click the button above or follow these steps:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

Your site will be live in minutes with automatic HTTPS, CDN, and optimized performance!
