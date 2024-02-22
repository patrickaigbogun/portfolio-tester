import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, helper] = useTypewriter({
        words: [
            "Hi The Name's Patrick",
            "Coffee is better than Oxygen",
            "<Coding/>, Logic, Art, Philosophy"
        ],
        loop: true,
        delaySpeed: 2000,
      })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
        src='#'
        alt='a portait image of Patrick'/>
        
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software developer
            </h2>
            <h1>
                <span>{text}</span> 
                <Cursor cursorColor="green" />
            </h1>
            
            <div>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
            
            </div>

        </div>
    </div>
  )
}