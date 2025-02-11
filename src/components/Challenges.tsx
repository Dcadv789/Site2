import React from 'react';
import { TrendingDown, FileQuestion, DollarSign, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function Challenges() {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Resultados Abaixo do Esperado",
      question: "Seus indicadores estão imprecisos ou nem existem?"
    },
    {
      icon: FileQuestion,
      title: "Desorganização",
      question: "Seu financeiro está desorganizado e você não sabe para onde está indo o dinheiro?"
    },
    {
      icon: DollarSign,
      title: "Fluxo de Caixa",
      question: "Você sente que está sempre no vermelho, mesmo faturando bem?"
    },
    {
      icon: Target,
      title: "Decisões Estratégicas",
      question: "Tem dificuldades para definir preços justos e lucrativos para seus produtos e serviços?"
    }
  ];

  return (
    <section id="desafios" className="pt-16 pb-20 bg-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
            DESAFIOS
          </h2>
          <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Você se identifica com algum destes desafios?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 gap-8">
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
                      <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors flex-shrink-0">
                        <Icon className="h-7 w-7 text-orange-600" />
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
                  Diagnóstico gratuito
                </button>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
                alt="Abstract orange pattern"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-600/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}