'use client'

import { 
  Target, Award, Shield, Sparkles, Heart, Users, ArrowRight, CheckCircle2,
  Compass, FileCheck, Calculator, LandPlot, Stethoscope, Lightbulb, Presentation, Trophy
} from 'lucide-react';
import Link from 'next/link';

export function AboutPage() {
  const timeline = [
    { year: '2010', title: 'Fundação', description: 'Nucleo Core é fundada com foco em qualidade assistencial e acreditação ONA' },
    { year: '2015', title: 'Expansão Holística', description: 'Ampliação do escopo para gestão holística em saúde' },
    { year: '2020', title: 'Presença Nacional', description: 'Consolidação da atuação em mais de 10 estados brasileiros' },
    { year: '2023', title: 'Expansão Internacional', description: 'Primeira atuação internacional em Massachusetts, EUA' },
    { year: '2025', title: '15 Anos de Excelência', description: 'Mais de 3.000 leitos atendidos e reconhecimento nacional' },
  ];

  const values = [
    { icon: Shield, title: 'Ética', description: 'Integridade e transparência em todas as relações' },
    { icon: Sparkles, title: 'Agilidade', description: 'Respostas rápidas e eficientes às demandas' },
    { icon: Award, title: 'Inovação', description: 'Busca constante por soluções pioneiras' },
    { icon: Target, title: 'Compromisso com Resultados', description: 'Foco em entrega de valor mensurável' },
    { icon: Heart, title: 'Segurança do Paciente', description: 'Cuidado centrado e qualidade assistencial' },
    { icon: Users, title: 'Valorização das Pessoas', description: 'Desenvolvimento de equipes e lideranças' },
  ];

  const pillars = [
    { icon: Compass, title: 'Gestão Estratégica', description: 'Planejamento institucional, KPIs e governança clínica.' },
    { icon: Award, title: 'Qualidade & Acreditação', description: 'ONA níveis 1, 2 e 3, ISO e padrões internacionais.' },
    { icon: FileCheck, title: 'Regulação e Processos', description: 'Conformidade regulatória VISA, COREN, CRM, CNES.' },
    { icon: Calculator, title: 'Finanças & Orçamento', description: 'Gestão financeira, custos e auditoria de contas.' },
    { icon: LandPlot, title: 'Setor Público', description: 'Projetos estruturantes e gestão municipal.' },
    { icon: Stethoscope, title: 'Otimização Clínica', description: 'Aumento de lucratividade e eficiência operacional.' },
    { icon: Lightbulb, title: 'Liderança Médica', description: 'Mentoria especializada e desenvolvimento.' },
    { icon: Presentation, title: 'Treinamentos', description: 'Programas corporativos in company.' },
  ];

  return (
    <div className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Quem Somos
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Pioneiros em gestão holística em saúde há 15 anos
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">Nossa História</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              15 Anos Transformando a Saúde
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
              Desde 2010, construímos uma trajetória de excelência e inovação
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-3xl font-semibold text-[#0D1B2A]">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-px h-full bg-gray-200 mt-2" />
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-medium text-[#0D1B2A] mb-2">{item.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO E PROPÓSITO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Missão */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-[#C7A25B] flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-6">
                Missão
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
                Transformar instituições de saúde por meio de uma gestão holística, estratégica e humanizada, elevando padrões de qualidade e sustentabilidade.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-[#C7A25B] flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-6">
                Visão
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
                Ser referência nacional em consultoria integral em saúde, reconhecida pela excelência e inovação em resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Nossos Valores</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Princípios que Nos Guiam
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Valores fundamentais que orientam todas as nossas ações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-medium text-[#0D1B2A] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Pilares de Atuação</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Nossa Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oito pilares estratégicos que sustentam nossa abordagem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#C7A25B] transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <h3 className="text-base font-medium text-[#0D1B2A] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Liderança</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Nossa Liderança
            </h2>
          </div>

          {/* Placeholder para foto do casal */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-2xl h-96 bg-gradient-to-br from-[#C7A25B] to-[#A98845] rounded-2xl border-4 border-[#C7A25B] flex items-center justify-center">
              <Users className="w-32 h-32 text-white" />
            </div>
          </div>

          {/* Grid de Líderes */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Oslane Bezerra - CEO */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C7A25B] transition-all">
              <h3 className="text-3xl font-semibold text-[#0D1B2A] mb-2">
                Oslane Bezerra
              </h3>
              <div className="text-xl text-[#C7A25B] font-medium mb-6">
                CEO
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p>Formada em Direito pela Universidade Universo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p>Pós-graduanda em Gestão de Negócios de Saúde pela Fundação Dom Cabral - Melhor escola de negócios da América Latina</p>
                </div>
              </div>
            </div>

            {/* Igor Bezerra - Consultor Sênior */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C7A25B] transition-all">
              <h3 className="text-3xl font-semibold text-[#0D1B2A] mb-2">
                Igor Bezerra
              </h3>
              <div className="text-xl text-[#C7A25B] font-medium mb-6">
                Consultor Sênior
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p>Programa de Desenvolvimento de Dirigentes - PDD pela Fundação Dom Cabral</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p>Avaliador ONA - Organização Nacional de Acreditação</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p>Quality Improvement and Patient Safety - Institute for Health Care Improvement - Boston, Massachusetts</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p>Especialização em Auditoria e Controle Gerencial pela UFG</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p>Graduação em Direito pela Universidade Paulista</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7A25B] text-white font-medium rounded-lg hover:bg-[#A98845] transition-all text-lg"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* HONRARIAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Reconhecimento</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Honrarias Recebidas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reconhecimentos institucionais pela excelência em gestão e contribuição à saúde
            </p>
          </div>

          {/* Câmara Municipal de Goiânia */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-semibold text-[#0D1B2A]">
                Câmara Municipal de Goiânia
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Diploma de Honra ao Mérito</p>
                    <p className="text-sm text-gray-600">Sessão Especial em Comemoração ao Dia da Enfermagem (2017)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Homenagem Especial</p>
                    <p className="text-sm text-gray-600">Sessão Especial em Homenagem ao Dia do Assistente Social e do Profissional da Saúde (2019)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Homenagem Especial</p>
                    <p className="text-sm text-gray-600">Sessão Especial em Celebração ao Dia Nacional da Enfermagem (2019)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Homenagem Especial</p>
                    <p className="text-sm text-gray-600">Sessão Especial em Homenagem aos Enfermeiros e Técnicos de Enfermagem (2024)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Diploma de Honra ao Mérito</p>
                    <p className="text-sm text-gray-600">Mulheres Empreendedoras (2024)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Homenagem Especial</p>
                    <p className="text-sm text-gray-600">Sessão Especial em Homenagem aos Talentos na Área da Saúde (2024)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Homenagem Especial</p>
                    <p className="text-sm text-gray-600">Sessão Especial em Homenagem às Mulheres Admiráveis que Engrandecem Goiás (2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assembleia Legislativa de Goiás */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-semibold text-[#0D1B2A]">
                Assembleia Legislativa de Goiás
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Comenda do Mérito em Direitos Humanos e Cidadania</p>
                    <p className="text-sm text-gray-600 mb-2">Dom Tomás Balduíno</p>
                    <p className="text-xs text-[#C7A25B] font-medium">A maior comenda de direitos humanos de Goiás</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Mérito Legislativo</p>
                    <p className="text-sm text-gray-600">Homenagem aos Advogados e à Advocacia Docente (2025)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#0D1B2A] mb-1">Homenagem ao Empreendedorismo Feminino</p>
                    <p className="text-sm text-gray-600">(2025)</p>
                  </div>
                </div>
              </div>
            </div>
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
            Agende uma conversa estratégica com nossos especialistas
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-[#0D1B2A] text-white text-lg font-medium rounded-lg hover:bg-[#1F2937] transition-all"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}