import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "al" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (al: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "al",
  toggleLang: () => {},
  t: (al) => al,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("al");
  const toggleLang = () => setLang((l) => (l === "al" ? "en" : "al"));
  const t = (al: string, en: string) => (lang === "al" ? al : en);
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
