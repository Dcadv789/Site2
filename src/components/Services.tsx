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
  LineChart,
  TrendingDown,
  Target,
  Wallet,
  BarChart2,
  ArrowUpRight,
  Banknote,
  Scale,
  Building,
  Receipt,
  CreditCard,
  FileText,
  DollarSign,
  FileCheck,
  UserCheck,
  Files,
  ClipboardList,
  BadgeCheck,
  Landmark,
  CandlestickChart,
  Coins,
  HandCoins,
  Briefcase,
  GraduationCap,
  Presentation as PresentationChart,
  Users2,
  Brain,
  Lightbulb,
  TrendingUp as TrendingUpIcon,
  Presentation,
  Gauge,
  KeyRound,
  RefreshCw,
  HelpCircle,
  FileSignature,
  HeadphonesIcon,
  TableProperties,
  Calculator as CalculatorIcon,
  BarChart,
  PiggyBank as PiggyBankIcon,
  LineChart as LineChartIcon,
  Activity,
  ClipboardList as ClipboardListIcon,
  DollarSign as DollarSignIcon,
  Laptop,
  Workflow
} from 'lucide-react';

export function Services() {
  const services = [
    {
      id: "consultoria-empresarial",
      icon: BarChart3,
      title: "Consultoria Empresarial",
      description: "Controle completo das suas finanças com relatórios detalhados e análises estratégicas",
      content: (
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Diagnóstico Financeiro",
              icon: LineChart
            },
            {
              title: "Consultoria para Crescimento",
              icon: TrendingUp
            },
            {
              title: "Planejamento Estratégico",
              icon: Target
            },
            {
              title: "Precificação de Produtos e Serviços",
              icon: Banknote
            },
            {
              title: "Análise de Viabilidade de Projetos",
              icon: Scale
            },
            {
              title: "Gestão de Fluxo de Caixa",
              icon: Wallet
            },
            {
              title: "Otimização de Custos e Despesas",
              icon: TrendingDown
            },
            {
              title: "Reestruturação Financeira",
              icon: Building
            },
            {
              title: "Consultoria em Financiamento e Investimentos",
              icon: BarChart2
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[160px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-600">
                    {React.createElement(service.icon, {
                      className: "h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300",
                      strokeWidth: 2
                    })}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-base font-medium text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-3 right-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
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
      content: (
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Gestão de Contas a Pagar e Receber",
              icon: Receipt
            },
            {
              title: "Conciliação Bancária",
              icon: CreditCard
            },
            {
              title: "Emissão de Relatórios Financeiros",
              icon: FileText
            },
            {
              title: "Controle de Fluxo de Caixa",
              icon: DollarSign
            },
            {
              title: "Emissão de Notas Fiscais e Boletos",
              icon: FileCheck
            },
            {
              title: "Gestão de Inadimplência",
              icon: UserCheck
            },
            {
              title: "Organização de Documentação Financeira",
              icon: Files
            },
            {
              title: "Gestão de Contratos e Faturamento",
              icon: ClipboardList
            },
            {
              title: "Redução de Erros e Retrabalho",
              icon: BadgeCheck
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[160px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-600">
                    {React.createElement(service.icon, {
                      className: "h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300",
                      strokeWidth: 2
                    })}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-base font-medium text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-3 right-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: "antecipacao-recebiveis",
      icon: Users,
      title: "Antecipação de Recebíveis",
      description: "Assessoria estratégica para crescimento sustentável",
      content: (
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Análise de Crédito para Empresas",
              icon: Landmark
            },
            {
              title: "Melhoria no Fluxo de Caixa",
              icon: CandlestickChart
            },
            {
              title: "Redução de Risco Financeiro",
              icon: TrendingDown
            },
            {
              title: "Liquidez Imediata para o Negócio",
              icon: Coins
            },
            {
              title: "Alternativa ao Empréstimo Bancário",
              icon: HandCoins
            },
            {
              title: "Solução para Pagamento de Fornecedores",
              icon: Briefcase
            },
            {
              title: "Condições Especiais para Empresas",
              icon: BadgeCheck
            },
            {
              title: "Suporte na Negociação de Recebíveis",
              icon: HandCoins
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[160px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-600">
                    {React.createElement(service.icon, {
                      className: "h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300",
                      strokeWidth: 2
                    })}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-base font-medium text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-3 right-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: "solucoes-digitais",
      icon: TrendingUp,
      title: "Soluções Digitais",
      description: "Métricas e indicadores para tomada de decisão",
      content: (
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Emissão de Certificado Digital",
              icon: KeyRound
            },
            {
              title: "Renovação de Certificado Digital",
              icon: RefreshCw
            },
            {
              title: "Suporte para Certificação Digital",
              icon: HelpCircle
            },
            {
              title: "Autenticação e Assinatura Eletrônica",
              icon: FileSignature
            },
            {
              title: "Atendimento Personalizado para Empresas",
              icon: HeadphonesIcon
            },
            {
              title: "Consultoria e Implantação de Sistemas",
              icon: Laptop
            },
            {
              title: "Consultoria em Transformação Tecnológica",
              icon: Workflow
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[160px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-600">
                    {React.createElement(service.icon, {
                      className: "h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300",
                      strokeWidth: 2
                    })}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-base font-medium text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-3 right-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: "hub-ferramentas",
      icon: PiggyBank,
      title: "Hub de Ferramentas DC",
      description: "Otimização e controle de custos empresariais",
      content: (
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Planilha de Controle Financeiro Empresarial",
              icon: TableProperties
            },
            {
              title: "Planilha de Precificação Inteligente",
              icon: CalculatorIcon
            },
            {
              title: "Planilha de Gestão de Fluxo de Caixa",
              icon: BarChart
            },
            {
              title: "Simulador de Investimentos",
              icon: PiggyBankIcon
            },
            {
              title: "Planilha de Planejamento Orçamentário",
              icon: LineChartIcon
            },
            {
              title: "Painel de Indicadores Financeiros",
              icon: Activity
            },
            {
              title: "Ferramenta para Gestão de Assinaturas e Serviços",
              icon: ClipboardListIcon
            },
            {
              title: "Ferramenta de Cálculo de Pró-Labore",
              icon: DollarSignIcon
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[160px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-600">
                    {React.createElement(service.icon, {
                      className: "h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300",
                      strokeWidth: 2
                    })}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-base font-medium text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-3 right-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: "mentoria-treinamentos",
      icon: FileSpreadsheet,
      title: "Mentoria e Treinamentos",
      description: "Informações sob medida para seu negócio",
      content: (
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Treinamento de Gestão Financeira Empresarial",
              icon: GraduationCap
            },
            {
              title: "Mentoria para Precificação de Produtos e Serviços",
              icon: PresentationChart
            },
            {
              title: "Formação de Equipes Financeiras",
              icon: Users2
            },
            {
              title: "Desenvolvimento de Líderes Financeiros",
              icon: Brain
            },
            {
              title: "Palestras sobre Finanças Empresariais",
              icon: Presentation
            },
            {
              title: "Workshop de Planejamento Financeiro",
              icon: Lightbulb
            },
            {
              title: "Treinamento de Redução de Custos",
              icon: TrendingUpIcon
            },
            {
              title: "Mentoria Personalizada para Negócios",
              icon: Target
            },
            {
              title: "Estratégias para Aumento da Lucratividade",
              icon: Gauge
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[160px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-600">
                    {React.createElement(service.icon, {
                      className: "h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300",
                      strokeWidth: 2
                    })}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-base font-medium text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-3 right-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
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

        <div className="mt-10 text-center">
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