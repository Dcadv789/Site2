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
    <section id="desafios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-6 uppercase tracking-wide">
            DESAFIOS
          </h2>
          <p className="text-3xl sm:text-4xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            As dificuldades financeiras podem estar atrapalhando o crescimento da sua empresa. 
            Você se identifica com algum destes problemas?
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
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600 group hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors flex-shrink-0">
                        <Icon className="h-7 w-7 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {challenge.question}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 text-center"
            >
              <div className="inline-block bg-orange-500 px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <p className="text-xl font-semibold text-white">
                  📌 Se você se identificou com algum destes desafios, podemos ajudar!
                </p>
              </div>
            </motion.div>
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