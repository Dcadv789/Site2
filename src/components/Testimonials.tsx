import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO, TechSolutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    content: "A DC Advisors transformou nossa gestão financeira completamente.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Beatriz",
    role: "Diretora Financeira, InnovateX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Reduzimos custos em 25% em apenas 6 meses.",
    rating: 5
  },
  {
    id: 3,
    name: "Ricardo Mendes",
    role: "Fundador, StartupFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Equipe excepcional com conhecimento técnico impressionante.",
    rating: 5
  },
  {
    id: 4,
    name: "Mariana Costa",
    role: "CFO, GrowthTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Melhor decisão que tomamos para nossa empresa.",
    rating: 5
  },
  {
    id: 5,
    name: "Pedro Santos",
    role: "Diretor, FutureBank",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Resultados surpreendentes em pouco tempo.",
    rating: 4
  },
  {
    id: 6,
    name: "Juliana Lima",
    role: "CEO, DigitalPro",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Profissionalismo e dedicação incomparáveis.",
    rating: 5
  },
  {
    id: 7,
    name: "Fernando Oliveira",
    role: "Diretor Financeiro, TechCore",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Transformaram nossos processos financeiros.",
    rating: 5
  },
  {
    id: 8,
    name: "Luciana Martins",
    role: "COO, SmartSolutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Consultoria que realmente entrega resultados.",
    rating: 5
  },
  {
    id: 9,
    name: "Roberto Almeida",
    role: "Fundador, NextLevel",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Parceria fundamental para nosso crescimento.",
    rating: 4
  },
  {
    id: 10,
    name: "Patricia Souza",
    role: "Diretora, InnovateBiz",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Excelência em cada aspecto do serviço.",
    rating: 5
  }
];

export function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(testimonials.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        setVisibleTestimonials(testimonials.slice(nextIndex, nextIndex + 4).concat(
          nextIndex + 4 > testimonials.length ? testimonials.slice(0, (nextIndex + 4) % testimonials.length) : []
        ));
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
              DEPOIMENTOS
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              O que nossos clientes dizem sobre nós
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1
                }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-50">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mt-4">"{testimonial.content}"</p>

                <div className="absolute bottom-6 right-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-full blur-2xl opacity-20" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}