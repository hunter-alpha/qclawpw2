import { Metadata } from 'next';
import Link from 'next/link';
import { LanguageKey } from '@/lib/languages';

interface QClawPageProps {
  params: { lang: LanguageKey };
}

export async function generateMetadata({ params }: { params: { lang: LanguageKey } }) {
  const locale = params.lang;
  
  const translations = {
    'zh-CN': {
      title: '什么是 QClaw？QClaw 与 OpenClaw 的关系解析',
      description: '全面解析腾讯 QClaw 是什么、能做什么、适合谁，以及 QClaw 与 OpenClaw 的区别与联系。了解 QClaw 使用场景和常见问题。',
      keywords: '什么是 QClaw, QClaw 是什么, 腾讯 QClaw 是什么, QClaw 是做什么的, QClaw 能做什么, QClaw 怎么用, QClaw 和 OpenClaw 什么关系, QClaw vs OpenClaw',
    },
    'en': {
      title: 'What is QClaw? QClaw vs OpenClaw Explained',
      description: 'A comprehensive guide to what Tencent QClaw is, its use cases, target audience, and the relationship between QClaw and OpenClaw.',
      keywords: 'what is QClaw, Tencent QClaw, how to use QClaw, QClaw use cases, QClaw vs OpenClaw, QClaw relationship with OpenClaw',
    },
  };

  const currentMeta = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: currentMeta.keywords,
  };
}

