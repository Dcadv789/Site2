import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Home, Target, MessageSquare, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

const items: NavItem[] = [
  { name: 'Início', url: '#inicio', icon: Home },
  { name: 'Desafios', url: '#desafios', icon: Target },
  { name: 'Cenário', url: '#cenario', icon: BarChart },
  { name: 'Soluções', url: '#solucoes', icon: HelpCircle },
  { name: 'Contato', url: '#contato', icon: MessageSquare },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

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
  }, [isScrolling]);

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

  return (
    <div className="fixed sm:top-0 left-0 right-0 z-10 sm:pt-4 pointer-events-none flex justify-center">
      <div className="flex items-center gap-3 bg-white/80 border border-gray-200 backdrop-blur-lg py-3 px-2 rounded-full shadow-lg pointer-events-auto">
        <div className="hidden sm:flex items-center gap-2 px-4">
          <BarChart className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-gray-900">FinanceConsult</span>
        </div>

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-colors",
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
          Agende uma Reunião
        </button>
      </div>
    </div>
  );
}