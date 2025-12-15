'use client'

import { 
  Compass, BarChart3, ClipboardCheck, Target, TrendingUp, 
  CheckCircle2, ArrowRight, Award, Shield, Users
} from 'lucide-react';

interface MethodologiesPageProps {
  onNavigate?: (path: string) => void;
}

export function MethodologiesPage({ onNavigate }: MethodologiesPageProps) {
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const methodologies = [
    {
      name: 'NEO®',
      fullName: 'Núcleo Estratégico Organizacional',
      icon: Compass,
      description: 'Metodologia proprietária de planejamento estratégico voltada para instituições de saúde, integrando diagnóstico, objetivos e plano de ação estruturado.',
      phases: [
        { title: 'Diagnóstico Institucional', description: 'Análise profunda da situação atual da organização' },
        { title: 'Definição Estratégica', description: 'Construção de missão, visão, valores e objetivos' },
        { title: 'Plano de Ação', description: 'Estruturação de iniciativas e projetos estratégicos' },
        { title: 'Implementação', description: 'Execução monitorada com KPIs e marcos' },
      ],
      benefits: [
        'Alinhamento estratégico completo',
        'Visão de longo prazo clara',
        'Engajamento das lideranças',
        'Decisões baseadas em dados',
        'Crescimento sustentável',
      ],
    },
    {
      name: 'MMGS®',
      fullName: 'Modelo de Maturidade em Gestão da Saúde',
      icon: BarChart3,
      description: 'Framework de avaliação e evolução da maturidade gerencial em saúde, baseado em níveis progressivos de desenvolvimento organizacional.',
      phases: [
        { title: 'Avaliação Inicial', description: 'Diagnóstico do nível de maturidade atual' },
        { title: 'Identificação de Gaps', description: 'Análise de lacunas e oportunidades' },
        { title: 'Roadmap de Evolução', description: 'Plano estruturado de desenvolvimento' },
        { title: 'Acompanhamento', description: 'Monitoramento contínuo da evolução' },
      ],
      benefits: [
        'Visão clara do estágio atual',
        'Benchmarking setorial',
        'Plano de evolução estruturado',
        'Priorização de investimentos',
        'Melhoria contínua mensurável',
      ],
    },
    {
      name: 'MPCO®',
      fullName: 'Metodologia de Processos Clínicos Operacionais',
      icon: ClipboardCheck,
      description: 'Otimização e padronização de processos assistenciais e operacionais, garantindo eficiência, segurança e qualidade no cuidado ao paciente.',
      phases: [
        { title: 'Mapeamento', description: 'Identificação e documentação dos processos atuais' },
        { title: 'Análise Crítica', description: 'Avaliação de eficiência e pontos de melhoria' },
        { title: 'Redesenho', description: 'Otimização e padronização dos fluxos' },
        { title: 'Implantação', description: 'Implementação e capacitação das equipes' },
      ],
      benefits: [
        'Processos padronizados e eficientes',
        'Redução de desperdícios',
        'Segurança do paciente ampliada',
        'Conformidade regulatória',
        'Melhoria da experiência',
      ],
    },
  ];

  const differentials = [
    { icon: Award, title: 'Registro de Marca', description: 'Metodologias proprietárias registradas' },
    { icon: Shield, title: 'Base Científica', description: 'Fundamentadas em padrões internacionais' },
    { icon: Target, title: 'Resultados Comprovados', description: 'Aplicadas em mais de 3.000 leitos' },
    { icon: Users, title: 'Equipe Especializada', description: 'Consultores certificados e experientes' },
  ];

  return (
    <div className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Metodologias Proprietárias
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Frameworks exclusivos registrados e comprovados pelo mercado
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
            <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Exclusividade Nucleo Core</span>
          </div>
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Metodologias Desenvolvidas e Registradas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ao longo de 15 anos de atuação, desenvolvemos três metodologias proprietárias que integram as melhores práticas internacionais de gestão à realidade do setor de saúde brasileiro. Todas são registradas e comprovadas em mais de 3.000 leitos atendidos.
          </p>
        </div>
      </section>

      {/* METHODOLOGIES */}
      {methodologies.map((method, index) => (
        <section 
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left - Info */}
              <div>
                <div className="w-16 h-16 rounded-lg bg-[#C7A25B] flex items-center justify-center mb-6">
                  <method.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C7A25B]/10 mb-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">{method.name}</span>
                </div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  {method.fullName}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {method.description}
                </p>

                {/* Benefits */}
                <h3 className="text-xl font-medium text-[#0D1B2A] mb-4">Benefícios</h3>
                <div className="space-y-3">
                  {method.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Phases */}
              <div>
                <h3 className="text-xl font-medium text-[#0D1B2A] mb-6">Fases da Metodologia</h3>
                <div className="space-y-4">
                  {method.phases.map((phase, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A25B] flex items-center justify-center">
                          <span className="text-white font-medium text-sm">{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-[#0D1B2A] mb-1">
                            {phase.title}
                          </h4>
                          <p className="text-gray-600">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* DIFFERENTIALS */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-sm font-medium text-white uppercase tracking-wide">Diferenciais</span>
            </div>
            <h2 className="text-4xl font-semibold text-white mb-6">
              Por que Nossas Metodologias?
            </h2>
            <p className="text-lg text-[#E5E7EB] max-w-3xl mx-auto">
              Exclusividade, ciência e resultados comprovados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((diff, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-lg bg-[#C7A25B] flex items-center justify-center mx-auto mb-4">
                  <diff.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-[#E5E7EB]">
                  {diff.description}
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
            Aplique Nossas Metodologias
          </h2>
          <p className="text-xl text-[#1F2937] mb-10 leading-relaxed">
            Transforme sua instituição com frameworks comprovados
          </p>
          <button
            onClick={() => handleNavigate('/contato')}
            className="px-8 py-4 bg-[#0D1B2A] text-white text-lg font-medium rounded-lg hover:bg-[#1F2937] transition-all"
          >
            Fale com Nossos Especialistas
          </button>
        </div>
      </section>
    </div>
  );
}