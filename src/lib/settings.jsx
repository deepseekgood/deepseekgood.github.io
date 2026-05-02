import { createContext, useContext, useEffect, useState } from 'react'

const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    fontSize: 'medium'
  })

  useEffect(() => {
    const savedSettings = localStorage.getItem('appSettings')
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      setSettings(prev => ({ ...prev, ...parsed }))
    }
  }, [])

  useEffect(() => {
    // 应用深色模式
    if (settings.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // 应用字体大小
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg')
    switch (settings.fontSize) {
      case 'small':
        document.documentElement.classList.add('text-sm')
        break
      case 'large':
        document.documentElement.classList.add('text-lg')
        break
      default:
        document.documentElement.classList.add('text-base')
    }
  }, [settings.darkMode, settings.fontSize])

  const updateSettings = (newSettings) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated)
    localStorage.setItem('appSettings', JSON.stringify(updated))
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
