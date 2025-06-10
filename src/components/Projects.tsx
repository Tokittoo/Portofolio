'use client'
import './style.css'
import Card from './Card'
import Link from 'next/link'
import { IconBrandCss3, IconBrandFramerMotion, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs , IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconChevronDown } from '@tabler/icons-react'
import { motion } from 'motion/react'

export type Project = {
  title: string,
  description: string,
  link?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NextJS ={
  name: 'Next.js',
  logo: <IconBrandNextjs />
}

const Html ={
  name:'HTML',
  logo: <IconBrandHtml5/>
}

const CSS ={
  name:'CSS',
  logo: <IconBrandCss3/>
}

const React = {
  name: 'React',
  logo: <IconBrandReact />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Motionls = {
  name: 'Motion',
  logo: <IconBrandFramerMotion />
}

const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MongoDBls = {
  name: 'MongoDB',
  logo: <IconBrandMongodb />
}

const projects: Project[] = [
  {
    title: 'Sibhi',
    description: "A personal portofolio for cyber security enthusiast featuring writeups, projects, and professional insights.",
    link: 'https://xibhi.github.io',
    tags:[
      Html,
      CSS,
      JavaScript,
    ]
  },
  /*
  {
    title: 'VidChat',
    description: 'VidChat is a real-time video chat app. It lets users instantly get straight-up face-to-face conversations in the browser.',
    link: 'https://vid-chat-peach.vercel.app',
    tags: [
      NextJS,
      TypeScript,
      { name: 'Socket.io' },
      { name: 'WebRTC' },
      Tailwind
    ]
  },
  {
    title: 'FinTrack',
    description: 'FinTrack is a sleek finance tracking web app, designed to make adulting (aka budgeting) slightly less painful.',
    link: 'https://fintrack-flax-beta.vercel.app',
    tags: [
      NextJS,
      TypeScript,
      { name: 'ShadCN' },
      { name: 'Aceternity UI' },
      Tailwind
    ]
  },
  {
    title: 'Sputify',
    description: 'Sputify is my take on Spotify—built from scratch to stream bops. To deliver a vibe-heavy music experience... minus the licensing fees.',
    link: 'https://github.com/M-SaaD-H/Sputify',
    tags: [
      React,
      NodeJS,
      { name: 'ShadCN' },
      JavaScript,
      Tailwind
    ]
  },
  {
    title: 'Zootube',
    description: 'ZooTube is a YouTube-inspired backend clone. It handles user auth, video uploads, likes, and comments like the real deal (minus the copyright strikes).',
    link: 'https://github.com/M-SaaD-H/Zootube',
    tags: [
      NodeJS,
      MongoDB,
      { name: 'Cloudinary' },
      JavaScript,
      NodeJS,
      MongoDB,
      { name: 'Cloudinary' },
      JavaScript
    ]
  }*/
]

 const upcomingProjects: Project[] = [
  {
    title: 'Penquin',
    description: "An advanced bug hunting toolkit — a collaborative project with Sibhi focused on developing a personalized, high-impact toolkit for advanced vulnerability discovery.",
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  }
]

function Projects() {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 50,
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={parentVariant}
      className='md:p-2 p-8' id='projects'
    >
      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight'>Projects</motion.h1>
      <div className='grid md:grid-cols-2 max-md:mx-4 gap-4'>
        {
          projects.map(project => (
            <div key={project.title} className="projects">
              <Card project={project} />
            </div>
          ))
        }
      </div>
      <Link href={'https://github.com/crish-dev'} target='_blank'>
        <button className='flex items-center gap-1 text-sm mx-auto my-8 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer'>
          See More <IconChevronDown size={16} />
        </button>
      </Link>

      <h1 className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight'>Upcoming Projects</h1>
      <div className='grid md:grid-cols-2 max-md:mx-4 gap-4'>
        {
          upcomingProjects.map(project => (
            <div key={project.title} className="projects">
              <Card project={project} />
            </div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default Projects