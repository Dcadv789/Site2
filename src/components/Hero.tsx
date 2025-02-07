import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TextRotate } from './TextRotate';

export function Hero() {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    {
      title: "Somos o novo financeiro da sua empresa",
      description: "Um time pronto para assumir seu financeiro, para que você concentre no que realmente importa: o crescimento do seu negócio."
    },
    {
      title: "Consultoria financeira personalizada",
      description: "Conte com nossa consultoria para ajudá-lo a atingir seus objetivos. Forneceremos insights estratégicos e recomendações personalizadas para sua empresa."
    },
    {
      title: "Não perca mais tempo! Contrate já!",
      description: "Não quebre mais a cabeça e pare de perder tempo. Deixe-nos cuidar da burocracia enquanto você ganha dinheiro."
    }
  ];

  const rotatingTexts = [
    "seu lucro.",
    "seu controle.",
    "seu tempo.",
    "sua gestão.",
    "sua produtividade.",
    "sua performance."
  ];

  const handleCtaClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section id="inicio" className="pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="relative">
              <div className="min-h-[280px] sm:min-h-[240px]">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl transition-opacity duration-500">
                  {scenes[currentScene].title}
                </h1>
                
                <p className="mt-6 text-xl text-gray-500 leading-relaxed transition-opacity duration-500">
                  {scenes[currentScene].description}
                </p>
              </div>

              <div className="flex justify-center space-x-3 mt-8">
                {scenes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScene(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      currentScene === index 
                        ? 'bg-blue-600 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para cena ${index + 1}`}
                  />
                ))}
              </div>

              <div className="text-2xl font-light text-gray-600 tracking-wide text-center mt-8">
                <span>Eleve seu patamar e otimize </span>
                <TextRotate 
                  texts={rotatingTexts}
                  className="text-blue-600 font-medium inline-block"
                  rotationInterval={3000}
                />
              </div>

              <div className="mt-8">
                <button
                  onClick={handleCtaClick}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Fale com um especialista
                  <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000"
                alt="Análise financeira empresarial"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}