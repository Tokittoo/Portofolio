import Link from 'next/link'
import React from 'react'

type Link = {
  name: string,
  link: string
}

const primaryLinks: Link[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Projects',
    link: '/#projects'
  },
  {
    name: 'Socials',
    link: '/#socials'
  }
]

const socialLinks: Link[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/Tokittoo'
  },
  {
    name: 'Telegram',
    link: 'https://tokitokrishna.t.me/'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/r-krishna-prasath-a3b143349/'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/_tokitoooo_'
  }
]

const projectLinks: Link[] = [
  {
    name: 'Sibhi v1.0',
    link: 'https://xibhi.github.io/'
  },
  {
    name: 'Penquin',
    link: 'https://penquin.vercel.app/'
  },
  {
    name: 'Sibhi v2.0',
    link: 'https://xibhi.vercel.app/'
  }
]

const Footer = () => {
  return (
    <div className='mt-10'>
      <hr className='text-gray-300 dark:text-neutral-700 my-8' />
      <div className='flex flex-col md:flex-row max-md:ml-12 max-md:gap-12 justify-between max-w-lg mx-auto my-12'>
        <ul className='flex flex-col space-y-4'>
          {
            primaryLinks.map(l => (
              <Link key={l.name} href={l.link} className='text-gray-500 hover:text-gray-600'>
                <li>{l.name}</li>
              </Link>
            ))
          }
        </ul>
        <ul className='flex flex-col space-y-4' id='socials'>
          {
            socialLinks.map(l => (
              <Link key={l.name} href={l.link} className='text-gray-500 hover:text-gray-600'>
                <li>{l.name}</li>
              </Link>
            ))
          }
        </ul>
        <ul className='flex flex-col space-y-4'>
          {
            projectLinks.map(l => (
              <Link key={l.name} href={l.link} className='text-gray-500 hover:text-gray-600'>
                <li>{l.name}</li>
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Footer
