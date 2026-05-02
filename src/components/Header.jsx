import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../lib/auth'

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/test', label: '测试', icon: '🧠' },
  { path: '/counselors', label: '咨询', icon: '💬' },
  { path: '/profile', label: '我的', icon: '👤' },
]

export default function Header() {
  const location = useLocation()
  const { user, signOut } = useAuth()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <span className="text-xl sm:text-2xl">🌿</span>
            <span className="gradient-text hidden sm:inline" style={{background: 'linear-gradient(135deg, #fff, #e0e7ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>心灵导航</span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-white/20 text-white shadow-inner'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-sm sm:text-base">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
            {user ? (
              <button
                onClick={signOut}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <span className="text-sm sm:text-base">🚪</span>
                <span className="hidden sm:inline">退出</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium bg-white text-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-md"
              >
                <span className="text-sm sm:text-base">✨</span>
                <span>登录</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
