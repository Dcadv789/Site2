import React from 'react';
import { BarChart as ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';

export function Scenario() {
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
            CENÁRIO
          </h2>
          <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-4">
            Você controla seu financeiro ou seu financeiro te controla?
          </p>
          <h3 className="text-[20px] font-semibold text-gray-800 mt-8 mb-6">
            Principais motivos de falência de empresas no Brasil
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

            <div className="mt-12">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 rounded-lg shadow-lg text-[20px] font-semibold text-white hover:shadow-xl transition-all duration-300">
                  Evite que isso aconteça com você
                </button>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Análise financeira"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-500/20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}