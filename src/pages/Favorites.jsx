import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { articles } from '../data'
import { useAuth } from '../lib/auth'

export default function Favorites() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }

    const stored = localStorage.getItem('favorites')
    if (stored) {
      const favIds = JSON.parse(stored)
      const favArticles = articles.filter(a => favIds.includes(a.id))
      setFavorites(favArticles)
    }
  }, [user, navigate])

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter(a => a.id !== id)
    setFavorites(newFavorites)
    const favIds = newFavorites.map(a => a.id)
    localStorage.setItem('favorites', JSON.stringify(favIds))
  }

  if (!user) return null

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">⭐</span>
        我的收藏
      </h1>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">⭐</div>
          <p className="text-gray-500 mb-4">暂无收藏文章</p>
          <Link
            to="/"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
          >
            去浏览文章
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map(article => (
            <div key={article.id} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl flex-shrink-0">
                  📝
                </div>
                <div className="flex-1">
                  <Link to={`/articles/${article.id}`}>
                    <h3 className="font-bold text-gray-800 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{article.desc}</p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded-lg font-medium">{article.tag}</span>
                      <span>{article.time}</span>
                    </div>
                    <button
                      onClick={() => removeFavorite(article.id)}
                      className="text-red-400 hover:text-red-600 text-sm"
                    >
                      取消收藏
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
