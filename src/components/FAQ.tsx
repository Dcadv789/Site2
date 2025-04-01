import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = {
  "consultoria-empresarial": {
    title: "Consultoria Empresarial",
    questions: [
      {
        question: "O que está incluído na consultoria empresarial da DC Advisors?",
        answer: "Nossa consultoria oferece análise detalhada do seu negócio, identificando oportunidades de melhoria, otimizando processos e desenvolvendo estratégias personalizadas para aumentar a lucratividade e eficiência operacional, dando também suporte para decisões estratégicas."
      },
      {
        question: "Para quais empresas a consultoria é indicada?",
        answer: "Atendemos desde pequenas empresas em crescimento até negócios consolidados que buscam otimizar sua gestão financeira."
      },
      {
        question: "Quanto tempo leva para ver resultados na empresa?",
        answer: "Depende da complexidade do negócio, mas muitas empresas começam a notar melhorias em 3 a 6 meses."
      },
      {
        question: "A consultoria é online ou presencial?",
        answer: "Nossa consultoria pode ser feita tanto online quanto presencial. A maioria dos clientes opta pelo atendimento online, pois é mais prático e eficiente. No entanto, dependendo do serviço e das necessidades do cliente, também realizamos atendimentos presenciais."
      },
      {
        question: "Quantas reuniões estão incluídas na consultoria?",
        answer: "O número de reuniões varia de acordo com o projeto. Alguns clientes precisam de encontros semanais, enquanto outros demandam reuniões mais espaçadas. Tudo é definido conforme a necessidade do negócio e o plano contratado."
      }
    ]
  },
  "bpo-financeiro": {
    title: "BPO Financeiro",
    questions: [
      {
        question: "O que é BPO Financeiro e como pode ajudar minha empresa?",
        answer: "BPO Financeiro é a terceirização dos processos financeiros da sua empresa, incluindo contas a pagar, contas a receber, conciliação bancária, gestão do fluxo de caixa e relatórios precisos."
      },
      {
        question: "Minha empresa perde o controle ao terceirizar as finanças?",
        answer: "Não! Pelo contrário, você ganha mais visibilidade e pode focar no crescimento do seu negócio."
      },
      {
        question: "Quanto tempo leva para implantar o BPO Financeiro na minha empresa?",
        answer: "O prazo de implantação depende do nível de organização atual das finanças da empresa. Em média, a estruturação inicial leva entre 30 e 60 dias, mas podemos adaptar conforme a necessidade do cliente."
      },
      {
        question: "Qual é a diferença entre a consultoria e o BPO Financeiro?",
        answer: "A consultoria orienta e traça estratégias, enquanto o BPO cuida da operação financeira do dia a dia."
      },
      {
        question: "Posso contratar apenas alguns serviços do BPO?",
        answer: "Sim, oferecemos planos personalizados para atender às necessidades específicas da sua empresa."
      }
    ]
  },
  "antecipacao-recebiveis": {
    title: "Antecipação de Recebíveis",
    questions: [
      {
        question: "O que é antecipação de recebíveis?",
        answer: "É a possibilidade de adiantar valores que sua empresa tem a receber, garantindo mais fluxo de caixa."
      },
      {
        question: "Quais tipos de recebíveis podem ser antecipados?",
        answer: "Atualmente, trabalhamos com antecipação de boletos e duplicatas, garantindo maior previsibilidade no fluxo de caixa da sua empresa."
      },
      {
        question: "A antecipação de recebíveis gera endividamento?",
        answer: "Não! Trata-se de um adiantamento de um valor que já é seu, sem necessidade de empréstimo."
      },
      {
        question: "Quais são as taxas cobradas na antecipação?",
        answer: "As taxas variam conforme o prazo e o perfil da empresa, mas buscamos sempre as melhores condições do mercado."
      },
      {
        question: "Como funciona a cobrança após a antecipação dos recebíveis?",
        answer: "A cobrança é feita diretamente no cliente final que emitiu o título. Ou seja, sua empresa recebe o valor antecipado e a responsabilidade pelo pagamento continua sendo do devedor original, sem afetar sua relação financeira com ele."
      }
    ]
  },
  "solucoes-digitais": {
    title: "Soluções Digitais",
    questions: [
      {
        question: "Quais soluções digitais a DC Advisors oferece?",
        answer: "Além de ferramentas financeiras, oferecemos serviços como certificado digital e automação de processos empresariais para otimizar a gestão das empresas."
      },
      {
        question: "Vocês oferecem plataformas para gestão financeira?",
        answer: "Ainda não temos um software ERP completo de gestão, mas o DC Hub atende algumas necessidades específicas, oferecendo ferramentas pontuais para ajudar na administração financeira."
      },
      {
        question: "As soluções digitais são adaptáveis para diferentes negócios?",
        answer: "Sim, nossos produtos podem ser personalizados de acordo com as necessidades do seu negócio."
      },
      {
        question: "Minha empresa pode integrar suas ferramentas com nosso sistema atual?",
        answer: "Em muitos casos, sim. Avaliamos a possibilidade de integração via API."
      },
      {
        question: "Quais são os benefícios de adotar soluções digitais na gestão financeira?",
        answer: "edução de erros, automação de tarefas repetitivas e melhor tomada de decisões baseada em dados."
      }
    ]
  },
  "hub-ferramentas": {
    title: "Hub de Ferramentas DC",
    questions: [
      {
        question: "O que é o Hub de Ferramentas DC?",
        answer: "O Hub é um conjunto de ferramentas digitais criadas para facilitar a rotina dos nossos clientes, oferecendo soluções práticas e diretas."
      },
      {
        question: "O Hub substitui as planilhas financeiras?",
        answer: "Nosso objetivo é oferecer uma experiência mais prática e intuitiva, mas algumas funcionalidades podem complementar o uso de planilhas para quem ainda prefere esse modelo."
      },
      {
        question: "Posso acessar as ferramentas do Hub pelo celular?",
        answer: "Sim, o acesso pelo celular é possível, mas recomendamos o uso no computador para garantir o funcionamento completo de todas as funcionalidades."
      },
      {
        question: "Existe um plano gratuito para testar o Hub?",
        answer: "Oferecemos um período de teste gratuito para que você conheça as funcionalidades antes de contratar."
      },
      {
        question: "Quais integrações estão disponíveis no Hub?",
        answer: "Atualmente, o Hub não possui integrações nativas. Ele oferece ferramentas diretas e pontuais para auxiliar nossos clientes sem necessidade de integrações complexas."
      }
    ]
  },
  "mentoria-treinamentos": {
    title: "Mentoria e Treinamentos",
    questions: [
      {
        question: "Como funciona a mentoria financeira da DC Advisors?",
        answer: "Nossa mentoria ajuda empreendedores e indivíduos a estruturarem suas finanças e tomarem decisões estratégicas."
      },
      {
        question: "Os treinamentos são presenciais ou online?",
        answer: "Atualmente, nossos treinamentos são 100% online para o público geral. No entanto, para empresas, oferecemos treinamentos presenciais personalizados, capacitando equipes de forma prática e estratégica. Esses treinamentos podem ser adaptados às necessidades da empresa, abordando temas como gestão financeira, planejamento estratégico e controle de custos, sempre com foco em resultados reais."
      },
      {
        question: "Para quem é indicado o programa de mentoria?",
        answer: "Para empresários, autônomos e qualquer pessoa que deseja melhorar sua gestão financeira pessoal ou empresarial."
      },
      {
        question: "A mentoria inclui acompanhamento individual?",
        answer: "Sim, oferecemos sessões personalizadas para atender às necessidades específicas de cada cliente."
      },
      {
        question: "Os treinamentos são certificados?",
        answer: "Sim! Emitimos certificados de participação para todos os treinamentos concluídos."
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