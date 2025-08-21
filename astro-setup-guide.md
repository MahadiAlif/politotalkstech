# PolitoTalksTech - Astro Blog Template Setup Guide

## Overview

This comprehensive guide will help you set up and customize the **PolitoTalksTech** Astro blog template - a modern, responsive static blog template designed for student-focused tech communities.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.14.1 or higher)
- **npm** (usually comes with Node.js) or **pnpm** (recommended)
- **Git** for version control

## Quick Start

### 1. Create New Astro Project

```bash
# Create a new Astro project
npm create astro@latest politotalkstech

# Navigate to the project directory
cd politotalkstech

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Install Required Dependencies

```bash
# Install Astro integrations
npx astro add tailwind
npx astro add mdx

# Install additional dependencies for full functionality
npm install @astrojs/rss @astrojs/sitemap
npm install @fontsource/inter @fontsource/jetbrains-mono
npm install date-fns
```

## Project Structure

```
politotalkstech/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── logo.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── PostCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── ClubCard.astro
│   │   └── Layout.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── blog/
│   │   │   ├── getting-started-ml.md
│   │   │   ├── alumni-success-story.md
│   │   │   └── iot-project.md
│   │   ├── projects/
│   │   │   ├── smart-campus-app.md
│   │   │   ├── energy-monitor.md
│   │   │   └── blockchain-voting.md
│   │   ├── clubs/
│   │   │   ├── ai-ml-club.md
│   │   │   ├── cybersecurity-society.md
│   │   │   ├── webdev-collective.md
│   │   │   └── data-science-analytics.md
│   │   └── alumni/
│   │       ├── laura-google.md
│   │       ├── giovanni-startup.md
│   │       └── francesca-research.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PostLayout.astro
│   │   └── MarkdownLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── clubs/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── alumni/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── date.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Step-by-Step Setup

### 3. Configure Content Collections

Create `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string(),
    category: z.enum(['Projects', 'Clubs', 'Alumni Stories', 'General']),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    author: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().optional(),
  }),
});

const clubs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    members: z.number(),
    meetingTime: z.string(),
    location: z.string(),
    contact: z.string().email(),
    featured: z.boolean().optional(),
  }),
});

const alumni = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    graduate: z.string(),
    currentRole: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog, projects, clubs, alumni };
```

### 4. Create Base Layout

Create `src/layouts/BaseLayout.astro`:

```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

export interface Props {
  title: string;
  description?: string;
}

const { title, description = "A student-focused tech community at Politecnico" } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

### 5. Create Components

#### Header Component (`src/components/Header.astro`)

```astro
---
import Navigation from './Navigation.astro';
---

<header class="header">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <div class="logo">
        <a href="/" class="text-2xl font-bold text-gray-900">
          PolitoTalksTech
        </a>
      </div>
      <Navigation />
    </div>
  </div>
</header>
```

#### Navigation Component (`src/components/Navigation.astro`)

```astro
---
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/clubs', label: 'Clubs' },
  { href: '/alumni', label: 'Alumni Stories' },
  { href: '/about', label: 'About' }
];
---

