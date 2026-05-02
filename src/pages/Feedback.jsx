import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'

const feedbackTypes = [
  { value: 'suggestion', label: '功能建议', icon: '💡' },
  { value: 'bug', label: '问题反馈', icon: '🐛' },
  { value: 'content', label: '内容反馈', icon: '📝' },
  { value: 'other', label: '其他', icon: '💬' },
]

export default function Feedback() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [type, setType] = useState('suggestion')
  const [content, setContent] = useState('')
  const [contact, setContact] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!content.trim()) {
      alert('请输入反馈内容')
      return
    }

    const feedback = {
      type,
      content,
      contact,
      userId: user?.id,
      timestamp: Date.now()
    }

    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]')
    feedbacks.unshift(feedback)
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks))

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">感谢您的反馈！</h2>
        <p className="text-gray-500 mb-6">我们会认真对待每一条反馈，不断改进我们的服务。</p>
        <button
          onClick={() => navigate('/profile')}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
        >
          返回个人中心
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">💬</span>
        意见反馈
      </h1>

      {/* Feedback Type */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
        <h2 className="font-bold text-gray-800 mb-4">反馈类型</h2>
        <div className="grid grid-cols-2 gap-3">
          {feedbackTypes.map(item => (
            <button
              key={item.value}
              onClick={() => setType(item.value)}
              className={`flex items-center gap-2 p-3 rounded-xl transition-all ${
                type === item.value
                  ? 'bg-purple-100 border-2 border-purple-500 text-purple-700'
                  : 'bg-gray-50 border-2 border-transparent text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Feedback Content */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
        <h2 className="font-bold text-gray-800 mb-4">反馈内容</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="请详细描述您的问题或建议..."
          maxLength={500}
          className="w-full h-40 bg-gray-50 rounded-xl p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div className="text-right text-xs text-gray-400 mt-1">{content.length}/500</div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
        <h2 className="font-bold text-gray-800 mb-4">联系方式（选填）</h2>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="手机号/邮箱/微信号，方便我们联系您"
          className="w-full h-12 bg-gray-50 rounded-xl px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
      >
        提交反馈
      </button>
    </div>
  )
}
