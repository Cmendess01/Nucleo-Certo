'use client'

import { Shield, Lock, FileText, Mail, AlertCircle } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate?: (path: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
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
            Política de Privacidade
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Transparência no tratamento dos seus dados pessoais
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
                <Shield className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  Introdução
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A <strong>Nucleo Core Gestão Holística em Saúde</strong> ("Nucleo Core", "nós" ou "nosso") está comprometida em proteger a privacidade e os dados pessoais de seus clientes, parceiros e visitantes do site.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
                </p>
              </div>
            </div>
          </div>

          {/* Dados Coletados */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  1. Dados Coletados
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Coletamos as seguintes categorias de dados pessoais:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-[#0D1B2A] mb-2">1.1. Dados Fornecidos Voluntariamente</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Nome completo</li>
                      <li>E-mail profissional</li>
                      <li>Telefone e WhatsApp</li>
                      <li>Cargo e instituição</li>
                      <li>Mensagens e conteúdo de comunicação</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#0D1B2A] mb-2">1.2. Dados Coletados Automaticamente</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Endereço IP</li>
                      <li>Tipo de navegador e dispositivo</li>
                      <li>Páginas visitadas e tempo de navegação</li>
                      <li>Origem de acesso (referência)</li>
                      <li>Cookies e tecnologias similares</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Finalidade */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              2. Finalidade do Tratamento
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Responder a solicitações de contato e propostas comerciais</li>
              <li>Fornecer informações sobre nossos serviços de consultoria</li>
              <li>Elaborar diagnósticos e propostas personalizadas</li>
              <li>Executar contratos de prestação de serviços</li>
              <li>Melhorar a experiência do usuário em nosso site</li>
              <li>Enviar comunicações relacionadas aos nossos serviços</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Exercer direitos em processos judiciais e administrativos</li>
            </ul>
          </div>

          {/* Base Legal */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              3. Base Legal para o Tratamento
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O tratamento de dados pessoais pela Nucleo Core é fundamentado nas seguintes bases legais:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Consentimento:</strong> quando você nos fornece seus dados voluntariamente</li>
              <li><strong>Execução de contrato:</strong> para prestação de serviços contratados</li>
              <li><strong>Legítimo interesse:</strong> para envio de propostas comerciais relevantes</li>
              <li><strong>Cumprimento de obrigação legal:</strong> quando exigido por lei</li>
              <li><strong>Exercício regular de direitos:</strong> em processos judiciais ou administrativos</li>
            </ul>
          </div>

          {/* Compartilhamento */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              4. Compartilhamento de Dados
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Seus dados pessoais podem ser compartilhados com:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Prestadores de serviços:</strong> empresas que nos auxiliam em atividades como hospedagem de site, ferramentas de comunicação e análise de dados</li>
              <li><strong>Parceiros comerciais:</strong> quando necessário para a execução de projetos conjuntos, mediante autorização</li>
              <li><strong>Autoridades competentes:</strong> quando exigido por lei ou ordem judicial</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              <strong>Importante:</strong> Não vendemos, alugamos ou comercializamos seus dados pessoais para terceiros.
            </p>
          </div>

          {/* Segurança */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  5. Segurança dos Dados
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Adotamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controle de acesso restrito</li>
                  <li>Monitoramento de sistemas</li>
                  <li>Políticas internas de segurança da informação</li>
                  <li>Treinamento de colaboradores</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Retenção */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              6. Retenção de Dados
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo exigências legais, contábeis ou de relatórios. Após esse período, os dados serão excluídos ou anonimizados de forma segura.
            </p>
          </div>

          {/* Direitos do Titular */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              7. Seus Direitos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou desatualizados</li>
              <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários ou tratados em desconformidade</li>
              <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado</li>
              <li><strong>Eliminação:</strong> de dados tratados com base no consentimento</li>
              <li><strong>Informação sobre compartilhamento:</strong> saber com quem compartilhamos seus dados</li>
              <li><strong>Revogação do consentimento:</strong> quando aplicável</li>
              <li><strong>Oposição ao tratamento:</strong> em determinadas situações</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@nucleocore.com.br" className="text-[#C7A25B] hover:underline">contato@nucleocore.com.br</a>
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              8. Cookies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação, analisar o uso do site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
            </p>
          </div>

          {/* Alterações */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
              9. Alterações nesta Política
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação. Recomendamos que você revise esta página regularmente. A versão atualizada será publicada em nosso site com a data da última revisão.
            </p>
          </div>

          {/* Contato */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                  10. Contato
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:
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
            Entre em contato conosco para esclarecer qualquer questão sobre privacidade
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
