import { useState, useEffect } from 'react'
import { MapPin, Clock, Cloud, Sun, CloudRain, CloudSnow } from 'lucide-react'

interface WeatherData {
  location: string
  temperature: number
  condition: string
  time: string
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        // Get current time
        const now = new Date()
        const timeString = now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })

        // For demo purposes, using mock data
        // In production, you'd use a weather API like OpenWeatherMap
        const mockWeather: WeatherData = {
          location: 'San Francisco',
          temperature: 72,
          condition: 'Partly Cloudy',
          time: timeString
        }

        setWeather(mockWeather)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching weather:', error)
        setLoading(false)
      }
    }

    getWeatherData()
    const interval = setInterval(getWeatherData, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-5 h-5 text-yellow-400" />
      case 'rainy':
      case 'rain':
        return <CloudRain className="w-5 h-5 text-blue-400" />
      case 'snowy':
      case 'snow':
        return <CloudSnow className="w-5 h-5 text-blue-200" />
      default:
        return <Cloud className="w-5 h-5 text-gray-300" />
    }
  }

  if (loading) {
    return (
      <div className="glass-effect rounded-xl p-4 animate-pulse">
        <div className="w-32 h-16 bg-white/10 rounded"></div>
      </div>
    )
  }

  if (!weather) return null

  return (
    <div className="glass-effect rounded-xl p-4 hover-lift">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium">{weather.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4 text-purple-400" />
          <span className="text-sm">{weather.time}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {getWeatherIcon(weather.condition)}
          <span className="text-lg font-bold">{weather.temperature}°F</span>
        </div>
        <span className="text-sm text-white/70">{weather.condition}</span>
      </div>
    </div>
  )
}
