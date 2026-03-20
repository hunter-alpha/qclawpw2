'use client';

import { usePathname, useRouter } from 'next/navigation';
import { languages, LanguageKey } from '@/lib/languages';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] as LanguageKey;
  const pathWithoutLocale = pathname.replace(/^\/[^\/]+/, '');

  const handleLanguageChange = (newLocale: LanguageKey) => {
    const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;
    router.push(newPath);
  };

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value as LanguageKey)}
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        {Object.entries(languages).map(([key, lang]) => (
          <option key={key} value={key}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}