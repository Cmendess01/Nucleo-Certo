export const emailStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100% !important;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #fff5f6;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }

  img {
    border: 0;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: #dc143c;
  }

  .bg-page {
    background-color: #fff5f6;
  }

  .email-outer {
    padding: 20px 0;
  }

  .email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 18px 45px rgba(220, 20, 60, 0.18);
  }

  .content-wrapper {
    padding: 36px 30px 40px;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-small {
    font-size: 14px;
    color: #6c757d;
  }

  .text-muted {
    color: #6c757d;
  }

  .text-dark {
    color: #1a1a1a;
  }

  .header {
    padding: 40px 30px 32px;
    text-align: center;
    background: radial-gradient(circle at top left, #ffe5e9 0, #ffffff 40%, #ffe5e9 100%);
  }

  .header-tag {
    display: inline-block;
    font-size: 12px;
    color: #b01030;
    background-color: #ffffff;
    padding: 6px 16px;
    border-radius: 999px;
    border: 1px solid rgba(220, 20, 60, 0.15);
    margin-bottom: 14px;
    font-weight: 500;
  }

  .header-title {
    color: #1a1a1a;
    font-size: 26px;
    line-height: 1.3;
    margin: 0;
    font-weight: 700;
  }

  .header-script {
    display: inline-block;
    font-size: 26px;
    color: #e63946;
    font-style: italic;
    font-weight: 600;
  }

  .footer {
    background-color: #fff5f6;
    padding: 32px 30px 36px;
    border-top: 1px solid #f1c2cb;
  }

  .footer-title {
    color: #1a1a1a;
    font-size: 18px;
    margin: 0 0 8px 0;
    font-weight: 700;
  }

  .footer-subtitle {
    color: #6c757d;
    font-size: 14px;
    margin: 0;
  }

  .footer-links {
    margin: 0 auto;
  }

  .footer-link {
    padding: 0 10px;
  }

  .footer-link + .footer-link {
    border-left: 1px solid #f1c2cb;
  }

  .footer-link a {
    color: #dc143c;
    font-size: 13px;
    text-decoration: none;
    font-weight: 500;
  }

  .social-icons {
    margin: 0 auto;
  }

  .social-icon {
    padding: 0 8px;
  }

  .btn {
    display: inline-block;
    padding: 14px 28px;
    background: linear-gradient(135deg, #dc143c 0%, #e63946 50%, #ff6b7a 100%);
    color: #ffffff !important;
    text-decoration: none;
    border-radius: 999px;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .btn-secondary {
    background: linear-gradient(135deg, #ff8fa3 0%, #ffb3c1 100%);
    color: #1a1a1a !important;
  }

  .btn:hover {
    opacity: 0.92;
  }

  .divider {
    height: 1px;
    background-color: #f1c2cb;
    margin: 26px 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #1a1a1a;
    font-weight: 700;
    line-height: 1.3;
    margin: 0 0 14px 0;
  }

  h1 {
    font-size: 28px;
    background: linear-gradient(135deg, #dc143c 0%, #ff6b7a 60%, #ff8fa3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    color: #4a4a4a;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0 14px 0;
  }

  .footer-legal {
    color: #8a8a8a;
    font-size: 12px;
    line-height: 1.6;
    margin: 0;
  }

  .footer-legal a {
    color: #dc143c;
    text-decoration: underline;
  }

  .preheader {
    display: none !important;
    visibility: hidden;
    opacity: 0;
    color: transparent;
    height: 0;
    width: 0;
    font-size: 1px;
    line-height: 1px;
    max-height: 0;
    max-width: 0;
    mso-hide: all;
  }

  @media only screen and (max-width: 600px) {
    .email-container {
      width: 100% !important;
    }

    .content-wrapper {
      padding: 26px 20px 30px !important;
    }

    h1 {
      font-size: 24px !important;
    }

    h2 {
      font-size: 20px !important;
    }

    .btn {
      padding: 12px 22px !important;
      font-size: 14px !important;
    }

    .footer-links {
      display: block !important;
    }

    .footer-link {
      display: block !important;
      border-left: none !important;
      margin: 6px 0 !important;
      text-align: center !important;
    }
  }
`
