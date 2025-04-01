import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PiggyBank,
  BarChart3,
  FolderKanban,
  Hourglass,
  Shield,
  HeartHandshake,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTranslation } from 'react-i18next';

export function Benefits() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: PiggyBank,
      title: t('benefits.items.savings.title'),
      description: t('benefits.items.savings.description')
    },
    {
      icon: BarChart3,
      title: t('benefits.items.control.title'),
      description: t('benefits.items.control.description')
    },
    {
      icon: FolderKanban,
      title: t('benefits.items.organization.title'),
      description: t('benefits.items.organization.description')
    },
    {
      icon: Hourglass,
      title: t('benefits.items.time.title'),
      description: t('benefits.items.time.description')
    },
    {
      icon: Shield,
      title: t('benefits.items.security.title'),
      description: t('benefits.items.security.description')
    },
    {
      icon: HeartHandshake,
      title: t('benefits.items.support.title'),
      description: t('benefits.items.support.description')
    }
  ];

  const [activeTab, setActiveTab] = useState(benefits[0].title);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = benefits.findIndex(b => b.title === activeTab);
      const nextIndex = (currentIndex + 1) % benefits.length;
      setActiveTab(benefits[nextIndex].title);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeTab, benefits]);

  return (
    <section id="beneficios" className="py-16 bg-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
              {t('benefits.title')}
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              {t('benefits.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Lista de benefícios na lateral esquerda */}
              <TabsList className="lg:col-span-4 flex lg:flex-col bg-transparent p-0 h-full">
                {benefits.map((benefit) => (
                  <TabsTrigger
                    key={benefit.title}
                    value={benefit.title}
                    className="group relative w-full flex items-center gap-3 p-4 justify-start text-lg text-gray-900 hover:text-blue-600 transition-colors data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none"
                  >
                    {React.createElement(benefit.icon, {
                      className: "w-6 h-6 transition-colors group-data-[state=active]:text-blue-600"
                    })}
                    <span className="font-medium">{benefit.title}</span>
                    <div className="absolute right-0 top-0 bottom-0 w-[3px]">
                      <div className="h-full w-full bg-gray-200" />
                      <div className="absolute inset-0 bg-blue-600 transform scale-y-0 group-data-[state=active]:scale-y-100 transition-transform duration-300 ease-out origin-top" />
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Conteúdo na lateral direita */}
              <div className="lg:col-span-8 h-full">
                <div className="border-2 border-gray-200 rounded-xl p-8 h-full min-h-[360px] relative">
                  <AnimatePresence mode="wait">
                    {benefits.map((benefit) => (
                      <TabsContent
                        key={benefit.title}
                        value={benefit.title}
                        className="m-0 h-full absolute inset-0 p-8"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-start gap-6"
                        >
                          {React.createElement(benefit.icon, {
                            className: "w-12 h-12 text-blue-600 flex-shrink-0"
                          })}
                          <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-blue-600">
                              {benefit.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      </TabsContent>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gray-900 hover:bg-blue-600 px-12 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg whitespace-nowrap min-w-[500px]">
              {t('benefits.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}