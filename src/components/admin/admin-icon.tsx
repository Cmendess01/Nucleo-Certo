import Image from 'next/image'
import React from 'react'

const Icon = () => {
  return <Image src="/logo.svg" width={36} height={32} className="object-contain" alt="Ícone ICC" />
}

export default Icon