export default function QClawPage({ params }: QClawPageProps) {
  const locale = params.lang;

  const content = {
    'zh-CN': {
      h1: '什么是 QClaw？全面解析及与 OpenClaw 的关系',
      answerFirst: 'QClaw 是由腾讯推出的自主 AI 技能框架，旨在帮助开发者快速构建和部署智能应用。它与开源社区主导的 OpenClaw 共享相似的设计理念，但 QClaw 提供了更多针对企业级应用优化的闭源组件和腾讯云生态集成。了解 QClaw，并探索如何在 OpenClaw 生态中寻找替代方案或进行技能迁移。',
      definition: {
        title: 'QClaw 是什么？',
        desc: 'QClaw 是一个高性能的 AI Agent 框架，它允许开发者通过组合不同的“技能”（Skills）来创建能够自主完成复杂任务的 AI 助手。',
      },
      relationship: {
        title: 'QClaw 和 OpenClaw 的关系与区别 (QClaw vs OpenClaw)',
        items: [
          { title: '生态定位', desc: 'QClaw 侧重于企业级解决方案和商业化支持；OpenClaw 是纯开源的社区驱动框架。' },
          { title: '技能兼容性', desc: '许多在 QClaw 上的核心逻辑可以通过适配层迁移到 OpenClaw，反之亦然。' },
          { title: '社区支持', desc: 'OpenClaw 拥有更广泛的全球开发者社区，提供超过 500+ 开源技能。' },
        ],
      },
      audience: {
        title: 'QClaw 适合谁？',
        desc: '适合需要深度集成企业现有系统、追求高稳定性和官方商业支持的开发团队。对于希望高度定制化、低成本尝试的个人或初创团队，推荐使用 OpenClaw。',
      },
      useCases: {
        title: 'QClaw 使用场景',
        items: [
          '企业内部知识库问答助手',
          '自动化数据收集与分析流水线',
          '智能客户服务与工单处理系统',
          '代码审查与自动化测试',
        ],
      },
      faq: {
        title: 'QClaw 常见问题 (FAQ)',
        items: [
          { q: 'QClaw 怎么用/如何上手？', a: '你可以通过官方文档获取 SDK。如果你想了解基础的 AI 技能开发概念，强烈建议先阅读我们的 OpenClaw 基础教程。' },
          { q: 'QClaw 能做什么？', a: '它可以将大语言模型与外部工具（如搜索引擎、数据库、API）连接起来，实现自动化任务。' },
        ],
      },
      cta: {
        title: '探索更多可能',
        desc: '想了解如何开发类似的 AI 技能？或者寻找 QClaw 的开源替代方案？',
        button1: '浏览 OpenClaw 技能库',
        button2: '阅读开发教程',
      },
    },
    'en': {
      h1: 'What is QClaw? Comprehensive Guide & OpenClaw Comparison',
      answerFirst: 'QClaw is an autonomous AI skill framework launched by Tencent to help developers quickly build and deploy intelligent applications. While it shares design philosophies with the community-driven OpenClaw, QClaw offers enterprise-optimized components and Tencent Cloud integration. Learn about QClaw and discover how to navigate the OpenClaw ecosystem for alternatives.',
      definition: {
        title: 'What is QClaw?',
        desc: 'QClaw is a high-performance AI Agent framework that allows developers to create AI assistants capable of autonomously completing complex tasks by combining different "skills".',
      },
      relationship: {
        title: 'QClaw vs OpenClaw: Relationship & Differences',
        items: [
          { title: 'Ecosystem Focus', desc: 'QClaw focuses on enterprise solutions and commercial support; OpenClaw is a pure open-source, community-driven framework.' },
          { title: 'Skill Compatibility', desc: 'Many core logics in QClaw can be migrated to OpenClaw via adaptation layers, and vice versa.' },
          { title: 'Community Support', desc: 'OpenClaw has a broader global developer community offering over 500+ open-source skills.' },
        ],
      },
      audience: {
        title: 'Who is QClaw for?',
        desc: 'It is suitable for enterprise teams needing deep integration, high stability, and official commercial support. For individuals or startups seeking high customization and low-cost experimentation, OpenClaw is recommended.',
      },
      useCases: {
        title: 'QClaw Use Cases',
        items: [
          'Enterprise internal knowledge base assistants',
          'Automated data collection and analysis pipelines',
          'Intelligent customer service systems',
          'Code review and automated testing',
        ],
      },
      faq: {
        title: 'QClaw FAQ',
        items: [
          { q: 'How to use/get started with QClaw?', a: 'You can get the SDK via official docs. To understand basic AI skill development, we highly recommend reading our OpenClaw tutorials first.' },
          { q: 'What can QClaw do?', a: 'It connects LLMs with external tools (search engines, databases, APIs) to achieve task automation.' },
        ],
      },
      cta: {
        title: 'Explore More Possibilities',
        desc: 'Want to learn how to develop similar AI skills? Or looking for open-source alternatives to QClaw?',
        button1: 'Browse OpenClaw Skills',
        button2: 'Read Tutorials',
      },
    },
  };

  const currentContent = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Answer-first Summary */}
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-10 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            💡 {currentContent.answerFirst}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 space-y-12">
          
          {/* Definition */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">{currentContent.definition.title}</h2>
            <p className="text-gray-700 leading-relaxed">{currentContent.definition.desc}</p>
          </section>

          {/* Relationship: QClaw vs OpenClaw */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">{currentContent.relationship.title}</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {currentContent.relationship.items.map((item, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href={`/${locale}/compare/qclaw-vs-openclaw`} className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center">
                查看详细对比分析 →
              </Link>
            </div>
          </section>

          {/* Audience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">{currentContent.audience.title}</h2>
            <p className="text-gray-700 leading-relaxed">{currentContent.audience.desc}</p>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">{currentContent.useCases.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {currentContent.useCases.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href={`/${locale}/use-cases`} className="text-primary-600 hover:text-primary-800 font-medium">
                探索更多 AI 技能应用场景 →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">{currentContent.faq.title}</h2>
            <div className="space-y-6">
              {currentContent.faq.items.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: {item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA Module */}
        <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">{currentContent.cta.title}</h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">{currentContent.cta.desc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={`/${locale}/skills`}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {currentContent.cta.button1}
            </Link>
            <Link 
              href={`/${locale}/tutorials`}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-white/20"
            >
              {currentContent.cta.button2}
            </Link>
          </div>
        </div>

      </article>

      {/* Structured Data for FAQ and Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: currentContent.faq.items.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a
              }
            }))
          })
        }}
      />
    </div>
  );
}