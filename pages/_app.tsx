import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import MusicPlayer from '../components/MusicPlayer'
import WeatherWidget from '../components/WeatherWidget'
import Navigation from '../components/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <>
      <Head>
        <title>Vogelsangdesigns - Creative Portfolio</title>
        <meta name="description" content="Matthew Vogelsang's creative portfolio showcasing web design, development, and innovative digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="relative z-10">
          <Component {...pageProps} />
        </main>
        
        {/* Floating Music Player */}
        <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
          isMinimized ? 'w-16 h-16' : 'w-80 h-24'
        }`}>
          <MusicPlayer 
            isPlaying={isMusicPlaying}
            setIsPlaying={setIsMusicPlaying}
            isMinimized={isMinimized}
            setIsMinimized={setIsMinimized}
          />
        </div>
        
        {/* Weather Widget */}
        <div className="fixed top-4 right-4 z-40">
          <WeatherWidget />
        </div>
      </div>
    </>
  )
}
