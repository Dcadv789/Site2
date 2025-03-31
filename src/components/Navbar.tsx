import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Target, BarChart, Gift, Sparkles, CreditCard, HelpCircle, Languages } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('Início');
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const items: NavItem[] = [
    { name: t('nav.home'), url: '#inicio', icon: Home },
    { name: t('nav.challenges'), url: '#desafios', icon: Target },
    { name: t('nav.scenario'), url: '#cenario', icon: BarChart },
    { name: t('nav.benefits'), url: '#beneficios', icon: Gift },
    { name: t('nav.solutions'), url: '#servicos', icon: Sparkles },
    { name: t('nav.plans'), url: '#planos', icon: CreditCard },
    { name: t('nav.faq'), url: '#faq', icon: HelpCircle },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + 100;
      
      const currentSection = items.find(item => {
        const element = document.querySelector(item.url);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          return scrollPosition >= elementTop && scrollPosition < elementBottom;
        }
        return false;
      });

      if (currentSection) {
        setActiveTab(currentSection.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling, items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setIsScrolling(true);
    
    const element = document.querySelector(item.url);
    if (element) {
      const navHeight = 40;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      
      setActiveTab(item.name);
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed sm:top-0 left-0 right-0 z-10 sm:pt-4 pointer-events-none flex justify-center">
      <div className="flex items-center gap-3 bg-white/80 border border-gray-200 backdrop-blur-lg py-3 px-2 rounded-full shadow-lg pointer-events-auto">
        <div className="hidden sm:flex items-center gap-2 px-4">
          <img
            src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//Logo%20Azul.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Languages className="w-5 h-5 text-gray-600" />
        </button>

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-3 rounded-full transition-colors",
                "text-gray-600 hover:text-blue-600",
                isActive && "text-blue-600"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-b-full">
                    <div className="absolute w-12 h-6 bg-blue-400/20 rounded-full blur-md -bottom-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-blue-400/20 rounded-full blur-md -bottom-1" />
                    <div className="absolute w-4 h-4 bg-blue-400/20 rounded-full blur-sm -bottom-1 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}

        <button className="hidden sm:block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
          {t('nav.schedule')}
        </button>
      </div>
    </div>
  );
}