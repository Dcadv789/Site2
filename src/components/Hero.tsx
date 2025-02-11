import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from "framer-motion"
import { TextRotate } from '../components/ui/text-rotate';

export function Hero() {
  const handleCtaClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section id="inicio" className="pt-16 scroll-mt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-28">
        {/* Main heading spanning full width */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1]"
          >
            Somos o <span className="text-blue-600">novo financeiro</span> da sua empresa!
          </motion.h1>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left column - 65% width */}
          <div className="col-span-12 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full"
            >
              <img
                src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner1.svg"
                alt="Banner ilustrativo"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Right column */}
          <div className="col-span-12 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                Evolua sua gestão
              </h2>

              <button
                onClick={handleCtaClick}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg"
              >
                Diagnóstico Gratuito
              </button>

              <div className="mt-8 flex items-center justify-center gap-8">
                {/* Social icons */}
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>

                {/* Second banner image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-32"
                >
                  <img
                    src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner2.svg"
                    alt="Banner secundário"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hidden TextRotate component */}
        <div className="hidden">
          <TextRotate
            texts={[
              "seu lucro",
              "seu tempo",
              "seu controle",
              "sua gestão",
              "sua produtividade",
              "sua performance",
            ]}
            rotationInterval={2000}
          />
        </div>
      </div>
    </section>
  );
}