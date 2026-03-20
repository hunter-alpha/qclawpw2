import { Metadata } from 'next';
import Link from 'next/link';
import { LanguageKey } from '@/lib/languages';

interface HomePageProps {
  params: { lang: LanguageKey };
}

export async function generateMetadata({ params }: { params: { lang: LanguageKey } }) {
  const locale = params.lang;
  
  const translations = {
    'zh-CN': {
      title: 'OpenClaw 技能目录 - AI 技能、教程与社区',
      description: '发现 500+ OpenClaw 技能、教程和用例。加入全球社区，构建自主 AI 应用。',
    },
    'en': {
      title: 'OpenClaw Skills Directory - AI Skills, Tutorials & Community',
      description: 'Discover 500+ OpenClaw skills, tutorials, and use cases. Join the global community building autonomous AI applications.',
    },
    'de-DE': {
      title: 'OpenClaw Skills-Verzeichnis - AI-Fähigkeiten, Tutorials & Community',
      description: 'Entdecken Sie 500+ OpenClaw-Fähigkeiten, Tutorials und Anwendungsfälle. Treten Sie der globalen Community bei, die autonome KI-Anwendungen entwickelt.',
    },
    'fr': {
      title: 'Répertoire des compétences OpenClaw - Compétences IA, tutoriels et communauté',
      description: 'Découvrez plus de 500 compétences OpenClaw, tutoriels et cas d\'utilisation. Rejoignez la communauté mondiale qui construit des applications IA autonomes.',
    },
    'ja': {
      title: 'OpenClaw スキルディレクトリ - AIスキル、チュートリアル、コミュニティ',
      description: '500以上のOpenClawスキル、チュートリアル、ユースケースを発見。自律型AIアプリケーションを構築するグローバルコミュニティに参加。',
    },
    'ko': {
      title: 'OpenClaw 스킬 디렉토리 - AI 스킬, 튜토리얼 및 커뮤니티',
      description: '500개 이상의 OpenClaw 스킬, 튜토리얼 및 사용 사례를 발견하세요. 자율 AI 애플리케이션을 구축하는 글로벌 커뮤니티에 가입하세요.',
    },
    'hi': {
      title: 'OpenClaw स्किल डायरेक्टरी - AI स्किल्स, ट्यूटोरियल और कम्युनिटी',
      description: '500+ OpenClaw स्किल्स, ट्यूटोरियल और उपयोग के मामले खोजें। स्वायत्त AI एप्लिकेशन बनाने वाले वैश्विक समुदाय में शामिल हों।',
    },
    'id': {
      title: 'Direktori Skill OpenClaw - Skill AI, Tutorial & Komunitas',
      description: 'Temukan 500+ skill OpenClaw, tutorial, dan studi kasus. Bergabunglah dengan komunitas global yang membangun aplikasi AI otonom.',
    },
    'de-AT': {
      title: 'OpenClaw Skills-Verzeichnis - AI-Fähigkeiten, Tutorials & Community',
      description: 'Entdecken Sie 500+ OpenClaw-Fähigkeiten, Tutorials und Anwendungsfälle. Treten Sie der globalen Community bei, die autonome KI-Anwendungen entwickelt.',
    },
  };

  return {
    title: translations[locale]?.title || translations.en.title,
    description: translations[locale]?.description || translations.en.description,
  };
}

export default function HomePage({ params }: HomePageProps) {
  const locale = params.lang;

  const content = {
    'zh-CN': {
      heroTitle: '发现 OpenClaw 的无限可能',
      heroSubtitle: '500+ 经过验证的 AI 技能、深度教程和全球社区支持',
      ctaPrimary: '浏览技能',
      ctaSecondary: '开始学习',
      trendingTitle: '热门技能',
      categoriesTitle: '技能分类',
      tutorialsTitle: '最新教程',
      communityTitle: '加入社区',
    },
    'en': {
      heroTitle: 'Discover the Power of OpenClaw',
      heroSubtitle: '500+ verified AI skills, in-depth tutorials, and global community support',
      ctaPrimary: 'Browse Skills',
      ctaSecondary: 'Start Learning',
      trendingTitle: 'Trending Skills',
      categoriesTitle: 'Skill Categories',
      tutorialsTitle: 'Latest Tutorials',
      communityTitle: 'Join Community',
    },
    'de-DE': {
      heroTitle: 'Entdecken Sie die Kraft von OpenClaw',
      heroSubtitle: '500+ verifizierte KI-Fähigkeiten, vertiefte Tutorials und globale Community-Unterstützung',
      ctaPrimary: 'Fähigkeiten durchsuchen',
      ctaSecondary: 'Lernen beginnen',
      trendingTitle: 'Trendige Fähigkeiten',
      categoriesTitle: 'Fähigkeitskategorien',
      tutorialsTitle: 'Neueste Tutorials',
      communityTitle: 'Community beitreten',
    },
  };

  const currentContent = content[locale] || content.en;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentContent.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {currentContent.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/skills`}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {currentContent.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/tutorials`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                {currentContent.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skills Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{currentContent.trendingTitle}</h3>
              <p className="text-gray-600 mb-4">
                Explore the most popular and effective OpenClaw skills.
              </p>
              <Link
                href={`/${locale}/skills`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                View all skills →
              </Link>
            </div>

            {/* Tutorials Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{currentContent.tutorialsTitle}</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides to master OpenClaw development.
              </p>
              <Link
                href={`/${locale}/tutorials`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Browse tutorials →
              </Link>
            </div>

            {/* Community Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{currentContent.communityTitle}</h3>
              <p className="text-gray-600 mb-4">
                Connect with developers worldwide and share your skills.
              </p>
              <Link
                href={`/${locale}/community`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Join discussion →
              </Link>
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
            '@type': 'WebSite',
            name: 'OpenClaw Skills Directory',
            url: `https://qclaw.pw/${locale}`,
            description: 'Discover 500+ OpenClaw skills, tutorials, and use cases. Join the global community building autonomous AI applications.',
            potentialAction: {
              '@type': 'SearchAction',
              target: `https://qclaw.pw/${locale}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </div>
  );
}