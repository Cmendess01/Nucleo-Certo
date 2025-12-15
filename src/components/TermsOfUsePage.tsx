'use client'

import { FileText, AlertCircle, Scale, Shield, Mail } from 'lucide-react';

interface TermsOfUsePageProps {
  onNavigate?: (path: string) => void;
}

export function TermsOfUsePage({ onNavigate }: TermsOfUsePageProps) {
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Termos de Uso
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Condições gerais para utilização do site e serviços
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Introdução */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  Introdução
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Bem-vindo ao site da <strong>Nucleo Core Gestão Holística em Saúde</strong>. Ao acessar e utilizar este site, você concorda em cumprir e estar sujeito aos seguintes Termos de Uso.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recomendamos a leitura atenta destes termos antes de utilizar nossos serviços. Caso não concorde com qualquer disposição, solicitamos que não utilize o site.
                </p>
              </div>
            </div>
          </div>

          {/* Aceitação dos Termos */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos termos e condições deste acordo. Se você não concordar com qualquer parte destes termos, não deverá usar nosso site ou serviços.
            </p>
          </div>

          {/* Serviços Oferecidos */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              2. Serviços Oferecidos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A Nucleo Core oferece serviços de consultoria especializada em gestão de saúde, incluindo:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Consultoria em qualidade e acreditação (ONA, Qmentum, ACSA, JCI, ISO)</li>
              <li>Gestão estratégica e governança em saúde</li>
              <li>Consultoria financeira e orçamentária</li>
              <li>Projetos para o setor público</li>
              <li>Fusões, aquisições e valuation</li>
              <li>Gestão de pessoas, treinamento e desenvolvimento</li>
              <li>Outros serviços correlatos descritos no site</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Os serviços detalhados são formalizados através de contratos específicos com cada cliente.
            </p>
          </div>

          {/* Uso do Site */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              3. Uso do Site
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Você concorda em utilizar o site apenas para fins lícitos e de acordo com estes Termos de Uso. É proibido:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Usar o site de qualquer forma que viole leis ou regulamentos aplicáveis</li>
              <li>Transmitir material publicitário ou promocional não solicitado</li>
              <li>Interferir ou interromper o funcionamento do site</li>
              <li>Tentar obter acesso não autorizado a sistemas ou redes</li>
              <li>Copiar, reproduzir ou distribuir conteúdo sem autorização prévia</li>
              <li>Utilizar o site para fins fraudulentos ou maliciosos</li>
              <li>Coletar informações de outros usuários sem consentimento</li>
            </ul>
          </div>

          {/* Propriedade Intelectual */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  4. Propriedade Intelectual
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Todo o conteúdo presente neste site, incluindo, mas não se limitando a textos, gráficos, logos, ícones, imagens, metodologias (NEO®, MMGS®, MPCO®), vídeos e software, é propriedade da Nucleo Core ou de seus fornecedores de conteúdo e está protegido pelas leis de direitos autorais e propriedade intelectual.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  É proibida a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo sem autorização expressa por escrito da Nucleo Core.
                </p>
              </div>
            </div>
          </div>

          {/* Metodologias Proprietárias */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              5. Metodologias Proprietárias
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As metodologias NEO® (Núcleo Estratégico Organizacional), MMGS® (Modelo de Maturidade em Gestão da Saúde) e MPCO® (Metodologia de Processos Clínicos Operacionais) são marcas registradas e propriedade exclusiva da Nucleo Core.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              O uso, reprodução ou divulgação destas metodologias sem autorização prévia e expressa é estritamente proibido e sujeito a medidas legais cabíveis.
            </p>
          </div>

          {/* Cadastro e Segurança */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              6. Informações Fornecidas
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao preencher formulários de contato ou solicitar informações, você garante que todas as informações fornecidas são verdadeiras, precisas e completas. Você é responsável por manter a confidencialidade de suas informações e por todas as atividades que ocorram através de suas comunicações conosco.
            </p>
          </div>

          {/* Limitação de Responsabilidade */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  7. Limitação de Responsabilidade
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  O site e seu conteúdo são fornecidos "no estado em que se encontram" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Nucleo Core não se responsabiliza por:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Interrupções no funcionamento do site</li>
                  <li>Erros, vírus ou códigos maliciosos</li>
                  <li>Danos diretos, indiretos ou consequentes do uso do site</li>
                  <li>Conteúdo de sites de terceiros vinculados</li>
                  <li>Ações de usuários ou terceiros</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links Externos */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              8. Links para Sites de Terceiros
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Este site pode conter links para sites de terceiros. Esses links são fornecidos apenas para conveniência. A Nucleo Core não tem controle sobre o conteúdo desses sites e não se responsabiliza por seu conteúdo, políticas de privacidade ou práticas.
            </p>
          </div>

          {/* Confidencialidade */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              9. Confidencialidade
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Informações confidenciais compartilhadas durante o processo de consultoria ou contato são tratadas com sigilo profissional. Contratos específicos de confidencialidade podem ser firmados para projetos de consultoria.
            </p>
          </div>

          {/* Modificações */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              10. Modificações dos Termos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Nucleo Core reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. As modificações entram em vigor imediatamente após sua publicação no site. O uso continuado do site após as modificações constitui aceitação dos novos termos.
            </p>
          </div>

          {/* Rescisão */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              11. Rescisão de Acesso
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Reservamo-nos o direito de, a nosso exclusivo critério, encerrar ou suspender seu acesso ao site, total ou parcialmente, a qualquer momento e por qualquer motivo, sem aviso prévio, incluindo violação destes Termos de Uso.
            </p>
          </div>

          {/* Lei Aplicável */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  12. Lei Aplicável e Foro
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fica eleito o foro da Comarca de Goiânia, Estado de Goiás, como competente para dirimir quaisquer controvérsias decorrentes destes Termos de Uso, renunciando as partes a qualquer outro, por mais privilegiado que seja.
                </p>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  13. Contato
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Para dúvidas, esclarecimentos ou solicitações relacionadas a estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Nucleo Core Gestão Holística em Saúde</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    E-mail: <a href="mailto:contato@nucleocore.com.br" className="text-[#C7A25B] hover:underline">contato@nucleocore.com.br</a>
                  </p>
                  <p className="text-gray-700">
                    WhatsApp: (62) 99999-9999
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data de atualização */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-center">
              <strong>Última atualização:</strong> Dezembro de 2025
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Ficou com Alguma Dúvida?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Entre em contato conosco para esclarecer qualquer questão
          </p>
          <button
            onClick={() => handleNavigate('/contato')}
            className="px-8 py-4 bg-[#C7A25B] text-white font-medium rounded-lg hover:bg-[#A98845] transition-all"
          >
            Fale Conosco
          </button>
        </div>
      </section>
    </div>
  );
}
