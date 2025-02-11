import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  LineChart, 
  PieChart, 
  Wallet, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description: "Aumente seu faturamento com decisões baseadas em dados precisos"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize processos e foque no que realmente importa"
    },
    {
      icon: LineChart,
      title: "Controle Total",
      description: "Tenha visibilidade completa sobre suas finanças"
    },
    {
      icon: PieChart,
      title: "Gestão Eficiente",
      description: "Otimize recursos e reduza custos operacionais"
    },
    {
      icon: Wallet,
      title: "Saúde Financeira",
      description: "Mantenha seu fluxo de caixa sempre positivo"
    },
    {
      icon: ShieldCheck,
      title: "Segurança",
      description: "Decisões estratégicas com base em dados confiáveis"
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
              BENEFÍCIOS
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Transforme sua gestão financeira e alcance resultados extraordinários
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna da esquerda - Lista de benefícios */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isSelected = selectedBenefit === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedBenefit(index)}
                  className={`cursor-pointer group ${
                    isSelected ? 'bg-blue-50' : 'bg-white'
                  } p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-blue-500' : 'bg-gray-100 group-hover:bg-blue-100'
                      } transition-colors`}>
                        <Icon className={`w-6 h-6 ${
                          isSelected ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                        }`} />
                      </div>
                      <h3 className={`text-lg font-semibold ${
                        isSelected ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {benefit.title}
                      </h3>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-blue-600 translate-x-1' : 'text-gray-400 group-hover:translate-x-1'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Coluna da direita - Descrição do benefício */}
          <div className="relative h-[300px] bg-white rounded-2xl shadow-lg p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBenefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="mb-6">
                  {React.createElement(benefits[selectedBenefit].icon, {
                    className: "w-16 h-16 text-blue-600"
                  })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefits[selectedBenefit].title}
                </h3>
                <p className="text-lg text-gray-600">
                  {benefits[selectedBenefit].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg transform rotate-1 hover:rotate-2 transition-transform duration-300" />
            <button className="relative bg-white px-8 py-4 rounded-lg text-[18px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 hover:shadow-xl transition-all duration-300">
              Comece sua transformação agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}