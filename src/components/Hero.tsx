import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from '../components/ui/text-rotate';

export function Hero() {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    {
      title: <>Somos o <span className="text-blue-600">novo financeiro</span><br />da sua empresa</>,
      description: "Um time pronto para assumir seu financeiro, para que você concentre no que realmente importa: o crescimento do seu negócio."
    },
    {
      title: <>Consultoria <span className="text-blue-600">financeira</span><br />personalizada</>,
      description: "Conte com nossa consultoria para ajudá-lo a atingir seus objetivos. Forneceremos insights estratégicos e recomendações personalizadas para sua empresa."
    },
    {
      title: <>Não perca mais <span className="text-blue-600">tempo</span>!<br />Contrate já!</>,
      description: "Não quebre mais a cabeça e pare de perder tempo. Deixe-nos cuidar da burocracia enquanto você ganha dinheiro."
    }
  ];

  const handleCtaClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((current) => (current === scenes.length - 1 ? 0 : current + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [scenes.length]);

  return (
    <section id="inicio" className="pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="relative">
              <div className="min-h-[140px] sm:min-h-[120px]">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 transition-opacity duration-500 font-sans leading-[1.1] max-w-[800px] whitespace-pre-line">
                  {scenes[currentScene].title}
                </h1>
                
                <p className="mt-6 text-xl text-gray-500 leading-relaxed transition-opacity duration-500">
                  {scenes[currentScene].description}
                </p>
              </div>

              <div className="flex justify-start space-x-3 mt-8">
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

              <div className="text-2xl font-light text-gray-600 tracking-wide text-left mt-8">
                <LayoutGroup>
                  <motion.span className="flex whitespace-pre" layout>
                    <motion.span
                      className="pt-0.5 sm:pt-1 md:pt-2"
                      layout="position"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    >
                      Eleve seu patamar e otimize{" "}
                    </motion.span>
                    <TextRotate
                      texts={[
                        "seu lucro",
                        "seu tempo",
                        "seu controle",
                        "sua gestão",
                        "sua produtividade",
                        "sua performance",
                      ]}
                      mainClassName="text-white px-2 sm:px-2 md:px-3 bg-blue-600 overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg min-w-[180px]"
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </motion.span>
                </LayoutGroup>
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

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-sm">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000"
                alt="Análise financeira empresarial"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}