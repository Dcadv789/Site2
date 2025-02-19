import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Diamond, Gem } from 'lucide-react';

export function Plans() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Silver",
      icon: Star,
      discount: 10,
      description: "Ideal para pequenas empresas iniciando sua jornada financeira",
      features: [
        "Consultoria financeira mensal",
        "Análise básica de fluxo de caixa",
        "Relatórios financeiros trimestrais",
        "Suporte por email",
        "Acesso básico ao hub de ferramentas"
      ],
      color: "gray"
    },
    {
      name: "Gold",
      icon: Gem,
      discount: 10,
      description: "Perfeito para empresas em crescimento",
      features: [
        "Tudo do plano Silver",
        "Consultoria financeira quinzenal",
        "Análise detalhada de custos",
        "Planejamento tributário básico",
        "Suporte prioritário por email e WhatsApp"
      ],
      color: "yellow"
    },
    {
      name: "Platinum",
      icon: Crown,
      discount: 15,
      description: "Nosso plano mais popular para empresas estabelecidas",
      features: [
        "Tudo do plano Gold",
        "Consultoria financeira semanal",
        "Planejamento estratégico mensal",
        "Dashboard financeiro personalizado",
        "Suporte prioritário 24/7",
        "Acesso completo ao hub de ferramentas"
      ],
      color: "blue",
      popular: true
    },
    {
      name: "Diamond",
      icon: Diamond,
      discount: 15,
      description: "Solução premium para empresas que buscam excelência",
      features: [
        "Tudo do plano Platinum",
        "Consultoria financeira ilimitada",
        "Planejamento estratégico semanal",
        "Análise setorial personalizada",
        "Consultor financeiro dedicado",
        "Acesso VIP a workshops e eventos"
      ],
      color: "purple"
    }
  ];

  return (
    <section id="planos" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] sm:text-[15px] font-bold text-white mb-6 uppercase tracking-wide">
              PLANOS
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Escolha o plano ideal para o seu negócio
            </p>

            {/* Toggle de Preços */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative bg-white rounded-full p-1 flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    !isAnnual ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isAnnual ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  Anual
                </button>
                <div
                  className={`absolute inset-y-1 w-[50%] bg-blue-600 rounded-full transition-transform duration-200 ${
                    isAnnual ? 'translate-x-full' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            
            const colorVariants = {
              gray: "hover:border-gray-400 hover:shadow-gray-100",
              yellow: "hover:border-yellow-400 hover:shadow-yellow-100",
              blue: "hover:border-blue-400 hover:shadow-blue-100",
              purple: "hover:border-purple-400 hover:shadow-purple-100"
            };

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${isPopular ? 'lg:-mt-8' : ''}`}
              >
                {/* Tag Popular */}
                {isPopular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Tag de Desconto */}
                {isAnnual && (
                  <div className="absolute -top-5 right-4 z-10">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {plan.discount}% OFF
                    </span>
                  </div>
                )}

                <div className={`h-full bg-white rounded-2xl p-8 border-2 transition-all duration-300 
                  ${isPopular ? 'border-blue-200 shadow-xl' : 'border-gray-100 shadow-lg'} 
                  ${colorVariants[plan.color as keyof typeof colorVariants]}
                  ${isPopular ? 'hover:shadow-2xl hover:scale-105' : 'hover:shadow-xl hover:scale-102'}
                `}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                      ${plan.color === 'gray' ? 'bg-gray-100' : 
                        plan.color === 'yellow' ? 'bg-yellow-100' :
                        plan.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'}
                    `}>
                      <Icon className={`w-6 h-6
                        ${plan.color === 'gray' ? 'text-gray-600' :
                          plan.color === 'yellow' ? 'text-yellow-600' :
                          plan.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}
                      `} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5
                          ${plan.color === 'gray' ? 'text-gray-600' :
                            plan.color === 'yellow' ? 'text-yellow-600' :
                            plan.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}
                        `} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                    ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-gray-800'}
                  `}>
                    Começar Agora
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}