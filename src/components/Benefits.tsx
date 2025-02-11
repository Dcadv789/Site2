import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PiggyBank,
  BarChart3,
  FolderKanban,
  Hourglass,
  Shield,
  HeartHandshake,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Benefits() {
  const benefits = [
    {
      icon: PiggyBank,
      title: "Economia Inteligente",
      description: "Com a DC Advisors, sua empresa reduz desperdícios e maximiza os lucros através de uma gestão financeira estratégica. Identificamos e eliminamos gastos desnecessários, otimizamos seus recursos e estruturamos processos financeiros para que sua empresa tenha um crescimento sustentável. Nossa abordagem garante que cada real seja utilizado de forma inteligente, permitindo mais eficiência e previsibilidade no seu fluxo de caixa."
    },
    {
      icon: BarChart3,
      title: "Controle e Decisão Estratégica",
      description: "Ter informações financeiras completas e acessíveis em tempo real é essencial para a tomada de decisões assertivas. Com as soluções da DC Advisors, você terá um panorama financeiro claro e preciso, garantindo que suas escolhas sejam sempre embasadas e alinhadas com seus objetivos de crescimento. Acabe com a incerteza e ganhe confiança para tomar decisões estratégicas que impulsionam seu negócio."
    },
    {
      icon: FolderKanban,
      title: "Organização e Transparência",
      description: "A falta de controle financeiro pode gerar desorganização, erros e prejuízos. Na DC Advisors, estruturamos seus processos para garantir ordem absoluta e total transparência em suas finanças. Criamos rotinas financeiras eficientes, categorizamos despesas e receitas, e mantemos todas as informações organizadas para que você tenha total clareza sobre a saúde financeira do seu negócio."
    },
    {
      icon: Hourglass,
      title: "Mais Tempo para Crescer",
      description: "Empreendedores passam muito tempo lidando com tarefas financeiras, quando poderiam estar focados no crescimento da empresa. Com a DC Advisors, você delega a gestão financeira para especialistas e ganha tempo para se dedicar ao que realmente importa: atrair clientes, inovar e expandir seu negócio. Nossa equipe assume o trabalho operacional e estratégico das finanças, permitindo que você tenha mais liberdade e tranquilidade no dia a dia."
    },
    {
      icon: Shield,
      title: "Segurança Financeira Total",
      description: "A proteção das suas informações financeiras é uma prioridade absoluta na DC Advisors. Contamos com tecnologia avançada e processos robustos para garantir a segurança, confidencialidade e integridade dos seus dados. Com criptografia, backups e protocolos rigorosos, seu negócio estará protegido contra riscos e vazamentos, permitindo que você trabalhe com total tranquilidade."
    },
    {
      icon: HeartHandshake,
      title: "Consultoria e Suporte Sob Medida",
      description: "Cada empresa tem desafios e necessidades específicas. Na DC Advisors, não oferecemos soluções genéricas: nosso suporte é totalmente personalizado para atender as particularidades do seu negócio. Com nossa consultoria especializada, você conta com um parceiro estratégico que entende suas dores e trabalha lado a lado para implementar soluções financeiras eficientes, ajudando sua empresa a crescer de forma estruturada e sustentável."
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
              O que os clientes da DC Advisors ganham
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
                    className="group relative w-full flex items-center gap-3 p-4 justify-start text-lg text-gray-900 hover:text-blue-600 transition-colors data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none"
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
              <div className="lg:col-span-8 h-full">
                <div className="border-2 border-gray-200 rounded-xl p-8 h-full min-h-[360px] relative">
                  <AnimatePresence mode="wait">
                    {benefits.map((benefit) => (
                      <TabsContent
                        key={benefit.title}
                        value={benefit.title}
                        className="m-0 h-full absolute inset-0 p-8"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-start gap-6"
                        >
                          {React.createElement(benefit.icon, {
                            className: "w-12 h-12 text-blue-600 flex-shrink-0"
                          })}
                          <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {benefit.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      </TabsContent>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gray-900 hover:bg-blue-600 px-12 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg whitespace-nowrap min-w-[500px]">
              Quero esses benefícios para minha empresa!
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}