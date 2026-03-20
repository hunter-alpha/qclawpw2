import { MetadataRoute } from 'next';
import { languageKeys } from '@/lib/languages';

const baseUrl = 'https://qclaw.pw';

// Mock data - replace with actual data fetching
const skills = [
  'web-scraper',
  'content-writer',
  'data-analyzer',
  'email-automation',
  'social-media-manager',
  'code-reviewer',
  'document-summarizer',
  'image-processor',
  'voice-transcriber',
  'chatbot-builder',
];

const tutorials = [
  'getting-started-with-openclaw',
  'building-your-first-skill',
  'advanced-skill-development',
  'deploying-skills-to-production',
  'skill-optimization-techniques',
  'troubleshooting-common-issues',
];

const categories = [
  'data-collection',
  'content-generation',
  'automation',
  'analysis',
  'integration',
  'monitoring',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Add pages for each language
  languageKeys.forEach((locale) => {
    // Homepage
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });

    // Core pages
    const corePages = [
      'openclaw',
      'qclaw',
      'skills',
      'tutorials',
      'use-cases',
      'compare',
      'questions',
      'community',
      'about',
    ];

    corePages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });

    // Skills
    skills.forEach((skill) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/skills/${skill}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });

    // Tutorials
    tutorials.forEach((tutorial) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/tutorials/${tutorial}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });

    // Categories
    categories.forEach((category) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/categories/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return sitemap;
}