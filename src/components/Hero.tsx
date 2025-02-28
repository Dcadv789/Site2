import React from 'react';
import { Share2, Youtube, Instagram, Linkedin, Wallet, Target, TrendingUp, Percent } from 'lucide-react';
import { motion } from "framer-motion"
import { TextRotate } from '../components/ui/text-rotate';

export function Hero() {
  const handleCtaClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const stats = [
    { icon: Wallet, label: '+2,5M', description: 'Gerenciados' },
    { icon: Target, label: '100%', description: 'Foco' },
    { icon: TrendingUp, label: '99%', description: 'Satisfação' },
    { icon: Percent, label: '29%', description: 'Economia Gerada' },
  ];

  const socialLinks = [
    { 
      icon: Share2, 
      href: 'https://wa.me/?text=Confira este serviço de consultoria financeira: https://dcadvisors.com.br',
      label: 'Compartilhar'
    },
    { 
      icon: Instagram, 
      href: '#',
      label: 'Instagram'
    },
    { 
      icon: Youtube, 
      href: '#',
      label: 'Youtube'
    },
    { 
      icon: Linkedin, 
      href: '#',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="inicio" className="pt-12 scroll-mt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-24 sm:pb-28">
        {/* Main heading spanning full width */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1]"
          >
            Seu <span className="text-blue-600">financeiro</span> digital, eficiente e projetado para o sucesso
          </motion.h1>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - 60% width */}
          <div className="col-span-12 lg:col-span-7 flex items-end">
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
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col h-full justify-between"
            >
              <div className="w-full">
                <h2 className="text-base font-medium text-gray-500 mb-6 text-left">
                  O futuro do seu financeiro começa aqui: inovação, estratégia e crescimento. Faça um diagnóstico financeiro gratuito e descubra como evoluir!
                </h2>
              </div>

              <div className="w-full">
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={handleCtaClick}
                      className="bg-gray-900 hover:bg-blue-600 px-3 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg min-w-[230px]"
                    >
                      Diagnóstico Gratuito
                    </button>

                    {/* Social icons */}
                    <div className="flex gap-3 justify-end w-72 translate-x-[-30px]">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors bg-white shadow-md p-2 rounded-full hover:shadow-lg group border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            whileHover={{ y: -2 }}
                          >
                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="sr-only">{social.label}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-8 items-end justify-end">
                    {/* Stats grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                          >
                            <Icon className="h-5 w-5 text-blue-600 mb-1" />
                            <span className="text-base font-semibold text-gray-900">{stat.label}</span>
                            <span className="text-xs text-gray-600 text-center">{stat.description}</span>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    {/* Second banner image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="w-64"
                    >
                      <img
                        src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner2.svg"
                        alt="Banner secundário"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
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