import React from 'react';
import { TrendingDown, FileQuestion, DollarSign, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Challenges() {
  const { t } = useTranslation();

  const challenges = [
    {
      icon: TrendingDown,
      title: t('challenges.items.results.title'),
      question: t('challenges.items.results.question')
    },
    {
      icon: FileQuestion,
      title: t('challenges.items.disorganization.title'),
      question: t('challenges.items.disorganization.question')
    },
    {
      icon: DollarSign,
      title: t('challenges.items.cashflow.title'),
      question: t('challenges.items.cashflow.question')
    },
    {
      icon: Target,
      title: t('challenges.items.decisions.title'),
      question: t('challenges.items.decisions.question')
    }
  ];

  return (
    <section id="desafios" className="pt-16 pb-20 bg-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
            {t('challenges.title')}
          </h2>
          <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {t('challenges.subtitle')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full mb-16"
        >
          <img
            src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//Banner%20desafios.svg"
            alt="Banner de desafios"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-[16px] text-gray-600">
                      {challenge.question}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gray-900 hover:bg-blue-600 px-8 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg">
              {t('challenges.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}