import React from 'react';
import { motion } from 'framer-motion';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart3, 
  Calculator, 
  FileSpreadsheet,
  PiggyBank,
  TrendingUp,
  Users,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      id: "consultoria-empresarial",
      icon: BarChart3,
      title: "Consultoria Empresarial",
      description: "Controle completo das suas finanças com relatórios detalhados e análises estratégicas",
      content: (
        <div className="grid grid-cols-3 gap-3 max-w-4xl mx-auto">
          {[
            "Diagnóstico Financeiro",
            "Consultoria para Crescimento",
            "Planejamento Estratégico",
            "Precificação de Produtos e Serviços",
            "Análise de Viabilidade de Projetos",
            "Gestão de Fluxo de Caixa",
            "Otimização de Custos e Despesas",
            "Reestruturação Financeira",
            "Consultoria em Financiamento e Investimentos"
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[90px] bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-sm font-medium text-gray-900 text-center relative z-10 group-hover:text-blue-700 transition-colors duration-300">
                  {service}
                </h3>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600/60 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: "bpo-financeiro",
      icon: Calculator,
      title: "BPO Financeiro",
      description: "Otimização da carga tributária e conformidade fiscal",
      content: null
    },
    {
      id: "antecipacao-recebiveis",
      icon: Users,
      title: "Antecipação de Recebíveis",
      description: "Assessoria estratégica para crescimento sustentável",
      content: null
    },
    {
      id: "solucoes-digitais",
      icon: TrendingUp,
      title: "Soluções Digitais",
      description: "Métricas e indicadores para tomada de decisão",
      content: null
    },
    {
      id: "hub-ferramentas",
      icon: PiggyBank,
      title: "Hub de Ferramentas DC",
      description: "Otimização e controle de custos empresariais",
      content: null
    },
    {
      id: "mentoria-treinamentos",
      icon: FileSpreadsheet,
      title: "Mentoria e Treinamentos",
      description: "Informações sob medida para seu negócio",
      content: null
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
              NOSSOS SERVIÇOS
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Soluções financeiras para empresas de todos os tamanhos
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue={services[0].id} className="w-full">
          <ScrollArea className="w-full">
            <TabsList className="mb-8 inline-flex w-full justify-start gap-1 bg-transparent p-0">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="rounded-full text-sm text-gray-700 bg-white px-4 py-2 transition-all data-[state=active]:border data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-gray-50"
                  >
                    <Icon className="mr-1.5 h-4 w-4" />
                    {service.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl"
              >
                {service.content}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <motion.div
            initial={false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gray-900 hover:bg-blue-600 px-12 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg">
              Solicite uma proposta personalizada
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}