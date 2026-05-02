import { Link } from 'react-router-dom'
import { enneagramTypes, typeColors, counselors, articles } from '../data'

const banners = [
  { title: '探索你的九型人格', desc: '了解自己，发现内在潜能', bg: 'from-violet-500 via-purple-500 to-fuchsia-500', icon: '🔮' },
  { title: '专业心理咨询', desc: '遇见更好的自己', bg: 'from-cyan-500 via-blue-500 to-indigo-500', icon: '💚' },
  { title: '心理健康知识', desc: '每天学一点心理学', bg: 'from-amber-400 via-orange-500 to-red-500', icon: '📚' },
]

const quickEntries = [
  { path: '/test', label: '九型人格测试', icon: '🧠', color: 'from-violet-400 to-purple-500', desc: '发现你的人格类型' },
  { path: '/counselors', label: '心理咨询', icon: '💬', color: 'from-cyan-400 to-blue-500', desc: '专业心理支持' },
  { path: '/profile/records', label: '测试记录', icon: '📊', color: 'from-emerald-400 to-teal-500', desc: '查看历史记录' },
  { path: '/profile', label: '个人中心', icon: '👤', color: 'from-amber-400 to-orange-500', desc: '管理个人信息' },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="mb-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">
            <span className="gradient-text">心灵导航</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">探索内心世界，遇见更好的自己</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {banners.map((banner, i) => (
            <div key={i} className={`bg-gradient-to-br ${banner.bg} rounded-2xl p-6 text-white card-hover cursor-pointer`}>
              <div className="text-4xl mb-3">{banner.icon}</div>
              <h2 className="text-xl font-bold mb-2">{banner.title}</h2>
              <p className="text-sm opacity-90">{banner.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Entry */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          快速入口
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickEntries.map((entry, i) => (
            <Link
              key={i}
              to={entry.path}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-purple card-hover text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${entry.color} flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                {entry.icon}
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-1">{entry.label}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{entry.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Enneagram Types */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            九型人格
          </h2>
          <Link to="/test" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 font-medium">
            了解更多 →
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
          {Object.entries(enneagramTypes).map(([type, info]) => (
            <Link
              key={type}
              to="/test"
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-purple card-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg"
                style={{ 
                  backgroundColor: typeColors[type],
                  boxShadow: `0 4px 15px ${typeColors[type]}40`
                }}
              >
                {type}
              </div>
              <span className="text-xs text-gray-700 dark:text-gray-300 text-center font-medium">{info.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <span className="text-2xl">📖</span>
            心理文章
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/articles/${article.id}`}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-purple card-hover"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl flex-shrink-0">
                  📝
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">{article.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{article.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                    <span className="bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-lg font-medium">{article.tag}</span>
                    <span>{article.time}</span>
                    <span className="flex items-center gap-1">
                      <span>👁️</span>
                      {article.readCount}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Counselors */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <span className="text-2xl">👨‍⚕️</span>
            推荐咨询师
          </h2>
          <Link to="/counselors" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 font-medium">
            更多 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {counselors.slice(0, 3).map(c => (
            <Link
              key={c.id}
              to={`/counselors/${c.id}`}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-purple card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {c.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-800 dark:text-white text-lg">{c.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{c.title}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {c.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1.5 rounded-full font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <span>📊</span>
                    {c.cases}案例
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⭐</span>
                    {c.rating}
                  </span>
                </div>
                <span className="text-red-500 font-bold text-lg">¥{c.price}<span className="text-xs text-gray-400 font-normal">/次</span></span>
              </div>
              {c.isOnline && (
                <div className="mt-3 flex items-center gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-900 rounded-lg px-3 py-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  在线可咨询
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
        <p>🌿 心灵导航 - 探索内心世界，遇见更好的自己</p>
        <p className="mt-2">专业心理健康服务平台</p>
      </footer>
    </div>
  )
}
