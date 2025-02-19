import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = {
  "consultoria-empresarial": {
    title: "Consultoria Empresarial",
    questions: [
      {
        question: "Como a consultoria pode ajudar minha empresa?",
        answer: "Nossa consultoria oferece análise detalhada do seu negócio, identificando oportunidades de melhoria, otimizando processos e desenvolvendo estratégias personalizadas para aumentar a lucratividade e eficiência operacional."
      },
      {
        question: "Qual é a duração média de um projeto de consultoria?",
        answer: "A duração varia conforme as necessidades específicas, mas geralmente os projetos iniciais têm duração de 3 a 6 meses, com possibilidade de acompanhamento contínuo posterior."
      },
      {
        question: "Como é feito o diagnóstico inicial?",
        answer: "Realizamos uma análise completa da sua empresa, incluindo aspectos financeiros, operacionais e estratégicos, através de reuniões, análise de documentos e avaliação de processos."
      },
      {
        question: "Quais são os principais benefícios da consultoria?",
        answer: "Os benefícios incluem redução de custos, aumento de produtividade, melhoria nos processos decisórios, otimização do fluxo de caixa e desenvolvimento de estratégias de crescimento sustentável."
      },
      {
        question: "Como é medido o retorno sobre o investimento?",
        answer: "Estabelecemos KPIs específicos para seu negócio e realizamos acompanhamento mensal dos resultados, com relatórios detalhados de performance e retorno financeiro."
      },
      {
        question: "Vocês atendem empresas de qual porte?",
        answer: "Atendemos empresas de todos os portes, desde startups até grandes corporações, com soluções personalizadas para cada perfil de negócio."
      },
      {
        question: "Como funciona o processo de implementação?",
        answer: "Desenvolvemos um plano de ação detalhado, com cronograma, metas e responsabilidades definidas, além de acompanhamento próximo durante toda a implementação."
      },
      {
        question: "Qual é a frequência das reuniões de acompanhamento?",
        answer: "Realizamos reuniões semanais ou quinzenais, conforme a necessidade do projeto, além de relatórios periódicos de progresso."
      }
    ]
  },
  "bpo-financeiro": {
    title: "BPO Financeiro",
    questions: [
      {
        question: "O que é BPO Financeiro?",
        answer: "BPO Financeiro é a terceirização dos processos financeiros da sua empresa, incluindo contas a pagar, contas a receber, conciliação bancária e gestão do fluxo de caixa."
      },
      {
        question: "Quais serviços estão inclusos no BPO?",
        answer: "Oferecemos gestão completa de contas a pagar e receber, conciliação bancária, emissão de relatórios financeiros, controle de fluxo de caixa e gestão de documentos fiscais."
      },
      {
        question: "Como é garantida a segurança das informações?",
        answer: "Utilizamos sistemas de alta segurança com criptografia, backups regulares e políticas rígidas de confidencialidade, além de acordos de sigilo com toda a equipe."
      },
      {
        question: "Qual é o prazo de implementação?",
        answer: "A implementação leva em média 30 dias, incluindo a configuração dos sistemas, treinamento da equipe e definição dos processos."
      },
      {
        question: "Como é feita a transição dos processos?",
        answer: "Realizamos uma transição gradual e assistida, garantindo que não haja interrupção nas operações da sua empresa."
      },
      {
        question: "Quais relatórios são fornecidos?",
        answer: "Fornecemos relatórios personalizados de fluxo de caixa, DRE, balanço patrimonial, indicadores financeiros e análises específicas conforme necessidade."
      },
      {
        question: "Como é feito o acesso às informações?",
        answer: "Através de um portal online seguro, onde você tem acesso 24/7 a todos os relatórios e informações financeiras da sua empresa."
      },
      {
        question: "Qual é o nível de personalização do serviço?",
        answer: "O serviço é totalmente personalizado, adaptando-se aos processos e necessidades específicas da sua empresa."
      }
    ]
  },
  "antecipacao-recebiveis": {
    title: "Antecipação de Recebíveis",
    questions: [
      {
        question: "Quais tipos de recebíveis podem ser antecipados?",
        answer: "Aceitamos diversos tipos de recebíveis, incluindo boletos, duplicatas, cheques, cartões de crédito e contratos."
      },
      {
        question: "Qual é o prazo para aprovação?",
        answer: "A aprovação é rápida, geralmente em até 24 horas após o envio da documentação completa."
      },
      {
        question: "Quais são as taxas praticadas?",
        answer: "As taxas são personalizadas e variam conforme o volume, prazo e tipo de recebível, sempre com as melhores condições do mercado."
      },
      {
        question: "Qual é o valor mínimo para antecipação?",
        answer: "Trabalhamos com valores a partir de R$ 10.000, mas as condições podem variar conforme análise."
      },
      {
        question: "Como é feita a análise de crédito?",
        answer: "Realizamos uma análise rápida e simplificada, considerando o histórico da empresa e a qualidade dos recebíveis."
      },
      {
        question: "Quanto tempo leva para receber o valor?",
        answer: "Após a aprovação, o valor é liberado em até 24 horas úteis."
      },
      {
        question: "Quais documentos são necessários?",
        answer: "Documentação básica da empresa, comprovantes dos recebíveis e demonstrativos financeiros recentes."
      },
      {
        question: "Existe fidelização ou carência?",
        answer: "Não há fidelização ou carência, você utiliza o serviço conforme sua necessidade."
      }
    ]
  },
  "solucoes-digitais": {
    title: "Soluções Digitais",
    questions: [
      {
        question: "Quais soluções digitais são oferecidas?",
        answer: "Oferecemos sistemas de gestão financeira, emissão de certificados digitais, automação de processos e integrações com sistemas existentes."
      },
      {
        question: "Como funciona a implementação?",
        answer: "A implementação é feita em fases, com treinamento completo da equipe e suporte contínuo."
      },
      {
        question: "Qual é o prazo de implementação?",
        answer: "O prazo varia conforme a solução, mas geralmente leva de 15 a 45 dias."
      },
      {
        question: "As soluções são integradas?",
        answer: "Sim, todas as nossas soluções podem ser integradas entre si e com outros sistemas da sua empresa."
      },
      {
        question: "Como funciona o suporte técnico?",
        answer: "Oferecemos suporte técnico 24/7 através de diversos canais de atendimento."
      },
      {
        question: "É possível personalizar as soluções?",
        answer: "Sim, todas as soluções podem ser personalizadas conforme as necessidades específicas da sua empresa."
      },
      {
        question: "Qual é o investimento necessário?",
        answer: "O investimento varia conforme as soluções escolhidas, com planos que se adequam a diferentes orçamentos."
      },
      {
        question: "Como é garantida a segurança dos dados?",
        answer: "Utilizamos as mais avançadas tecnologias de segurança e criptografia, com backups regulares e conformidade com LGPD."
      }
    ]
  },
  "hub-ferramentas": {
    title: "Hub de Ferramentas DC",
    questions: [
      {
        question: "O que é o Hub de Ferramentas?",
        answer: "É uma plataforma centralizada com diversas ferramentas de gestão financeira, incluindo planilhas, calculadoras e simuladores."
      },
      {
        question: "Como posso acessar as ferramentas?",
        answer: "O acesso é feito através de uma plataforma online, com login e senha exclusivos."
      },
      {
        question: "Quais ferramentas estão disponíveis?",
        answer: "Oferecemos planilhas de controle financeiro, simuladores de investimentos, calculadoras de precificação e muito mais."
      },
      {
        question: "É necessário instalar algum software?",
        answer: "Não, todas as ferramentas são baseadas em nuvem e acessíveis via navegador."
      },
      {
        question: "Como funciona o treinamento?",
        answer: "Oferecemos treinamentos online e materiais de apoio para todas as ferramentas."
      },
      {
        question: "As ferramentas são atualizadas?",
        answer: "Sim, realizamos atualizações regulares com novas funcionalidades e melhorias."
      },
      {
        question: "Posso exportar os dados?",
        answer: "Sim, todas as ferramentas permitem exportação de dados em diversos formatos."
      },
      {
        question: "Existe limite de usuários?",
        answer: "O número de usuários varia conforme o plano contratado."
      }
    ]
  },
  "mentoria-treinamentos": {
    title: "Mentoria e Treinamentos",
    questions: [
      {
        question: "Como funcionam as mentorias?",
        answer: "As mentorias são personalizadas, com encontros regulares focados nos objetivos específicos da sua empresa."
      },
      {
        question: "Quais tipos de treinamentos são oferecidos?",
        answer: "Oferecemos treinamentos em gestão financeira, liderança, processos operacionais e desenvolvimento de equipes."
      },
      {
        question: "Os treinamentos são presenciais ou online?",
        answer: "Oferecemos ambas as modalidades, adaptando-nos à sua preferência e necessidade."
      },
      {
        question: "Qual é a duração dos programas?",
        answer: "A duração varia conforme o programa, desde workshops de um dia até programas de 6 meses."
      },
      {
        question: "Como é feita a avaliação dos resultados?",
        answer: "Realizamos avaliações periódicas com métricas específicas para cada programa."
      },
      {
        question: "É possível personalizar os conteúdos?",
        answer: "Sim, todos os programas podem ser customizados para atender às necessidades específicas da sua empresa."
      },
      {
        question: "Quantas pessoas podem participar?",
        answer: "O número de participantes varia conforme o programa, mas geralmente limitamos para garantir a qualidade."
      },
      {
        question: "Existe material de apoio?",
        answer: "Sim, fornecemos material completo, incluindo apostilas, vídeos e exercícios práticos."
      }
    ]
  }
};

export function FAQ() {
  const [activeCategory, setActiveCategory] = React.useState("consultoria-empresarial");
  const [openQuestions, setOpenQuestions] = React.useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] sm:text-[15px] font-bold text-gray-900 mb-6 uppercase tracking-wide">
              FAQ
            </h2>
            <p className="text-[24px] sm:text-[30px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Perguntas mais Frequentes
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar com categorias */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-2">
              {Object.entries(faqs).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-gray-50 hover:text-blue-600",
                    activeCategory === key
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600"
                  )}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de perguntas e respostas */}
          <div className="lg:col-span-9">
            <div className="space-y-4">
              {faqs[activeCategory as keyof typeof faqs].questions.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(`${activeCategory}-${index}`)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-gray-900 font-medium">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gray-500 transition-transform duration-200",
                        openQuestions[`${activeCategory}-${index}`] ? "transform rotate-180" : ""
                      )}
                    />
                  </button>
                  
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      openQuestions[`${activeCategory}-${index}`] ? "max-h-96" : "max-h-0"
                    )}
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}