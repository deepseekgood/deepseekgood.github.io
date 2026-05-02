import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'
import { useSettings } from '../lib/settings'
import { useEffect } from 'react'

export default function Settings() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const { settings, updateSettings } = useSettings()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const toggleNotifications = () => {
    updateSettings({ notifications: !settings.notifications })
  }

  const toggleDarkMode = () => {
    updateSettings({ darkMode: !settings.darkMode })
  }

  const setFontSize = (size) => {
    updateSettings({ fontSize: size })
  }

  const clearData = () => {
    if (confirm('确定要清除所有本地数据吗？这将删除测试记录、收藏等数据。')) {
      localStorage.clear()
      alert('数据已清除')
      window.location.reload()
    }
  }

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  if (!user) return null

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <span className="text-2xl">⚙️</span>
        设置
      </h1>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm mb-4">
        <h2 className="font-bold text-gray-800 dark:text-white mb-4">通知设置</h2>
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleNotifications}
        >
          <div>
            <div className="font-medium text-gray-700 dark:text-gray-200">消息通知</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">接收预约确认、系统消息等通知</div>
          </div>
          <div className={`w-14 h-8 rounded-full transition-colors relative ${settings.notifications ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'}`}>
            <div className={`w-6 h-6 bg-white rounded-full shadow-md absolute top-1 transition-transform ${settings.notifications ? 'left-7' : 'left-1'}`} />
          </div>
        </div>
      </div>

      {/* Display Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm mb-4">
        <h2 className="font-bold text-gray-800 dark:text-white mb-4">显示设置</h2>
        
        <div 
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={toggleDarkMode}
        >
          <div>
            <div className="font-medium text-gray-700 dark:text-gray-200">深色模式</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">减少眼睛疲劳</div>
          </div>
          <div className={`w-14 h-8 rounded-full transition-colors relative ${settings.darkMode ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'}`}>
            <div className={`w-6 h-6 bg-white rounded-full shadow-md absolute top-1 transition-transform ${settings.darkMode ? 'left-7' : 'left-1'}`} />
          </div>
        </div>

        <div>
          <div className="font-medium text-gray-700 dark:text-gray-200 mb-2">字体大小</div>
          <div className="flex gap-2">
            {['small', 'medium', 'large'].map(size => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  settings.fontSize === size
                    ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border-2 border-purple-500'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {size === 'small' ? '小' : size === 'medium' ? '中' : '大'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm mb-4">
        <h2 className="font-bold text-gray-800 dark:text-white mb-4">账号设置</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-medium text-gray-700 dark:text-gray-200">邮箱</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
            <button
              onClick={clearData}
              className="w-full py-2 text-left text-red-500 hover:text-red-600"
            >
              清除本地数据
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full py-3 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-xl font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
      >
        退出登录
      </button>
    </div>
  )
}
