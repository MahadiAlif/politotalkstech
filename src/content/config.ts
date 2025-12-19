import { defineCollection, z } from 'astro:content';

// Projects collection - student software, hardware, and research projects
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

// Research collection - academic research, theses, scholarly work
const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    researchType: z.string(),
    advisor: z.string(),
    department: z.string(),
    abstract: z.string(),
  }),
});

// Clubs collection - student organizations and communities
const clubs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    members: z.number(),
    meetingTime: z.string(),
    location: z.string(),
    contact: z.string().email(),
    activities: z.array(z.string()),
  }),
});

// Alumni collection - career stories from graduates
const alumni = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    graduationYear: z.string(),
    currentRole: z.string(),
  }),
});

export const collections = {
  projects,
  research,
  clubs,
  alumni,
};
