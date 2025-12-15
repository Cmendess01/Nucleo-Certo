'use client'

import { 
  Award, BarChart3, DollarSign, Building2, ClipboardCheck, 
  ArrowRight, CheckCircle2, TrendingUp, Users, GraduationCap,
  FileCheck, Calculator, Building, Stethoscope, Lightbulb, Presentation,
  Shield, Scale, Globe, Package, DollarSign as Revenue, Heart, Sparkles
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate?: (path: string) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const solutions = [
    {
      icon: Globe,
      title: 'Acreditação Nacional e Internacional',
      description: 'Assessoria completa em processos de acreditação nacional e internacional, contemplando ONA, Qmentum, ACSA, JCI e a nova ISO da saúde.',
      benefits: [
        'ONA - Organização Nacional de Acreditação (Níveis 1, 2 e 3)',
        'Qmentum - Acreditação Canadá',
        'ACSA - Australian Council on Healthcare Standards',
        'JCI - Joint Commission International',
        'ISO 9001 da Saúde',
        'Preparação completa e acompanhamento de auditorias',
      ],
    },
    {
      icon: BarChart3,
      title: 'Gestão do Planejamento Estratégico',
      description: 'Planejamento institucional estratégico com metodologias proprietárias e governança clínica.',
      benefits: [
        'Planejamento Estratégico Institucional',
        'Construção e gestão de KPIs',
        'Governança clínica e corporativa',
        'Reestruturação de processos',
        'Balanced Scorecard',
        'Metodologia NEO® - Núcleo Estratégico Organizacional',
      ],
    },
    {
      icon: Package,
      title: 'Gestão de Suprimentos e Cadeia Logística',
      description: 'Otimização da cadeia de suprimentos e gestão logística hospitalar.',
      benefits: [
        'Planejamento e controle de estoque',
        'Gestão de fornecedores',
        'Padronização de materiais e medicamentos',
        'Otimização de custos logísticos',
        'Sistemas de rastreabilidade',
        'Compliance regulatório',
      ],
    },
    {
      icon: Revenue,
      title: 'Gestão de Faturamento e Receita Hospitalar',
      description: 'Gestão completa do ciclo de faturamento e maximização de receita.',
      benefits: [
        'Auditoria de contas médicas',
        'Otimização do faturamento',
        'Gestão de glosas e recursos',
        'Modelagem de tabelas e contratos',
        'Compliance com operadoras',
        'Aumento de receita operacional',
      ],
    },
    {
      icon: Users,
      title: 'Gestão de Pessoas, Treinamento e Desenvolvimento',
      description: 'Desenvolvimento de equipes e gestão estratégica de recursos humanos.',
      benefits: [
        'Avaliação de desempenho e competências',
        'Programas de capacitação in company',
        'Desenvolvimento de lideranças',
        'Clima organizacional',
        'Plano de carreira e sucessão',
        'Gestão de talentos',
      ],
    },
    {
      icon: Heart,
      title: 'Gestão do Cuidado e Segurança Assistencial',
      description: 'Gestão do cuidado, experiência do paciente e segurança assistencial.',
      benefits: [
        'Protocolos assistenciais e clínicos',
        'Segurança do paciente',
        'Experiência e satisfação do paciente',
        'Indicadores de qualidade assistencial',
        'Gestão de eventos adversos',
        'Humanização do cuidado',
      ],
    },
    {
      icon: Calculator,
      title: 'Gestão Financeira e Controladoria Estratégica',
      description: 'Gestão financeira completa, custos e controladoria estratégica.',
      benefits: [
        'Planejamento orçamentário (OBZ)',
        'Gestão de custos e despesas',
        'Controles financeiros e fluxo de caixa',
        'Modelagem de cenários econômicos',
        'Análise de viabilidade',
        'Indicadores financeiros e DRE',
      ],
    },
    {
      icon: Scale,
      title: 'Direito Médico - Preventivo e Contencioso',
      description: 'Consultoria jurídica especializada em direito médico e da saúde.',
      benefits: [
        'Assessoria jurídica preventiva',
        'Defesa em processos contenciosos',
        'Compliance e gestão de riscos jurídicos',
        'Contratos e relações médico-paciente',
        'Análise de responsabilidade civil',
        'Consultoria regulatória',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Fusões, Aquisições e Valuation',
      description: 'Consultoria especializada em M&A para o setor de saúde.',
      benefits: [
        'Valuation de instituições de saúde',
        'Due diligence completa',
        'Estruturação de fusões e aquisições',
        'Análise de viabilidade econômica',
        'Integração pós-aquisição',
      ],
    },
    {
      icon: Building,
      title: 'Projetos para Setor Público',
      description: 'Elaboração de projetos estruturantes para municípios.',
      benefits: [
        'Projetos de reestruturação de sistemas municipais',
        'Elaboração de editais públicos',
        'Gestão de parcerias (Lei 13.019/2014)',
        'Planos municipais de saúde',
        'Conformidade regulatória',
      ],
    },
    {
      icon: Shield,
      title: 'CEBAS - Certificação de Entidade Beneficente',
      description: 'Assessoria completa para obtenção e manutenção do CEBAS.',
      benefits: [
        'Diagnóstico técnico-jurídico completo',
        'Adequação institucional e estatutária',
        'Estruturação do dossiê (Saúde, Educação ou Assistência Social)',
        'Acompanhamento e defesa técnica processual',
        'Manutenção e renovação da certificação',
        'Compliance e controle interno',
      ],
    },
  ];

  const segments = [
    { icon: Building2, title: 'Hospitais Públicos', description: 'Gestão e qualidade para instituições públicas' },
    { icon: Building2, title: 'Hospitais Privados', description: 'Performance e certificações para setor privado' },
    { icon: Stethoscope, title: 'Clínicas e Consultórios', description: 'Otimização e lucratividade' },
    { icon: Building, title: 'Secretarias de Saúde', description: 'Projetos estruturantes municipais' },
    { icon: Award, title: 'Operadoras de Saúde', description: 'Gestão estratégica e conformidade' },
    { icon: GraduationCap, title: 'Organizações do Terceiro Setor', description: 'Gestão e governança' },
  ];

  return (
    <div className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Soluções & Serviços
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Expertise completa em gestão de saúde para todas as suas necessidades
          </p>
        </div>
      </section>

      {/* DIFERENCIAL NUCLEOCORE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Diferencial</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Diferencial NucleoCore
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border-2 border-[#C7A25B] rounded-2xl p-10 lg:p-12 text-center">
              <Sparkles className="w-16 h-16 text-[#C7A25B] mx-auto mb-6" strokeWidth={2} />
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Nossa equipe combina expertise em finanças, gestão de saúde e consultoria estratégica, oferecendo soluções integradas que transformam transações complexas em oportunidades seguras e rentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Soluções</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Nossas Soluções
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de soluções para o setor de saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-medium text-[#0D1B2A] mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Vamos Transformar Sua Instituição?
          </h2>
          <p className="text-xl text-[#1F2937] mb-10 leading-relaxed">
            Conheça nossas soluções personalizadas para seu negócio
          </p>
          <button
            onClick={() => handleNavigate('/contato')}
            className="px-8 py-4 bg-[#0D1B2A] text-white text-lg font-medium rounded-lg hover:bg-[#1F2937] transition-all"
          >
            Solicitar Proposta
          </button>
        </div>
      </section>
    </div>
  );
}