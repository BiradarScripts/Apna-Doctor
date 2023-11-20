import React from 'react'
import './cssFiles/hero.css'
import UnderHero from './UnderHero'
export default function Hero() {
  return (
    <div className='container-hero'>
    <div className="container-upper">
    Kela Industries and Ltd.
    </div>
      <div className="under-hero">
            <UnderHero/>
      </div>
    </div>
  )
}

