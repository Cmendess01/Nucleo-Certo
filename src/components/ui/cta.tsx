'use client'

import { Button } from '@/components/ui/button'
import { BlurFadeIn } from '@/components/animations/blur-fade-in'
import Link from 'next/link'

export function CtaSection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <BlurFadeIn>
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-script-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={primary.href}>{primary.label}</Link>
            </Button>

            {secondary && (
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </BlurFadeIn>
  )
}
