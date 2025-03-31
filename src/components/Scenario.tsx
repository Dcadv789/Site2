import React from 'react';
import { BarChart as ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Scenario() {
  const { t } = useTranslation();

  const failureReasons = [
    { reason: "Impostos/custos/despesas/juros", percentage: 31 },
    { reason: "Vendas/pouca procura/concorrência", percentage: 29 },
    { reason: "Problemas financeiros/inadimplência", percentage: 25 },
    { reason: "Gestão/logística/administrativo/contábil", percentage: 25 },
    { reason: "Oportunidade/fim da empresa, contrato", percentage: 13 },
    { reason: "Funcionários/preparo/crise econômica", percentage: 12 },
    { reason: "Burocracia", percentage: 10 },
    { reason: "Problemas pessoais/família", percentage: 5 },
    { reason: "Localização/ponto", percentage: 4 },
    { reason: "Outros motivos diversos", percentage: 3 },
    { reason: "Tempo (carga horária/incompatibilidade)", percentage: 3 },
    { reason: "Força maior/doença/aposentadoria", percentage: 3 },
    { reason: "Falta de apoio", percentage: 2 }
  ];

  return (
    <section id="cenario" className="pt-16 pb-20 bg-[#FAFAFA] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
            {t('scenario.title')}
          </h2>
          <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-4">
            {t('scenario.subtitle')}
          </p>
          <h3 className="text-[20px] font-semibold text-gray-800 mt-8 mb-6">
            {t('scenario.failureTitle')}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2">
            <div className="space-y-3">
              {failureReasons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[15px] text-gray-700 font-medium">
                      {item.reason}
                    </span>
                    <span className="text-[15px] text-blue-600 font-semibold">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 mb-8">
              <p className="text-[12px] text-gray-500 italic">{t('scenario.source')}</p>
            </div>

            <div className="flex justify-center">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="bg-gray-900 hover:bg-blue-600 px-8 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg">
                  {t('scenario.cta')}
                </button>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//image3.svg"
                alt="Análise financeira"
                className="w-full h-[748px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}