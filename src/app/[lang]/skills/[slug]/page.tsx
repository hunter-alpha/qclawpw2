import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LanguageKey } from '@/lib/languages';

interface SkillDetailPageProps {
  params: { lang: LanguageKey; slug: string };
}

// Mock data - replace with actual data fetching
const mockSkills = {
  'web-scraper': {
    name: 'Web Scraper',
    description: 'Advanced web scraping with intelligent data extraction',
    category: 'Data Collection',
    difficulty: 'Intermediate',
    rating: 4.8,
    usageCount: 1250,
    author: 'OpenClaw Team',
    version: '2.1.0',
    lastUpdated: '2024-03-15',
    tags: ['scraping', 'data-collection', 'automation'],
    requirements: ['Python 3.8+', 'BeautifulSoup4', 'Requests'],
    features: [
      'Intelligent rate limiting',
      'Anti-bot detection bypass',
      'Structured data extraction',
      'Export to multiple formats',
      'Error handling and retries',
    ],
    useCases: [
      'Market research and competitive analysis',
      'Lead generation and prospecting',
      'Content aggregation and monitoring',
      'Price tracking and comparison',
    ],
    codeExample: `
import openclaw
from skills import WebScraper

# Initialize the scraper
scraper = WebScraper(
    rate_limit=1.0,
    user_agent='Mozilla/5.0...',
    headers={'Accept': 'text/html'}
)

# Scrape a website
results = scraper.scrape(
    url='https://example.com',
    selectors={
        'title': 'h1',
        'price': '.price',
        'description': '.description'
    }
)

print(results)
    `.trim(),
  },
  'content-writer': {
    name: 'Content Writer',
    description: 'AI-powered content creation with SEO optimization',
    category: 'Content Generation',
    difficulty: 'Beginner',
    rating: 4.6,
    usageCount: 890,
    author: 'Content AI Team',
    version: '1.5.2',
    lastUpdated: '2024-03-10',
    tags: ['content', 'seo', 'writing', 'ai'],
    requirements: ['Python 3.7+', 'OpenAI API', 'NLTK'],
    features: [
      'SEO-optimized content generation',
      'Multiple writing styles and tones',
      'Keyword research integration',
      'Plagiarism checking',
      'Multi-language support',
    ],
    useCases: [
      'Blog post creation',
      'Product descriptions',
      'Social media content',
      'Email marketing campaigns',
    ],
    codeExample: `
import openclaw
from skills import ContentWriter

# Initialize the writer
writer = ContentWriter(
    style='professional',
    tone='friendly',
    seo_optimized=True
)

# Generate content
content = writer.create(
    topic='AI in healthcare',
    keywords=['AI', 'healthcare', 'innovation'],
    length=1000
)

print(content)
    `.trim(),
  },
};

export async function generateMetadata({ params }: { params: { lang: LanguageKey; slug: string } }) {
  const locale = params.lang;
  const slug = params.slug;
  
  const skill = mockSkills[slug as keyof typeof mockSkills];
  if (!skill) {
    return {
      title: 'Skill Not Found',
      description: 'The requested skill could not be found.',
    };
  }

  const translations = {
    'zh-CN': {
      title: `${skill.name} - OpenClaw 技能指南`,
      description: `了解 ${skill.name} 的完整指南，包括安装、配置、使用案例和最佳实践。`,
    },
    'en': {
      title: `${skill.name} - OpenClaw Skill Guide`,
      description: `Complete guide to ${skill.name} including installation, configuration, use cases, and best practices.`,
    },
    'de-DE': {
      title: `${skill.name} - OpenClaw Fähigkeiten-Guide`,
      description: `Vollständiger Leitfaden zu ${skill.name} einschließlich Installation, Konfiguration, Anwendungsfälle und Best Practices.`,
    },
  };

  return {
    title: translations[locale]?.title || translations.en.title,
    description: translations[locale]?.description || translations.en.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(mockSkills).map((slug) => ({ slug }));
}

export default function SkillDetailPage({ params }: SkillDetailPageProps) {
  const locale = params.lang;
  const slug = params.slug;
  
  const skill = mockSkills[slug as keyof typeof mockSkills];
  if (!skill) {
    notFound();
  }

  const content = {
    'zh-CN': {
      overview: '概述',
      features: '功能特性',
      requirements: '系统要求',
      useCases: '使用场景',
      installation: '安装指南',
      codeExample: '代码示例',
      author: '作者',
      version: '版本',
      lastUpdated: '最后更新',
      difficulty: '难度',
      rating: '评分',
      usage: '使用次数',
      tags: '标签',
    },
    'en': {
      overview: 'Overview',
      features: 'Features',
      requirements: 'Requirements',
      useCases: 'Use Cases',
      installation: 'Installation Guide',
      codeExample: 'Code Example',
      author: 'Author',
      version: 'Version',
      lastUpdated: 'Last Updated',
      difficulty: 'Difficulty',
      rating: 'Rating',
      usage: 'Usage Count',
      tags: 'Tags',
    },
    'de-DE': {
      overview: 'Übersicht',
      features: 'Funktionen',
      requirements: 'Anforderungen',
      useCases: 'Anwendungsfälle',
      installation: 'Installationsanleitung',
      codeExample: 'Code-Beispiel',
      author: 'Autor',
      version: 'Version',
      lastUpdated: 'Zuletzt aktualisiert',
      difficulty: 'Schwierigkeit',
      rating: 'Bewertung',
      usage: 'Nutzungszähler',
      tags: 'Tags',
    },
  };

  const currentContent = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {skill.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                skill.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                skill.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {skill.difficulty}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {skill.name}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              {skill.description}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>⭐ {skill.rating}/5.0</span>
              <span>{skill.usageCount} uses</span>
              <span>By {skill.author}</span>
              <span>v{skill.version}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentContent.overview}
                </h2>
                <p className="text-gray-600 mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentContent.features}
                </h2>
                <ul className="space-y-2">
                  {skill.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentContent.useCases}
                </h2>
                <ul className="space-y-2">
                  {skill.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">→</span>
                      <span className="text-gray-600">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Example */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentContent.codeExample}
                </h2>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{skill.codeExample}</code>
                </pre>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Info</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">{currentContent.author}:</span>
                    <span className="text-gray-600 ml-2">{skill.author}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">{currentContent.version}:</span>
                    <span className="text-gray-600 ml-2">{skill.version}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">{currentContent.lastUpdated}:</span>
                    <span className="text-gray-600 ml-2">{skill.lastUpdated}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">{currentContent.difficulty}:</span>
                    <span className="text-gray-600 ml-2">{skill.difficulty}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">{currentContent.rating}:</span>
                    <span className="text-gray-600 ml-2">⭐ {skill.rating}/5.0</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">{currentContent.usage}:</span>
                    <span className="text-gray-600 ml-2">{skill.usageCount}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">{currentContent.tags}:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {skill.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">{currentContent.requirements}</h4>
                  <ul className="space-y-1">
                    {skill.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: skill.name,
            description: skill.description,
            applicationCategory: skill.category,
            operatingSystem: 'Cross-platform',
            softwareVersion: skill.version,
            author: {
              '@type': 'Person',
              name: skill.author,
            },
            dateModified: skill.lastUpdated,
            keywords: skill.tags.join(', '),
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
    </div>
  );
}