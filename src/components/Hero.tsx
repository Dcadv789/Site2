import React from 'react';
import { Share2, Youtube, Instagram, Linkedin, Wallet, Target, TrendingUp, Percent } from 'lucide-react';
import { motion } from "framer-motion";
import { TextRotate } from '../components/ui/text-rotate';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    window.open('https://wa.me/5511994561052?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20quero%20agendar%20o%20diagn%C3%B3stico%20financeiro%20GRATUITO%20para%20minha%20empresa.', '_blank');
  };

  const stats = [
    { icon: Wallet, label: '+2,5M', description: t('hero.stats.managed') },
    { icon: Target, label: '100%', description: t('hero.stats.focus') },
    { icon: TrendingUp, label: '99%', description: t('hero.stats.satisfaction') },
    { icon: Percent, label: '29%', description: t('hero.stats.savings') },
  ];

  const socialLinks = [
    { 
      icon: Share2, 
      href: 'https://wa.me/?text=Confira este serviço de consultoria financeira: https://axory.com.br',
      label: 'Compartilhar'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/axory.capital',
      label: 'Instagram'
    },
    { 
      icon: Youtube, 
      href: 'http://www.youtube.com/@AxoryCap',
      label: 'Youtube'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/axory',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="inicio" className="pt-12 scroll-mt-16 bg-[#0131FF]">
      {/* Layout Desktop */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-24 sm:pb-28">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]"
          >
            {t('hero.title')}
          </motion.h1>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 flex items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full"
            >
              <img
                src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner1.svg"
                alt="Banner ilustrativo"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col h-full justify-between"
            >
              <div className="w-full">
                <h2 className="text-base font-medium text-gray-200 mb-6 text-left">
                  {t('hero.subtitle')}
                </h2>
              </div>

              <div className="w-full">
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={handleCtaClick}
                      className="bg-white hover:bg-gray-100 px-3 py-3 rounded-full text-[#0131FF] text-base font-medium transition-all duration-300 hover:shadow-lg min-w-[230px]"
                    >
                      {t('hero.cta')}
                    </button>

                    <div className="flex gap-3 justify-end w-72 translate-x-[-30px]">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors bg-white/10 backdrop-blur-sm shadow-md p-2 rounded-full hover:shadow-lg group border border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            whileHover={{ y: -2 }}
                          >
                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="sr-only">{social.label}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-8 items-end justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-white/20"
                          >
                            <Icon className="h-5 w-5 text-white mb-1" />
                            <span className="text-base font-semibold text-white">{stat.label}</span>
                            <span className="text-xs text-gray-200 text-center">{stat.description}</span>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="w-64"
                    >
                      <img
                        src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner2.svg"
                        alt="Banner secundário"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Layout Mobile */}
      <div className="md:hidden px-4 pt-8 pb-12">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-medium tracking-tight text-white leading-tight mb-4"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-200 mb-8"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <img
              src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner1.svg"
              alt="Banner ilustrativo"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={handleCtaClick}
            className="w-full bg-white hover:bg-gray-100 py-4 rounded-full text-[#0131FF] text-base font-medium transition-all duration-300 hover:shadow-lg mb-8"
          >
            {t('hero.cta')}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3 mb-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md border border-white/20"
                >
                  <Icon className="h-6 w-6 text-white mb-2" />
                  <span className="text-lg font-semibold text-white">{stat.label}</span>
                  <span className="text-sm text-gray-200 text-center">{stat.description}</span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-4 gap-3 mb-10"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-14 bg-white/10 backdrop-blur-sm shadow-md rounded-full hover:shadow-lg border border-white/20 text-gray-200 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="hidden">
        <TextRotate
          texts={[
            "seu lucro",
            "seu tempo",
            "seu controle",
            "sua gestão",
            "sua produtividade",
            "sua performance",
          ]}
          rotationInterval={2000}
        />
      </div>
    </section>
  );
}