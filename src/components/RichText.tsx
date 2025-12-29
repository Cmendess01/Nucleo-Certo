import { DefaultNodeTypes, type DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
})

type Props = {
  data: DefaultTypedEditorState
  className?: string
}

export default function RichText({ data, className }: Props) {
  return (
    <ConvertRichText
      converters={jsxConverters}
      data={data}
      className={className}
    />
  )
}