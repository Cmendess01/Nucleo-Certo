'use client'

import { 
  Heart, Target, Award, BarChart3, Building2, GraduationCap, 
  ClipboardCheck, DollarSign, ArrowRight, MapPin, Calendar, Globe,
  Compass, FileCheck, Calculator, Stethoscope, Lightbulb, Presentation,
  CheckCircle2, BookOpen, MessageCircle
} from 'lucide-react';
import { getMostReadArticles } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import { ScrollReveal } from './ScrollReveal';

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const stats = [
    { icon: Calendar, value: '15+', label: 'Anos de Excelência' },
    { icon: Building2, value: '3.000+', label: 'Leitos Atendidos' },
    { icon: MapPin, value: '10+', label: 'Estados Brasileiros' },
  ];

  const pillars = [
    { 
      icon: Compass, 
      title: 'Gestão Estratégica', 
      description: 'Planejamento institucional, KPIs e governança clínica de alta performance.'
    },
    { 
      icon: Award, 
      title: 'Qualidade & Acreditação', 
      description: 'ONA níveis 1, 2 e 3, ISO e padrões internacionais de excelência.'
    },
    { 
      icon: Calculator, 
      title: 'Finanças & Orçamento', 
      description: 'Gestão financeira, custos, auditoria e modelagem econômica.'
    },
    { 
      icon: Building2, 
      title: 'Setor Público', 
      description: 'Projetos estruturantes, sistemas municipais e editais públicos.'
    },
    { 
      icon: Lightbulb, 
      title: 'Liderança Médica', 
      description: 'Mentoria especializada e desenvolvimento de alta liderança.'
    },
    { 
      icon: Presentation, 
      title: 'Treinamentos', 
      description: 'Programas corporativos in company para equipes de saúde.'
    },
  ];

  const methodologies = [
    {
      name: 'NEO®',
      fullName: 'Núcleo Estratégico Organizacional',
      description: 'Metodologia proprietária de planejamento estratégico voltada para instituições de saúde',
      icon: Compass,
    },
    {
      name: 'MMGS®',
      fullName: 'Modelo de Maturidade em Gestão da Saúde',
      description: 'Framework de avaliação e evolução da maturidade gerencial em saúde',
      icon: BarChart3,
    },
    {
      name: 'MPCO®',
      fullName: 'Metodologia de Processos Clínicos Operacionais',
      description: 'Otimização e padronização de processos assistenciais e operacionais',
      icon: ClipboardCheck,
    },
  ];

  const differentials = [
    {
      icon: Award,
      title: 'Metodologias Proprietárias',
      description: 'NEO®, MMGS® e MPCO® baseados em padrões internacionais.'
    },
    {
      icon: Target,
      title: 'Pioneiros em Acreditação',
      description: 'Primeira consultoria ONA de Goiás com expertise consolidada.'
    },
    {
      icon: CheckCircle2,
      title: 'Resultados Mensuráveis',
      description: 'KPIs claros, entregas definidas e acompanhamento contínuo.'
    },
    {
      icon: Globe,
      title: 'Atuação Nacional e Internacional',
      description: 'Presença em mais de 10 estados e nos Estados Unidos.'
    },
  ];

  return (
    <div className="bg-white">
      
      {/* HERO - FUNDO ESCURO */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo à Esquerda */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                Transformamos Instituições de Saúde
              </h1>
              <p className="text-lg lg:text-xl text-[#E5E7EB] mb-8 leading-relaxed">
                15 anos de excelência em gestão estratégica, qualidade e acreditação, com metodologias proprietárias e resultados mensuráveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavigate('/contato')}
                  className="px-8 py-4 bg-[#C7A25B] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#A98845] transition-all"
                >
                  Solicitar Diagnóstico
                </button>
                <button
                  onClick={() => handleNavigate('/solucoes')}
                  className="px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  Nossas Soluções
                </button>
              </div>
            </div>
            
            {/* Logo à Direita */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/assets/1f404d50844828d5bec32af7f6daa3817ba7bd98.png"
                alt="Nucleo Core - Gestão Holística em Saúde"
                className="w-64 lg:w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS - FUNDO CLARO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="scroll-fade-up bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C7A25B] transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <div className="text-4xl font-semibold text-[#0D1B2A] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#4A4A4A]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT - FUNDO CLARO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-6">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">Quem Somos</span>
              </div>
              <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6 leading-tight">
                Pioneiros em Gestão Holística em Saúde
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-6 leading-relaxed">
                Há 15 anos transformamos instituições de saúde através de uma abordagem holística que integra gestão estratégica, qualidade, finanças e humanização.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p className="text-[#4A4A4A]">Primeira consultoria ONA de Goiás</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p className="text-[#4A4A4A]">Metodologias proprietárias registradas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-1" />
                  <p className="text-[#4A4A4A]">Atuação nacional e internacional</p>
                </div>
              </div>
              <button
                onClick={() => handleNavigate('/quem-somos')}
                className="inline-flex items-center gap-2 text-[#0D1B2A] font-semibold hover:text-[#2E3A45] transition-colors"
              >
                Conheça Nossa História
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                  <Heart className="w-8 h-8 text-[#C7A25B] mb-3" />
                  <h4 className="font-medium text-[#0D1B2A] mb-2">Humanização</h4>
                  <p className="text-sm text-[#4A4A4A]">Cuidado centrado no paciente</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                  <Target className="w-8 h-8 text-[#C7A25B] mb-3" />
                  <h4 className="font-medium text-[#0D1B2A] mb-2">Estratégia</h4>
                  <p className="text-sm text-[#4A4A4A]">Visão de longo prazo</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                  <BarChart3 className="w-8 h-8 text-[#C7A25B] mb-3" />
                  <h4 className="font-medium text-[#0D1B2A] mb-2">Dados</h4>
                  <p className="text-sm text-[#4A4A4A]">Decisões inteligentes</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C7A25B] transition-all">
                  <Award className="w-8 h-8 text-[#C7A25B] mb-3" />
                  <h4 className="font-medium text-[#0D1B2A] mb-2">Excelência</h4>
                  <p className="text-sm text-[#4A4A4A]">Padrões internacionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS - FUNDO CLARO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">Pilares de Atuação</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Expertise Multidisciplinar
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
              Seis pilares estratégicos que sustentam nossa abordagem holística
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="scroll-fade-up bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C7A25B] hover:shadow-lg transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-medium text-[#0D1B2A] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGIES - FUNDO ESCURO */}
      <section className="bg-[#0D1B2A] py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide text-white">Metodologias Exclusivas</span>
            </div>
            <h2 className="text-4xl font-semibold text-white mb-6">
              Frameworks Proprietários Registrados
            </h2>
            <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
              Desenvolvidas e registradas pela Nucleo Core
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-[#C7A25B] flex items-center justify-center mb-6">
                  <method.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C7A25B]/10 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#0D1B2A]">{method.name}</span>
                </div>
                <h3 className="text-xl font-medium text-[#0D1B2A] mb-3">
                  {method.fullName}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('/metodologias')}
              className="px-8 py-4 bg-[#C7A25B] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#A98845] transition-all"
            >
              Conheça Nossas Metodologias
            </button>
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS - FUNDO CLARO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">Diferenciais</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Por que Nucleo Core?
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
              Excelência reconhecida e resultados mensuráveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((diff, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mx-auto mb-6">
                  <diff.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-medium text-[#0D1B2A] mb-3">
                  {diff.title}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO - FUNDO CLARO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/assets/053cceb190e5715807931c0c7369521d233f8c72.png"
                  alt="Igor Bezerra - Consultor Sênior"
                  className="w-96 h-96 object-cover rounded-2xl border-4 border-[#C7A25B]"
                />
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-6">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">Liderança</span>
              </div>
              <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-3">
                Igor Bezerra
              </h2>
              <div className="text-xl text-[#0D1B2A] font-semibold mb-6">
                Consultor Sênior
              </div>
              <p className="text-lg text-[#4A4A4A] mb-8 leading-relaxed">
                Um dos mais respeitados consultores do país em acreditação e gestão estratégica em saúde. Com 15 anos de experiência, possui grande atuação em cargos estratégicos de hospitais e clínicas de médio e grande porte.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-[#C7A25B] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#0D1B2A] font-semibold uppercase mb-1">Autor</div>
                    <h4 className="text-lg font-medium text-[#0D1B2A] mb-1">O Guardião da Saúde</h4>
                    <p className="text-[#4A4A4A]">O gestor de alta performance em organizações de saúde</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleNavigate('/contato')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7A25B] text-white font-semibold rounded-lg hover:bg-[#A98845] transition-all"
              >
                Agende uma Conversa
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES E PARCEIROS - FUNDO CINZA */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">Clientes & Parceiros</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Instituições que Confiam em Nossa Expertise
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
              Transformando a gestão em saúde de organizações referência no Brasil
            </p>
          </div>

          {/* Carrossel Infinito */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* Primeiro conjunto de clientes */}
              <div className="flex gap-6 px-3">
                {[
                  'CDI Premium',
                  'Instituto Genesis',
                  'Instituto de Gestão e Humanização',
                  'Clínica Pró Implante',
                  'Instituto Partner',
                  'Pitter Johnson Advogados',
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
                    className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-8 py-6 hover:border-[#C7A25B] transition-all min-w-[280px]"
                  >
                    <p className="text-[#0D1B2A] font-medium text-center whitespace-nowrap">
                      {client}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Segundo conjunto (duplicado para loop infinito) */}
              <div className="flex gap-6 px-3">
                {[
                  'CDI Premium',
                  'Instituto Genesis',
                  'Instituto de Gestão e Humanização',
                  'Clínica Pró Implante',
                  'Instituto Partner',
                  'Pitter Johnson Advogados',
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
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-8 py-6 hover:border-[#C7A25B] transition-all min-w-[280px]"
                  >
                    <p className="text-[#0D1B2A] font-medium text-center whitespace-nowrap">
                      {client}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('/resultados')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7A25B] text-white font-semibold rounded-lg hover:bg-[#A98845] transition-all"
            >
              Ver Clientes
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ARTIGOS MAIS LIDOS - FUNDO CLARO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">Artigos Mais Lidos</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Conheça Nossas Publicações
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
              Insights e conhecimento especializado em gestão de saúde
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getMostReadArticles(4).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onNavigate={handleNavigate}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('/artigos')}
              className="px-8 py-4 bg-[#C7A25B] text-white font-semibold rounded-lg hover:bg-[#A98845] transition-all"
            >
              Ver Todos os Artigos
            </button>
          </div>
        </div>
      </section>

      {/* CTA FINAL - FUNDO DOURADO */}
      <section className="py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Pronto para Transformar sua Instituição?
          </h2>
          <p className="text-xl text-[#0D1B2A] mb-10 leading-relaxed">
            Agende um diagnóstico gratuito e descubra como nossas metodologias podem elevar sua gestão
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigate('/contato')}
              className="px-8 py-4 bg-[#0D1B2A] text-white font-semibold rounded-lg hover:bg-[#2E3A45] transition-all"
            >
              Solicitar Diagnóstico Gratuito
            </button>
            <a
              href="https://wa.me/5562981859003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0D1B2A] font-semibold rounded-lg border-2 border-[#0D1B2A] hover:bg-gray-50 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}