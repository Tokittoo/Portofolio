"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconBrandX, IconMail } from '@tabler/icons-react'
import { SiPeerlist } from 'react-icons/si'

type LinkItem = { label: string; href: string; icon: React.ReactNode }

const links: LinkItem[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/_tokitoooo_', icon: <IconBrandInstagram className='size-4' /> },
  { label: 'X', href: 'https://x.com/crishna_27', icon: <IconBrandX className='size-4' /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krishna-prasath-r/', icon: <IconBrandLinkedin className='size-4' /> },
  { label: 'GitHub', href: 'https://github.com/Tokittoo', icon: <IconBrandGithub className='size-4' /> },
  { label: 'Peerlist', href: 'https://peerlist.io/krishnaprasath', icon: <SiPeerlist className='size-4' /> },
  { label: 'Email', href: 'https://mailto:R.Krishna.Prasath@protonmail.com', icon: <IconMail className='size-4' /> }
]

export default function LinksPage() {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      filter: 'blur(10px)',
      transition: { type: 'tween', duration: 0.3 }
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'tween', duration: 0.3 }
    }
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: { duration: 0.3, staggerChildren: 0.05 }
    }
  }

  return (
    <main className='min-h-[calc(100dvh-0px)] bg-background flex items-start justify-center px-6 pt-16 pb-6' style={{ fontFamily: 'General Sans, sans-serif' }}>
      <motion.div initial={'hidden'} animate={'show'} variants={parentVariant} className='w-full max-w-md scale-105 md:scale-110'>
        <motion.div variants={childVariant} className='mb-4'>
          <Link href='/' className='inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white rounded-lg border border-white/10 px-3 py-1.5 bg-white/5 backdrop-blur-sm'>
            <span>←</span>
            <span>Back</span>
          </Link>
        </motion.div>
        <div className='flex flex-col items-center text-center'>
          <motion.div variants={childVariant} className='relative h-28 w-28 overflow-hidden rounded-full'>
            <Image src='/Main.webp' alt='Profile avatar' fill sizes='112px' className='object-cover' />
          </motion.div>
          <motion.h1 variants={childVariant} className='mt-4 text-3xl md:text-4xl font-bold tracking-tight'>KRISH</motion.h1>
          <motion.p variants={childVariant} className='text-base text-foreground/70'>Developer</motion.p>
        </div>

        <div className='mt-6 space-y-3'>
          {links.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              className='group relative block w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
              variants={childVariant}
            >
              <span aria-hidden className='pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(255,255,255,0.08),transparent_60%)] opacity-100 transition-opacity duration-300 group-hover:opacity-100 dark:opacity-100 opacity-60' />
              <span aria-hidden className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all' />
              <span className='absolute left-4 top-1/2 -translate-y-1/2 text-foreground/80'>{item.icon}</span>
              <span className='pointer-events-none relative block w-full text-center text-foreground'>{item.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  )
}