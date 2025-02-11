import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  LineChart, 
  PieChart, 
  Wallet, 
  ShieldCheck 
} from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description: "Aumente seu faturamento com decisões baseadas em dados precisos",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize processos e foque no que realmente importa",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: LineChart,
      title: "Controle Total",
      description: "Tenha visibilidade completa sobre suas finanças",
      color: "from-green-500 to-green-600"
    },
    {
      icon: PieChart,
      title: "Gestão Eficiente",
      description: "Otimize recursos e reduza custos operacionais",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Wallet,
      title: "Saúde Financeira",
      description: "Mantenha seu fluxo de caixa sempre positivo",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: ShieldCheck,
      title: "Segurança",
      description: "Decisões estratégicas com base em dados confiáveis",
      color: "from-indigo-500 to-indigo-600"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} p-4 mb-6`}>
                  <benefit.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
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