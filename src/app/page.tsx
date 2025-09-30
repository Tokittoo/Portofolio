import React from 'react'
import type { Metadata } from 'next'

import CTA from '@/components/CTA'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <CTA />
    </div>
  )
}

export default Home

export const metadata: Metadata = {
  title: 'Krish',
  description: 'Krishna Prasath — Developer building fast, accessible web apps with Next.js, TypeScript, and Tailwind CSS.',
}
