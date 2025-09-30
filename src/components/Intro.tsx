'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Intro = () => {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  }

  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={parentVariant}
      className='p-8 my-4'
    >
      <div className='flex justify-between max-md:flex-col-reverse'>
        <motion.div
          variants={childVariant}
        >
          <h1 className='text-5xl md:text-7xl font-sans mt-5 font-bold tracking-tight my-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>
            Krish
          </h1>
        </motion.div>
        <motion.div
          variants={childVariant}
          className='overflow-hidden rounded-lg w-max h-max shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-zinc-700/70'
        >
          <Image
            src={'/Main.webp'}
            height={120}
            width={120}
            alt='Krishna Prasath — Developer headshot'
          />
        </motion.div>
      </div>
      <motion.p variants={childVariant} className='text-zinc-700 dark:text-zinc-400 mt-8'>
      I'm just a dude who turns coke into code. I build dope stuff that doesn't end up in my GitHub graveyard—'cause the world's got enough abandoned side projects. My code slaps harder than my CGPA ever did.
      </motion.p>
    </motion.div>
  )
}


export default Intro
