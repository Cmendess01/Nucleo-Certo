import Image from 'next/image'
import React from 'react'

const Icon = () => {
  return (
    <Image src="/logo.svg" width={162} height={144} className="object-contain" alt="Logo ICC" />
  )
}

export default Icon
