# Jon's Tutoring - Premium Math Tutoring Website

A premium, high-level math tutoring website built with Next.js, TypeScript, and Tailwind CSS. The site emphasizes quality, clarity, and professionalism while being fully responsive and accessible across all devices.

## 🚀 Features

- **Modern Design**: Clean, professional design with premium aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Tab-based navigation with smooth scrolling between sections
- **Interactive Elements**: Animated components with Framer Motion
- **Contact Form**: Functional contact form with validation
- **Testimonials**: Showcase of satisfied families and teachers
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML
- **Performance**: Optimized for fast loading and excellent Lighthouse scores

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
jon-tutoring/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   └── sections/
│   │       ├── hero-section.tsx
│   │       ├── about-section.tsx
│   │       ├── services-section.tsx
│   │       ├── testimonials-section.tsx
│   │       └── contact-section.tsx
│   ├── data/
│   │   └── content.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary Blue**: #2563eb (Trust, professionalism)
- **Primary Dark**: #1e40af (Depth, authority)
- **Accent Gold**: #f59e0b (Premium feel, success)
- **Neutral Grays**: Full gray scale for text and backgrounds

### Typography
- **Primary Font**: Inter (clean, modern, highly readable)
- **Secondary Font**: Georgia (for quotes and testimonials)
- **Font Weights**: 300, 400, 500, 600, 700

### Layout
- **Max Width**: 1200px for desktop content
- **Grid System**: 12-column responsive grid
- **Spacing**: 8px base unit
- **Border Radius**: 8px (cards), 12px (buttons), 16px (hero sections)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jon-tutoring
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- **Breakpoints**: 320px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)
- **Touch Targets**: Minimum 44px for interactive elements
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Proper focus management and screen reader support

## 🎯 Sections

### 1. Hero Section
- Compelling headline and call-to-action
- Background image with overlay
- Smooth scroll indicator

### 2. About Section
- Professional bio and credentials
- Teaching philosophy
- Statistics and achievements

### 3. Services Section
- Four main tutoring services
- Subject and grade level breakdowns
- Interactive cards with hover effects

### 4. Testimonials Section
- Quotes from satisfied families and teachers
- Star ratings and author information
- Success statistics

### 5. Contact Section
- Functional contact form
- Contact information
- What to expect section

## 🔧 Customization

### Content Updates
Edit the content in `src/data/content.ts` to update:
- Navigation items
- Hero section content
- About section information
- Services offered
- Testimonials
- Contact information

### Styling Changes
- Colors: Update `tailwind.config.js`
- Typography: Modify `src/app/globals.css`
- Components: Edit individual component files

### Adding New Sections
1. Create new component in `src/components/sections/`
2. Add content to `src/data/content.ts`
3. Import and add to `src/app/page.tsx`
4. Update navigation in `src/data/content.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Environment variables can be set in Vercel dashboard

### Other Platforms
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting for static sites
- **AWS S3 + CloudFront**: Enterprise-grade hosting

## 📊 Performance

The website is optimized for:
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Semantic HTML** with proper heading hierarchy
- **Keyboard navigation** support
- **Screen reader** friendly
- **Color contrast** ratios meet standards
- **Focus indicators** for all interactive elements

## 🔒 Security

- **HTTPS** enforcement
- **Content Security Policy** headers
- **Input validation** on forms
- **XSS prevention** measures

## 📈 SEO

- **Meta tags** and Open Graph data
- **Structured data** for local business
- **Sitemap** generation
- **Robots.txt** configuration
- **Performance** optimization for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions about this project, please contact:
- Email: jon@jonstutoring.com
- Phone: (555) 123-4567

---

Built with ❤️ for premium math tutoring services. 