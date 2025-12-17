import { baseTemplate } from './base-template'

interface GenericEmailProps {
  title: string
  message: string
}

export const genericEmail = ({ title, message }: GenericEmailProps): string => {
  const content = `
    <h1>${title}</h1>

    <p style="margin: 0 0 20px;">
      ${message}
    </p>
  `

  return baseTemplate({
    preheader: title,
    content,
  })
}
