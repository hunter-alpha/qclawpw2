import { Metadata } from 'next';
import Link from 'next/link';
import { LanguageKey } from '@/lib/languages';

interface SkillsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as LanguageKey;
  
  const translations = {
    'zh-CN': {
      title: 'OpenClaw 技能目录 - 发现 500+ AI 技能',
      description: '浏览经过验证的 OpenClaw 技能，包括数据分析、自动化、内容生成等。每个技能都有详细说明和实现指南。',
    },
    'en': {
      title: 'OpenClaw Skills Directory - Discover 500+ AI Skills',
      description: 'Browse verified OpenClaw skills including data analysis, automation, content generation, and more. Each skill includes detailed documentation and implementation guides.',
    },
    'de-DE': {
      title: 'OpenClaw Skills-Verzeichnis - Entdecken Sie 500+ KI-Fähigkeiten',
      description: 'Durchsuchen Sie verifizierte OpenClaw-Fähigkeiten einschließlich Datenanalyse, Automatisierung, Inhaltserstellung und mehr. Jede Fähigkeit enthält detaillierte Dokumentation und Implementierungsleitfäden.',
    },
  };

  return {
    title: translations[locale as keyof typeof translations]?.title || translations.en.title,
    description: translations[locale as keyof typeof translations]?.description || translations.en.description,
  };
}

// Mock data - replace with actual data fetching
const mockSkills = [
  {
    slug: 'web-scraper',
    name: 'Web Scraper',
    category: 'Data Collection',
    description: 'Advanced web scraping with intelligent data extraction',
    difficulty: 'Intermediate',
    rating: 4.8,
    usageCount: 1250,
  },
  {
    slug: 'content-writer',
    name: 'Content Writer',
    category: 'Content Generation',
    description: 'AI-powered content creation with SEO optimization',
    difficulty: 'Beginner',
    rating: 4.6,
    usageCount: 890,
  },
  {
    slug: 'data-analyzer',
    name: 'Data Analyzer',
    category: 'Data Analysis',
    description: 'Comprehensive data analysis and visualization toolkit',
    difficulty: 'Advanced',
    rating: 4.9,
    usageCount: 2100,
  },
];

export default async function SkillsPage({ params }: SkillsPageProps) {
  const { lang } = await params;
  const locale = lang as LanguageKey;

  const content = {
    'zh-CN': {
      title: '技能目录',
      subtitle: '发现适合您需求的完美 OpenClaw 技能',
      searchPlaceholder: '搜索技能...',
      categories: '分类',
      difficulty: '难度',
      usage: '使用次数',
      rating: '评分',
    },
    'en': {
      title: 'Skills Directory',
      subtitle: 'Discover the perfect OpenClaw skills for your needs',
      searchPlaceholder: 'Search skills...',
      categories: 'Categories',
      difficulty: 'Difficulty',
      usage: 'Usage',
      rating: 'Rating',
    },
    'de-DE': {
      title: 'Skills-Verzeichnis',
      subtitle: 'Entdecken Sie die perfekten OpenClaw-Fähigkeiten für Ihre Bedürfnisse',
      searchPlaceholder: 'Fähigkeiten suchen...',
      categories: 'Kategorien',
      difficulty: 'Schwierigkeit',
      usage: 'Verwendung',
      rating: 'Bewertung',
    },
  };

  const currentContent = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder={currentContent.searchPlaceholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>{currentContent.categories}</option>
                <option>Data Collection</option>
                <option>Content Generation</option>
                <option>Data Analysis</option>
                <option>Automation</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>{currentContent.difficulty}</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSkills.map((skill) => (
              <div
                key={skill.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500">{skill.category}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    skill.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    skill.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {skill.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{skill.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>⭐ {skill.rating}</span>
                  <span>{skill.usageCount} {currentContent.usage}</span>
                </div>
                
                <Link
                  href={`/${locale}/skills/${skill.slug}`}
                  className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'OpenClaw Skills Directory',
            description: 'Browse verified OpenClaw skills including data analysis, automation, content generation, and more.',
            url: `https://qclaw.pw/${locale}/skills`,
            hasPart: mockSkills.map(skill => ({
              '@type': 'SoftwareApplication',
              name: skill.name,
              applicationCategory: skill.category,
              description: skill.description,
              url: `https://qclaw.pw/${locale}/skills/${skill.slug}`,
            })),
          }),
        }}
      />
    </div>
  );
}