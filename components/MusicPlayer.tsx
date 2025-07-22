import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, Minimize2, Maximize2 } from 'lucide-react'

interface MusicPlayerProps {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  isMinimized: boolean
  setIsMinimized: (minimized: boolean) => void
}

export default function MusicPlayer({ isPlaying, setIsPlaying, isMinimized, setIsMinimized }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [volume, setVolume] = useState(0.5)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  if (isMinimized) {
    return (
      <div className="glass-effect rounded-full p-3 hover-lift cursor-pointer" onClick={togglePlay}>
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </div>
    )
  }

  return (
    <div className="glass-effect rounded-xl p-4 hover-lift">
      <audio
        ref={audioRef}
        src="/relaxing-music.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold gradient-text">Relaxing Vibes</h3>
        <button
          onClick={() => setIsMinimized(true)}
          className="text-white/70 hover:text-white transition-colors"
        >
          <Minimize2 className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={togglePlay}
          className="glass-effect rounded-full p-2 hover:bg-white/20 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        
        <div className="flex items-center space-x-2 flex-1">
          <Volume2 className="w-4 h-4 text-white/70" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  )
}
