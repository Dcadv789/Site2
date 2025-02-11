import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  LineChart, 
  PieChart, 
  Wallet, 
  ShieldCheck,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Benefits() {
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
              BENEFÍCIOS
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Transforme sua gestão financeira e alcance resultados extraordinários
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          <Tabs defaultValue={benefits[0].title} className="w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Lista de benefícios na lateral esquerda */}
              <TabsList className="lg:col-span-4 flex lg:flex-col bg-transparent p-0 h-full">
                {benefits.map((benefit) => (
                  <TabsTrigger
                    key={benefit.title}
                    value={benefit.title}
                    className="group relative w-full flex items-center gap-3 p-4 justify-start text-lg text-gray-900 hover:text-blue-600 transition-colors data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
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
              <div className="lg:col-span-8">
                {benefits.map((benefit) => (
                  <TabsContent
                    key={benefit.title}
                    value={benefit.title}
                    className="m-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="border border-gray-200 rounded-xl p-8 h-full"
                    >
                      <div className="flex items-start gap-6">
                        {React.createElement(benefit.icon, {
                          className: "w-12 h-12 text-blue-600 flex-shrink-0"
                        })}
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
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