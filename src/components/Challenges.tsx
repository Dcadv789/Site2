import React from 'react';
import { TrendingDown, Clock, DollarSign, Target } from 'lucide-react';

export function Challenges() {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Resultados Abaixo do Esperado",
      description: "Dificuldade em atingir metas financeiras e crescimento estagnado mesmo com esforços contínuos."
    },
    {
      icon: Clock,
      title: "Gestão do Tempo",
      description: "Processos financeiros ineficientes que consomem tempo precioso da sua equipe."
    },
    {
      icon: DollarSign,
      title: "Fluxo de Caixa",
      description: "Problemas com gestão de capital de giro e previsibilidade financeira."
    },
    {
      icon: Target,
      title: "Decisões Estratégicas",
      description: "Insegurança na tomada de decisões por falta de dados e análises confiáveis."
    }
  ];

  return (
    <section id="desafios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Desafios que Resolvemos
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Identificamos e solucionamos os principais obstáculos que impedem o crescimento financeiro da sua empresa
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}