export const languages = {
  'zh-CN': { 
    label: '简体中文', 
    locale: 'zh-CN',
    flag: '🇨🇳',
    direction: 'ltr'
  },
  'en': { 
    label: 'English', 
    locale: 'en',
    flag: '🇺🇸',
    direction: 'ltr'
  },
  'de-DE': { 
    label: 'Deutsch', 
    locale: 'de-DE',
    flag: '🇩🇪',
    direction: 'ltr'
  },
  'de-AT': { 
    label: 'Deutsch (Österreich)', 
    locale: 'de-AT',
    flag: '🇦🇹',
    direction: 'ltr'
  },
  'fr': { 
    label: 'Français', 
    locale: 'fr',
    flag: '🇫🇷',
    direction: 'ltr'
  },
  'ja': { 
    label: '日本語', 
    locale: 'ja',
    flag: '🇯🇵',
    direction: 'ltr'
  },
  'ko': { 
    label: '한국어', 
    locale: 'ko',
    flag: '🇰🇷',
    direction: 'ltr'
  },
  'hi': { 
    label: 'हिन्दी', 
    locale: 'hi',
    flag: '🇮🇳',
    direction: 'ltr'
  },
  'id': { 
    label: 'Bahasa Indonesia', 
    locale: 'id',
    flag: '🇮🇩',
    direction: 'ltr'
  },
} as const;

export type LanguageKey = keyof typeof languages;
export const languageKeys = Object.keys(languages) as LanguageKey[];

export const defaultLanguage = 'en' as const;

export function getLanguageConfig(locale: string) {
  return languages[locale as LanguageKey] || languages[defaultLanguage];
}

export function isValidLanguage(locale: string): locale is LanguageKey {
  return locale in languages;
}