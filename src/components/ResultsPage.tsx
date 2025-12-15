'use client'

import { 
  Award, TrendingUp, Target, CheckCircle2, Building2, 
  Hospital, BarChart3, Users, Shield, Sparkles, ArrowRight
} from 'lucide-react';
import { useEffect } from 'react';

interface ResultsPageProps {
  onNavigate?: (path: string) => void;
}

export function ResultsPage({ onNavigate }: ResultsPageProps) {
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const cases = [
    {
      icon: Hospital,
      type: 'Hospital Público',
      title: 'Acreditação ONA Nível 3',
      challenge: 'Hospital público de grande porte precisava alcançar o nível máximo de acreditação ONA.',
      solution: 'Implementação completa das metodologias NEO® e MPCO® com capacitação de equipes.',
      results: [
        'Acreditação ONA Nível 3 alcançada',
        'Redução de 40% em eventos adversos',
        'Melhoria de 35% na satisfação do paciente',
        'Processos 100% padronizados',
      ],
    },
    {
      icon: Building2,
      type: 'Hospital Privado',
      title: 'Reestruturação Estratégica',
      challenge: 'Instituição privada com baixa performance financeira e operacional.',
      solution: 'Planejamento estratégico NEO® e consultoria financeira integrada.',
      results: [
        'Aumento de 28% na receita',
        'Redução de 22% nos custos operacionais',
        'EBITDA positivo em 12 meses',
        'Turnover reduzido em 35%',
      ],
    },
    {
      icon: Award,
      type: 'Clínica Especializada',
      title: 'Otimização e Crescimento',
      challenge: 'Clínica de médio porte buscava crescimento sustentável e eficiência.',
      solution: 'Consultoria completa em gestão estratégica e processos clínicos.',
      results: [
        'Crescimento de 45% no faturamento',
        'Otimização do fluxo de atendimento',
        'NPS aumentado para 92',
        'Expansão para 2 novas unidades',
      ],
    },
    {
      icon: Building2,
      type: 'Secretaria Municipal',
      title: 'Reestruturação do Sistema',
      challenge: 'Sistema municipal de saúde com baixa eficiência e conformidade.',
      solution: 'Projeto estruturante de reestruturação e capacitação de gestores.',
      results: [
        'Sistema de gestão implantado',
        '100% de conformidade regulatória',
        'Capacitação de 120 profissionais',
        'Melhoria de 50% nos indicadores',
      ],
    },
  ];

  const metrics = [
    { icon: Award, value: '50+', label: 'Projetos de Acreditação' },
    { icon: TrendingUp, value: '85%', label: 'Taxa de Sucesso' },
    { icon: Building2, value: '3.000+', label: 'Leitos Impactados' },
    { icon: Target, value: '100%', label: 'Satisfação dos Clientes' },
  ];

  const testimonials = [
    {
      quote: 'A Nucleo Core transformou completamente nossa gestão. Conseguimos a acreditação ONA Nível 3 e melhoramos todos os nossos indicadores.',
      author: 'Diretor Geral',
      institution: 'Hospital Público de Grande Porte',
    },
    {
      quote: 'O planejamento estratégico desenvolvido pela equipe nos deu clareza e direcionamento. Os resultados financeiros superaram nossas expectativas.',
      author: 'CEO',
      institution: 'Hospital Privado',
    },
    {
      quote: 'Profissionalismo, expertise e comprometimento. A consultoria foi fundamental para o crescimento da nossa clínica.',
      author: 'Diretor Médico',
      institution: 'Clínica Especializada',
    },
  ];

  return (
    <div className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Resultados Comprovados
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Mais de 15 anos transformando instituições de saúde com resultados mensuráveis
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <div className="text-4xl font-semibold text-[#0D1B2A] mb-2">
                  {metric.value}
                </div>
                <div className="text-base text-gray-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Casos de Sucesso</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Transformações Reais
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos que entregamos com excelência
            </p>
          </div>

          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-[#C7A25B] flex items-center justify-center">
                      <caseItem.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C7A25B]/10 mb-3">
                      <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">{caseItem.type}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4">
                      {caseItem.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-[#0D1B2A] mb-2 uppercase tracking-wide">Desafio</h4>
                        <p className="text-gray-600">{caseItem.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#0D1B2A] mb-2 uppercase tracking-wide">Solução</h4>
                        <p className="text-gray-600">{caseItem.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-[#0D1B2A] mb-3 uppercase tracking-wide">Resultados</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {caseItem.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Depoimentos</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Feedback de quem confia em nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#C7A25B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-medium text-[#0D1B2A]">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES E PARCEIROS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Clientes & Parceiros</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Instituições que Confiam em Nossa Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transformando a gestão em saúde de organizações referência no Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'CDI Premium',
              'Instituto Genesis',
              'Instituto de Gestão e Humanização',
              'Clínica Pró Implante',
              'Instituto Partner',
              'Pitter Johnson Advogados Associados',
              'Clínica Vivenza',
              'Hospital Blue Macaw',
              'Hospital Amparo',
              'Instituto do Fígado',
              'Clínica Dr Rogério Penna',
              'Hospital Serra da Mesa',
              'Innmed Gestão em Saúde',
              'Indústria Mecat',
              'Instituto Curados para Curar',
              'Clínica Curados para Curar',
              'ATCARE',
              'Laboratório Saúde',
              'Instituto Essência',
            ].map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg px-6 py-8 text-center hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <p className="text-[#0D1B2A] font-medium">
                  {client}
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
            Seja Nosso Próximo Caso de Sucesso
          </h2>
          <p className="text-xl text-[#1F2937] mb-10 leading-relaxed">
            Transforme sua instituição com resultados comprovados
          </p>
          <button
            onClick={() => handleNavigate('/contato')}
            className="px-8 py-4 bg-[#0D1B2A] text-white text-lg font-medium rounded-lg hover:bg-[#1F2937] transition-all"
          >
            Solicitar Diagnóstico
          </button>
        </div>
      </section>
    </div>
  );
}