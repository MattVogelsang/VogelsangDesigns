import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import Navigation from '../components/Navigation'
import { ThemeProvider } from '../components/ThemeProvider'
import MusicPlayer from '../components/MusicPlayer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Vogelsang Designs - Modern Web Design & Development Studio</title>
        <meta name="description" content="Vogelsang Designs is a modern web design and development studio that helps brands build beautiful, functional, and responsive digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Navigation />

        <main className="relative z-10">
          <Component {...pageProps} />
        </main>

        <MusicPlayer />
      </div>
    </ThemeProvider>
  )
}
