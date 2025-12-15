export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Como a Acreditação Hospitalar Transforma a Gestão da Qualidade',
    excerpt: 'Entenda como processos de acreditação ONA, JCI e Qmentum elevam os padrões de segurança e qualidade assistencial nas instituições de saúde.',
    content: `
      <p>A acreditação hospitalar é um processo voluntário de avaliação que certifica a qualidade e segurança dos serviços de saúde. No Brasil, as principais certificadoras são a ONA (Organização Nacional de Acreditação), a JCI (Joint Commission International) e a Qmentum International, cada uma com metodologias próprias, mas com objetivos convergentes.</p>

      <h2>O Que é Acreditação Hospitalar?</h2>
      <p>A acreditação é um sistema de avaliação externa que examina processos, estruturas e resultados da instituição de saúde. Diferente de fiscalizações regulatórias, a acreditação é voluntária e busca a melhoria contínua através de padrões internacionais de excelência.</p>

      <h2>Principais Benefícios da Acreditação</h2>
      <ul>
        <li><strong>Segurança do Paciente:</strong> Redução de eventos adversos e cultura de notificação</li>
        <li><strong>Padronização de Processos:</strong> Protocolos clínicos e assistenciais baseados em evidências</li>
        <li><strong>Gestão da Qualidade:</strong> Indicadores e monitoramento sistemático de desempenho</li>
        <li><strong>Engajamento das Equipes:</strong> Cultura organizacional voltada para excelência</li>
        <li><strong>Competitividade:</strong> Diferencial no mercado e acesso a contratos premium</li>
      </ul>

      <h2>Níveis de Acreditação ONA</h2>
      <p>A ONA possui três níveis de certificação que representam a evolução da maturidade institucional:</p>
      <ul>
        <li><strong>Nível 1 - Acreditado:</strong> Atende aos requisitos de segurança do paciente e estrutura organizacional</li>
        <li><strong>Nível 2 - Acreditado Pleno:</strong> Demonstra gestão integrada e processos padronizados</li>
        <li><strong>Nível 3 - Acreditado com Excelência:</strong> Evidencia cultura de melhoria contínua e inovação</li>
      </ul>

      <h2>O Papel da Consultoria no Processo</h2>
      <p>A Nucleo Core utiliza metodologias proprietárias como o MMGS® (Modelo de Maturidade em Gestão de Saúde) para preparar instituições para a acreditação. Nossa abordagem inclui diagnóstico inicial, planejamento estratégico, implementação de melhorias e acompanhamento até a certificação.</p>

      <h2>Conclusão</h2>
      <p>A acreditação hospitalar vai além de um selo de qualidade. É um processo transformador que eleva o patamar de toda a organização, criando uma cultura de excelência que beneficia pacientes, colaboradores e a sustentabilidade da instituição.</p>
    `,
    image: 'https://images.unsplash.com/photo-1619975102725-597d006b1a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2NTM4NTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Qualidade e Acreditação',
    author: 'Oslane Bezerra',
    date: '10 Dez 2024',
    readTime: '8 min',
    views: 3245,
  },
  {
    id: '2',
    title: '5 Indicadores Essenciais para Gestão Financeira em Saúde',
    excerpt: 'Conheça os principais KPIs financeiros que todo gestor de instituição de saúde precisa acompanhar para garantir sustentabilidade.',
    content: `
      <p>A gestão financeira eficiente é fundamental para a sustentabilidade das instituições de saúde. Em um setor com margens cada vez mais apertadas e custos crescentes, o acompanhamento de indicadores-chave de performance (KPIs) se torna essencial para a tomada de decisão estratégica.</p>

      <h2>1. Taxa de Ocupação</h2>
      <p>Este indicador mede o percentual de leitos ocupados em relação ao total disponível. Uma taxa ideal varia entre 75% e 85%, equilibrando eficiência operacional e capacidade de atendimento de emergências.</p>
      <p><strong>Fórmula:</strong> (Leitos Ocupados / Total de Leitos) × 100</p>

      <h2>2. Ticket Médio por Paciente</h2>
      <p>Representa a receita média gerada por paciente atendido. É fundamental segmentar por fonte pagadora (particular, convênio, SUS) para análises precisas.</p>
      <p><strong>Fórmula:</strong> Receita Total / Número de Pacientes</p>

      <h2>3. Glosa e Perdas</h2>
      <p>Monitora os valores não pagos por operadoras de saúde devido a inconsistências em documentação ou procedimentos. Uma taxa acima de 5% indica necessidade de revisão nos processos de faturamento.</p>
      <p><strong>Fórmula:</strong> (Valor Glosado / Valor Faturado) × 100</p>

      <h2>4. Prazo Médio de Recebimento (PMR)</h2>
      <p>Indica quantos dias em média a instituição leva para receber seus créditos. Fundamental para gestão de fluxo de caixa.</p>
      <p><strong>Meta Recomendada:</strong> 45-60 dias</p>

      <h2>5. EBITDA e Margem Operacional</h2>
      <p>O EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) é o lucro operacional antes dos encargos financeiros. A margem operacional deve ser monitorada mensalmente para garantir a sustentabilidade.</p>

      <h2>A Importância do Acompanhamento Contínuo</h2>
      <p>Na Nucleo Core, utilizamos a metodologia MPCO® (Modelo de Performance e Controle Operacional) para implementar dashboards gerenciais que permitem o acompanhamento em tempo real desses indicadores, facilitando a tomada de decisão e correções de rota imediatas.</p>

      <h2>Conclusão</h2>
      <p>O domínio desses indicadores permite que gestores antecipem problemas, identifiquem oportunidades e mantenham a saúde financeira da instituição mesmo em cenários desafiadores.</p>
    `,
    image: 'https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZmluYW5jZXxlbnwxfHx8fDE3NjUzODU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gestão Financeira',
    author: 'Igor Bezerra',
    date: '08 Dez 2024',
    readTime: '6 min',
    views: 2890,
  },
  {
    id: '3',
    title: 'Gestão de Pessoas: O Diferencial Competitivo em Saúde',
    excerpt: 'Descubra estratégias eficazes para retenção de talentos, desenvolvimento de equipes e cultura organizacional em instituições de saúde.',
    content: `
      <p>O capital humano é o ativo mais valioso de qualquer instituição de saúde. Em um setor caracterizado por alta rotatividade, escassez de profissionais qualificados e pressão por resultados, a gestão estratégica de pessoas se torna um diferencial competitivo fundamental.</p>

      <h2>O Desafio da Rotatividade</h2>
      <p>O setor de saúde apresenta taxas de turnover superiores a 30% ao ano em alguns segmentos. Essa rotatividade gera custos diretos (recrutamento, seleção, treinamento) e indiretos (perda de conhecimento, queda na qualidade assistencial).</p>

      <h2>Estratégias de Retenção</h2>
      <ul>
        <li><strong>Plano de Carreira Estruturado:</strong> Criar trilhas claras de desenvolvimento profissional</li>
        <li><strong>Reconhecimento e Valorização:</strong> Programas de meritocracia e feedback contínuo</li>
        <li><strong>Ambiente de Trabalho Saudável:</strong> Investir em ergonomia, segurança e qualidade de vida</li>
        <li><strong>Desenvolvimento Contínuo:</strong> Educação permanente e certificações profissionais</li>
        <li><strong>Remuneração Competitiva:</strong> Benchmark com mercado e benefícios atrativos</li>
      </ul>

      <h2>Liderança Humanizada</h2>
      <p>Gestores em saúde precisam desenvolver competências além das técnicas: empatia, comunicação efetiva, gestão de conflitos e inteligência emocional. A liderança humanizada cria engajamento e reduz o estresse ocupacional das equipes.</p>

      <h2>Cultura Organizacional Forte</h2>
      <p>Instituições com cultura organizacional bem definida e alinhada aos valores assistenciais apresentam melhores resultados em todos os indicadores: satisfação de pacientes, qualidade assistencial e performance financeira.</p>

      <h2>Metodologia NEO® na Gestão de Pessoas</h2>
      <p>A Nucleo Core aplica a metodologia NEO® (Núcleo Estratégico Organizacional) para estruturar a gestão de pessoas de forma integrada à estratégia institucional, garantindo que o RH seja um parceiro estratégico na consecução dos objetivos organizacionais.</p>

      <h2>Conclusão</h2>
      <p>Investir em gestão de pessoas não é custo, é investimento estratégico que se reflete diretamente na qualidade assistencial, na satisfação dos pacientes e na sustentabilidade da instituição.</p>
    `,
    image: 'https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcXVhbGl0eSUyMHRlYW18ZW58MXx8fHwxNzY1Mzg1NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gestão de Pessoas',
    author: 'Oslane Bezerra',
    date: '05 Dez 2024',
    readTime: '7 min',
    views: 2654,
  },
  {
    id: '4',
    title: 'Transformação Digital na Saúde: Por Onde Começar',
    excerpt: 'Um guia prático sobre como implementar soluções tecnológicas que otimizam processos e melhoram a experiência do paciente.',
    content: `
      <p>A transformação digital revolucionou a forma como as instituições de saúde operam. Da telemedicina aos prontuários eletrônicos, a tecnologia se tornou fundamental para competitividade e qualidade assistencial. Mas por onde começar essa jornada?</p>

      <h2>Avaliação do Estágio Atual</h2>
      <p>Antes de investir em tecnologia, é essencial fazer um diagnóstico preciso do nível de maturidade digital da instituição. Quais processos já são digitalizados? Onde estão os principais gargalos? Qual a capacitação tecnológica das equipes?</p>

      <h2>Priorização de Iniciativas</h2>
      <p>Nem tudo precisa ser digitalizado ao mesmo tempo. Recomendamos começar por processos com maior impacto:</p>
      <ul>
        <li><strong>Prontuário Eletrônico do Paciente (PEP):</strong> Base para integração de dados clínicos</li>
        <li><strong>Agendamento Online:</strong> Melhora experiência do paciente e reduz no-show</li>
        <li><strong>Gestão de Leitos:</strong> Otimiza ocupação e fluxo de pacientes</li>
        <li><strong>Business Intelligence:</strong> Dashboards para tomada de decisão baseada em dados</li>
        <li><strong>Telemedicina:</strong> Amplia acesso e gera nova fonte de receita</li>
      </ul>

      <h2>Gestão da Mudança</h2>
      <p>A resistência das equipes é o maior desafio na implementação de novas tecnologias. É fundamental investir em comunicação clara, treinamentos práticos e demonstração de benefícios tangíveis.</p>

      <h2>Segurança e Compliance</h2>
      <p>Com a Lei Geral de Proteção de Dados (LGPD), a segurança da informação em saúde nunca foi tão crítica. Toda solução digital deve contemplar criptografia, controle de acesso e backup adequado.</p>

      <h2>ROI e Sustentabilidade Financeira</h2>
      <p>Tecnologia em saúde exige investimento significativo. É importante calcular o retorno esperado, considerando ganhos em produtividade, redução de erros, melhor experiência do paciente e novas oportunidades de receita.</p>

      <h2>A Metodologia MPCO® na Transformação Digital</h2>
      <p>A Nucleo Core utiliza o MPCO® (Modelo de Performance e Controle Operacional) para estruturar a transformação digital de forma integrada à estratégia institucional, garantindo resultados mensuráveis e sustentáveis.</p>

      <h2>Conclusão</h2>
      <p>A transformação digital é uma jornada, não um projeto pontual. Instituições que abordam o tema de forma estratégica, com foco em pessoas e processos, colhem benefícios duradouros em qualidade, eficiência e competitividade.</p>
    `,
    image: 'https://images.unsplash.com/photo-1758691462668-046fd85ceac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGRhdGF8ZW58MXx8fHwxNzY1Mjk5NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Inovação e Tecnologia',
    author: 'Igor Bezerra',
    date: '03 Dez 2024',
    readTime: '9 min',
    views: 2341,
  },
  {
    id: '5',
    title: 'Planejamento Estratégico Hospitalar: Metodologia NEO® em Ação',
    excerpt: 'Veja como a metodologia proprietária NEO® estrutura o planejamento estratégico e impulsiona resultados nas instituições de saúde.',
    content: `
      <p>O planejamento estratégico é fundamental para o sucesso organizacional em um setor cada vez mais competitivo e regulado. A metodologia NEO® (Núcleo Estratégico Organizacional) da Nucleo Core oferece uma abordagem estruturada e prática para esse processo.</p>

      <h2>O Que é a Metodologia NEO®?</h2>
      <p>A NEO® é uma metodologia proprietária desenvolvida ao longo de 15 anos de consultoria em saúde. Ela integra análise ambiental, definição estratégica, desdobramento tático e monitoramento de resultados em um ciclo contínuo de melhoria.</p>

      <h2>Etapas da Metodologia NEO®</h2>

      <h3>1. Diagnóstico Situacional</h3>
      <p>Análise SWOT aprofundada, benchmarking setorial e mapeamento de stakeholders. Inclui avaliação de maturidade em gestão e identificação de gaps estratégicos.</p>

      <h3>2. Definição de Propósito e Direcionadores</h3>
      <p>Revisão ou criação de missão, visão e valores alinhados à realidade da instituição. Definição de objetivos estratégicos com horizonte de 3-5 anos.</p>

      <h3>3. Desdobramento em Iniciativas</h3>
      <p>Transformação dos objetivos estratégicos em projetos e ações concretas, com responsáveis, prazos e recursos definidos. Utilização de metodologias ágeis quando aplicável.</p>

      <h3>4. Sistema de Indicadores</h3>
      <p>Criação de painéis de gestão (dashboards) com KPIs estratégicos, táticos e operacionais. Estabelecimento de metas SMART e frequência de acompanhamento.</p>

      <h3>5. Governança e Monitoramento</h3>
      <p>Estruturação de comitês de acompanhamento, rituais de gestão e processos de tomada de decisão. Ciclos de revisão trimestral e ajustes de rota.</p>

      <h2>Diferenciais da NEO®</h2>
      <ul>
        <li><strong>Praticidade:</strong> Ferramentas e templates prontos para uso imediato</li>
        <li><strong>Customização:</strong> Adaptação ao porte e complexidade da instituição</li>
        <li><strong>Foco em Resultados:</strong> Acompanhamento de indicadores tangíveis</li>
        <li><strong>Capacitação de Equipes:</strong> Transferência de metodologia para autonomia futura</li>
      </ul>

      <h2>Case de Sucesso</h2>
      <p>Uma instituição de médio porte no Centro-Oeste implementou a NEO® e, em 18 meses, aumentou sua taxa de ocupação em 22%, reduziu glosas em 35% e conquistou acreditação ONA nível 2.</p>

      <h2>Conclusão</h2>
      <p>Planejamento estratégico bem estruturado é a base para crescimento sustentável. A metodologia NEO® oferece o caminho para que instituições de saúde transformem visão em resultados concretos.</p>
    `,
    image: 'https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjUzMDc4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gestão Estratégica',
    author: 'Oslane Bezerra',
    date: '01 Dez 2024',
    readTime: '10 min',
    views: 1987,
  },
  {
    id: '6',
    title: 'Capacitação de Equipes: Investimento que Gera Resultados',
    excerpt: 'Entenda a importância do treinamento contínuo e desenvolvimento profissional para a excelência operacional em saúde.',
    content: 'Investir em capacitação é investir no futuro da instituição...',
    image: 'https://images.unsplash.com/photo-1758691463569-66de91d76452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjUzODU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gestão de Pessoas',
    author: 'Igor Bezerra',
    date: '28 Nov 2024',
    readTime: '5 min',
    views: 1765,
  },
  {
    id: '7',
    title: 'Liderança em Saúde: Competências para o Século XXI',
    excerpt: 'Explore as habilidades essenciais que todo líder de instituição de saúde precisa desenvolver para enfrentar os desafios atuais.',
    content: 'A liderança no setor de saúde exige competências específicas e em constante evolução...',
    image: 'https://images.unsplash.com/photo-1609743522471-83c84ce23e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzY1Mzg1NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gestão Estratégica',
    author: 'Oslane Bezerra',
    date: '25 Nov 2024',
    readTime: '7 min',
    views: 1654,
  },
  {
    id: '8',
    title: 'Inovação na Assistência: Casos de Sucesso',
    excerpt: 'Conheça cases reais de inovação que transformaram a assistência e a experiência do paciente em instituições de saúde.',
    content: 'A inovação é o motor da transformação no setor de saúde...',
    image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjUyODY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Inovação e Tecnologia',
    author: 'Igor Bezerra',
    date: '22 Nov 2024',
    readTime: '8 min',
    views: 1432,
  },
];

// Função para obter os artigos mais lidos
export const getMostReadArticles = (limit: number = 4): Article[] => {
  return [...articles].sort((a, b) => b.views - a.views).slice(0, limit);
};

// Função para obter artigo por ID
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Função para obter artigos por categoria
export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};