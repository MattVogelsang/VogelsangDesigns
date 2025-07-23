import { useState, useEffect, useRef } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [volume, setVolume] = useState(0.3)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const playlist = [
    '/Dance By Yourself - Dyalla.mp3',
    '/Lion - Dyalla.mp3',
    '/Groove - Dyalla.mp3',
    '/Circa 1983 - Freedom Trail Studio.mp3',
    '/Island Life - Telecasted.mp3'
  ]

  useEffect(() => {
    // Start playing on first user interaction
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(console.error)
        setIsPlaying(true)
      }
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }

    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length
    setCurrentSongIndex(nextIndex)
    if (audioRef.current) {
      audioRef.current.src = playlist[nextIndex]
      if (isPlaying) {
        audioRef.current.play().catch(console.error)
      }
    }
  }

  const handleEnded = () => {
    nextSong()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  const getSongName = (filePath: string) => {
    const fileName = filePath.split('/').pop() || ''
    return fileName.replace('.mp3', '').replace(/\s*-\s*/, ' - ')
  }

  if (playlist.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={playlist[currentSongIndex]}
        onEnded={handleEnded}
        loop={playlist.length === 1}
      />

      {/* Main Player Button */}
      <div className="relative">
        <button
          onClick={() => setShowControls(!showControls)}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white hover:scale-110"
          aria-label="Music player"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
        </button>

        {/* Controls Panel */}
        {showControls && (
          <div className="absolute bottom-full right-0 mb-2 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 min-w-[200px] sm:min-w-[250px]">
            <div className="space-y-3">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:to-pink-400 transition-all duration-300 text-sm sm:text-base"
              >
                {isPlaying ? (
                  <>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span>Play</span>
                  </>
                )}
              </button>

              {/* Next Song Button */}
              {playlist.length > 1 && (
                <button
                  onClick={nextSong}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                  </svg>
                  <span>Next Song</span>
                </button>
              )}

              {/* Volume Control */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Volume
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>0%</span>
                  <span>{Math.round(volume * 100)}%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Song Info */}
              <div className="text-center">
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Now Playing
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {getSongName(playlist[currentSongIndex])}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {currentSongIndex + 1} of {playlist.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
