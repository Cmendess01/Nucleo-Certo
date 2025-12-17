import { emailStyles } from './email-styles'

type BaseTemplateProps = {
  content: string
  preheader?: string
}

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

export const baseTemplate = ({ content, preheader = '' }: BaseTemplateProps) => {
  const currentYear = new Date().getFullYear()

  return `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Instituto Curados para Curar</title>

    <!--[if mso]>
      <style type="text/css">
        table {border-collapse: collapse; border-spacing: 0; margin: 0;}
        div, td {padding: 0;}
        div {margin: 0 !important;}
      </style>
    <![endif]-->

    <style>
      ${emailStyles}
    </style>
  </head>
  <body class="bg-page" style="margin:0; padding:0;">
    <div class="preheader">
      ${preheader || '&nbsp;'}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="email-outer">
      <tr>
        <td align="center">
          <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" border="0">
            <!-- Header -->
            <tr>
              <td class="header">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center">
                      <img
                        src="${siteUrl}/logo.svg"
                        alt="Instituto Curados para Curar"
                        width="170"
                        style="margin-bottom: 16px;"
                      >
                      <p class="header-tag">Desde 2012 exercendo um Amor que Age</p>
                      <h1 class="header-title">
                        Curados para Curar Brasil<br />
                        <span class="header-script">Amor que age.</span>
                      </h1>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Conteúdo principal -->
            <tr>
              <td class="content-wrapper">
                ${content ?? ''}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td class="footer">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="padding-bottom: 20px;">
                      <h3 class="footer-title">Instituto Curados para Curar Brasil</h3>
                      <p class="footer-subtitle">
                        ONG que apoia e desenvolve projetos para pessoas em situação de vulnerabilidade social,
                        econômica, profissional e emocional.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="padding-bottom: 20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="footer-links">
                        <tr>
                          <td class="footer-link">
                            <a href="${siteUrl}">Site Oficial</a>
                          </td>
                          <td class="footer-link">
                            <a href="${siteUrl}/quem-somos">Quem Somos</a>
                          </td>
                          <td class="footer-link">
                            <a href="${siteUrl}/projetos">Projetos</a>
                          </td>
                          <td class="footer-link">
                            <a href="${siteUrl}/transparencia">Transparência</a>
                          </td>
                          <td class="footer-link">
                            <a href="${siteUrl}/seja-voluntario">Seja Voluntário(a)</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="padding-bottom: 20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="social-icons">
                        <tr>
                          <td class="social-icon">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                              <img
                                src="https://s.magecdn.com/social/24w/tc-facebook.png"
                                alt="Facebook"
                                width="24"
                                height="24"
                                style="border-radius: 50%;"
                              >
                            </a>
                          </td>
                          <td class="social-icon">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                              <img
                                src="https://s.magecdn.com/social/24w/tc-instagram.png"
                                alt="Instagram"
                                width="24"
                                height="24"
                                style="border-radius: 50%;"
                              >
                            </a>
                          </td>
                          <td class="social-icon">
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                              <img
                                src="https://s.magecdn.com/social/24w/tc-youtube.png"
                                alt="YouTube"
                                width="24"
                                height="24"
                                style="border-radius: 50%;"
                              >
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td align="center">
                      <p class="footer-legal">
                        © ${currentYear} Instituto Curados para Curar Brasil. Todos os direitos reservados.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim()
}
