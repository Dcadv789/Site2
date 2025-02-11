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
      id: "gestao-financeira",
      icon: BarChart3,
      title: "Gestão Financeira",
      description: "Controle completo das suas finanças com relatórios detalhados e análises estratégicas",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Gestão Financeira"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">Gestão Financeira Completa</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Controle de receitas e despesas
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Fluxo de caixa detalhado
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Relatórios gerenciais
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Análise de custos
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "planejamento-tributario",
      icon: Calculator,
      title: "Planejamento Tributário",
      description: "Otimização da carga tributária e conformidade fiscal",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Planejamento Tributário"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">Planejamento Tributário Estratégico</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Análise de regime tributário
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Redução legal da carga tributária
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Prevenção de contingências
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Recuperação de tributos
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "consultoria-empresarial",
      icon: Users,
      title: "Consultoria Empresarial",
      description: "Assessoria estratégica para crescimento sustentável",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Consultoria Empresarial"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">Consultoria Empresarial Especializada</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Diagnóstico empresarial
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Planejamento estratégico
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Reestruturação organizacional
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Gestão de processos
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "analise-desempenho",
      icon: TrendingUp,
      title: "Análise de Desempenho",
      description: "Métricas e indicadores para tomada de decisão",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Análise de Desempenho"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">Análise de Desempenho Empresarial</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                KPIs personalizados
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Dashboards gerenciais
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Análise de tendências
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Recomendações estratégicas
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "gestao-custos",
      icon: PiggyBank,
      title: "Gestão de Custos",
      description: "Otimização e controle de custos empresariais",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Gestão de Custos"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">Gestão Estratégica de Custos</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Análise de custos fixos e variáveis
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Precificação estratégica
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Redução de desperdícios
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Otimização de recursos
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "relatorios-customizados",
      icon: FileSpreadsheet,
      title: "Relatórios Customizados",
      description: "Informações sob medida para seu negócio",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600&h=400"
            alt="Relatórios Customizados"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">Relatórios Personalizados</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Relatórios sob demanda
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Análises setoriais
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Indicadores personalizados
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                Visualização de dados
              </li>
            </ul>
          </div>
        </div>
      )
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
              Soluções financeiras estratégicas para empresas de todos os tamanhos
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
                className="rounded-xl bg-white p-8"
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