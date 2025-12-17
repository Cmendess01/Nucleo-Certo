'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, Construction } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/fade-in'

interface ComingSoonSectionProps {
  title?: string
  description?: string
  showBackButton?: boolean
  backButtonText?: string
  backButtonHref?: string
}

export function ComingSoonSection({
  title = 'Em Breve',
  description = 'Estamos trabalhando nesta seção para oferecer a melhor experiência para você. Em breve teremos novidades!',
  showBackButton = true,
  backButtonText = 'Voltar para Home',
  backButtonHref = '/',
}: ComingSoonSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-200px)] flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-script-red/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <FadeIn>
          <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center backdrop-blur-sm bg-white/80 border-2">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-primary/10 p-6 rounded-full">
                  <Construction className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark-text">
              {title}
            </h1>

            <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span className="text-lg">Seção em construção</span>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8 max-w-xl mx-auto">
              {description}
            </p>

            {showBackButton && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                  <Link href={backButtonHref}>
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    {backButtonText}
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link href="/contato">Entre em Contato</Link>
                </Button>
              </div>
            )}

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Tem alguma dúvida?{' '}
                <Link href="/contato" className="text-primary hover:underline font-medium">
                  Fale conosco
                </Link>
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
