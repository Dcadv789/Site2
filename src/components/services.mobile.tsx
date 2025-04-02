import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  Calculator, 
  FileSpreadsheet,
  PiggyBank,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export function ServicesMobile() {
  const { t } = useTranslation();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const handleCtaClick = () => {
    window.open('https://wa.me/5511994561052?text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20DC%20Advisors.', '_blank');
  };

  const services = [
    {
      id: "consultoria-empresarial",
      icon: BarChart3,
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.description'),
      services: Object.entries(t('services.items.consulting.services', { returnObjects: true }))
    },
    {
      id: "bpo-financeiro",
      icon: Calculator,
      title: t('services.items.bpo.title'),
      description: t('services.items.bpo.description'),
      services: Object.entries(t('services.items.bpo.services', { returnObjects: true }))
    },
    {
      id: "antecipacao-recebiveis",
      icon: Users,
      title: t('services.items.receivables.title'),
      description: t('services.items.receivables.description'),
      services: Object.entries(t('services.items.receivables.services', { returnObjects: true }))
    },
    {
      id: "solucoes-digitais",
      icon: TrendingUp,
      title: t('services.items.digital.title'),
      description: t('services.items.digital.description'),
      services: Object.entries(t('services.items.digital.services', { returnObjects: true }))
    },
    {
      id: "hub-ferramentas",
      icon: PiggyBank,
      title: t('services.items.tools.title'),
      description: t('services.items.tools.description'),
      services: Object.entries(t('services.items.tools.services', { returnObjects: true }))
    },
    {
      id: "mentoria-treinamentos",
      icon: FileSpreadsheet,
      title: t('services.items.mentoring.title'),
      description: t('services.items.mentoring.description'),
      services: Object.entries(t('services.items.mentoring.services', { returnObjects: true }))
    }
  ];

  const nextService = () => {
    setCurrentServiceIndex((prev) => 
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const previousService = () => {
    setCurrentServiceIndex((prev) => 
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <section id="servicos" className="pt-12 pb-12 bg-white scroll-mt-16">
      <div className="px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
              {t('services.title')}
            </h2>
            <p className="text-[24px] text-gray-600 leading-relaxed font-light">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentServiceIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {(() => {
                const service = services[currentServiceIndex];
                const Icon = service.icon;
                return (
                  <div>
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex flex-col items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex items-center gap-4 w-full justify-between">
                          <button 
                            onClick={previousService}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                          </button>
                          <div className="text-center flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                          </div>
                          <button 
                            onClick={nextService}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 p-4">
                      {service.services.map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors">
                            {value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 text-center">
          <motion.div
            initial={false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button 
              onClick={handleCtaClick}
              className="bg-blue-600 hover:bg-blue-700 px-12 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg"
            >
              {t('services.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}