<nav class="navigation">
  <ul class="flex space-x-6">
    {navItems.map(item => (
      <li>
        <a 
          href={item.href}
          class="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
</nav>
```

### 6. Create Homepage

Create `src/pages/index.astro`:

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import PostCard from '../components/PostCard.astro';
import ProjectCard from '../components/ProjectCard.astro';
import ClubCard from '../components/ClubCard.astro';

// Get recent posts
const allPosts = await getCollection('blog');
const recentPosts = allPosts
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
  .slice(0, 3);

// Get featured projects
const allProjects = await getCollection('projects');
const featuredProjects = allProjects
  .filter(project => project.data.featured)
  .slice(0, 2);

// Get featured clubs
const allClubs = await getCollection('clubs');
const featuredClubs = allClubs
  .filter(club => club.data.featured)
  .slice(0, 2);
---

<BaseLayout title="PolitoTalksTech - Student Tech Community">
  <section class="hero py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">
        Welcome to PolitoTalksTech
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Connecting students through technology, innovation, and knowledge sharing
        at Politecnico di Torino
      </p>
    </div>
  </section>

  <!-- Recent Posts Section -->
  <section class="recent-posts py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Recent Posts
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        {recentPosts.map(post => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  </section>

  <!-- Featured Projects Section -->
  <section class="featured-projects py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Projects
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        {featuredProjects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  </section>

  <!-- Featured Clubs Section -->
  <section class="featured-clubs py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Clubs
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        {featuredClubs.map(club => (
          <ClubCard club={club} />
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

### 7. Configure Astro

Update `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://politotalkstech.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
```

## Sample Content

### Example Blog Post (`src/content/blog/getting-started-ml.md`)

```markdown
---
title: "Getting Started with Machine Learning at Polito"
description: "A beginner's guide to diving into ML research and projects at our university."
publishDate: 2025-08-15
author: "Marco Rossi"
category: "Projects"
tags: ["ML", "Python", "Research"]
featured: true
---

Machine learning has become one of the most exciting fields in computer science, and Politecnico offers incredible opportunities for students to get involved. In this post, we'll explore the various ML research groups, available courses, and how to start your first project.

## Research Groups at Polito

### Computer Vision and Pattern Recognition
Led by Prof. Barbara Caputo, this group focuses on visual AI research, working on everything from autonomous driving to medical imaging applications.

### Machine Learning and Data Mining
This group develops new algorithms for big data analysis and predictive modeling, with students working on real datasets from industry partners.

## Getting Started

1. **Take the foundational courses**: Start with Machine Learning in your third year
2. **Join the AI Club**: Weekly meetings on Thursdays at 6 PM in Room 3A
3. **Find a research project**: Reach out to professors whose work interests you
4. **Practice with real data**: Use platforms like Kaggle to hone your skills

## Resources

- [Polito AI Research Groups](https://example.com)
- [Course Catalog](https://example.com)
- [Student Projects Repository](https://example.com)
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npm run astro check
```

## Deployment

### Deploy to Netlify

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy
   netlify deploy --prod --dir=dist
   ```

3. **Or deploy via Git**:
   - Push your code to GitHub
   - Connect your repository in Netlify dashboard
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Or deploy via Git**:
   - Push your code to GitHub
   - Import project in Vercel dashboard
   - Vercel will automatically detect Astro settings

## Customization

### Styling
- Modify `src/styles/global.css` for global styles
- Update `tailwind.config.mjs` for Tailwind customization
- Edit component styles directly in `.astro` files

### Content Management
- Add new posts in `src/content/blog/`
- Add projects in `src/content/projects/`
- Add clubs in `src/content/clubs/`
- Add alumni stories in `src/content/alumni/`

### Site Configuration
- Update site metadata in `astro.config.mjs`
- Modify navigation in `src/components/Navigation.astro`
- Update contact information in `src/components/Footer.astro`

## Additional Features

### RSS Feed
Create `src/pages/rss.xml.js`:

```javascript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'PolitoTalksTech Blog',
    description: 'Student tech community at Politecnico',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
```

### Sitemap
The sitemap is automatically generated with the `@astrojs/sitemap` integration.

### SEO Optimization
- Add Open Graph meta tags in layouts
- Include structured data for better search visibility
- Optimize images with Astro's Image component

## Performance Optimization

### Image Optimization
```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/image.jpg';
---

<Image src={myImage} alt="Description" width={800} height={600} />
```

### Code Splitting
Astro automatically handles code splitting for optimal performance.

### CDN Integration
Both Netlify and Vercel provide global CDN automatically.

## Troubleshooting

### Common Issues

1. **Build errors**: Check TypeScript errors with `npm run astro check`
2. **Content not updating**: Clear cache and restart dev server
3. **Styling issues**: Ensure Tailwind classes are properly configured

### Getting Help

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [GitHub Issues](https://github.com/withastro/astro/issues)

## Contributing

This template is open for contributions! Feel free to:
- Add new features
- Improve documentation
- Fix bugs
- Suggest enhancements

Happy coding with Astro! 🚀