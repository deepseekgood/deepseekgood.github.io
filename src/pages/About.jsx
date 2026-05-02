import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">ℹ️</span>
        关于我们
      </h1>

      {/* Logo Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white text-center mb-6">
        <div className="text-5xl mb-4">🌿</div>
        <h2 className="text-2xl font-bold mb-2">心灵导航</h2>
        <p className="text-sm opacity-90">探索内心世界，遇见更好的自己</p>
      </div>

      {/* About Content */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="font-bold text-gray-800 mb-4">关于我们</h3>
        <p className="text-gray-600 mb-4">
          心灵导航是一个专业的心理健康服务平台，致力于为大学生和年轻人提供优质的心理健康服务。
        </p>
        <p className="text-gray-600 mb-4">
          我们相信，每个人都值得被理解和关爱。通过科学的心理测评工具和专业的心理咨询服务，
          我们希望帮助你更好地了解自己，找到内心的方向。
        </p>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="font-bold text-gray-800 mb-4">我们的服务</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl flex-shrink-0">
              🧠
            </div>
            <div>
              <h4 className="font-medium text-gray-800">九型人格测试</h4>
              <p className="text-sm text-gray-500">科学的人格测评工具，帮助你了解自己的性格特点</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">
              💬
            </div>
            <div>
              <h4 className="font-medium text-gray-800">心理咨询</h4>
              <p className="text-sm text-gray-500">专业的心理咨询师团队，提供一对一心理咨询服务</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl flex-shrink-0">
              📚
            </div>
            <div>
              <h4 className="font-medium text-gray-800">心理健康知识</h4>
              <p className="text-sm text-gray-500">丰富的心理健康文章，帮助你学习心理学知识</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="font-bold text-gray-800 mb-4">联系我们</h3>
        <div className="space-y-3 text-gray-600">
          <p className="flex items-center gap-2">
            <span>📧</span>
            <span>邮箱：support@xinlingdaohang.com</span>
          </p>
          <p className="flex items-center gap-2">
            <span>📱</span>
            <span>微信：xinlingdaohang</span>
          </p>
          <p className="flex items-center gap-2">
            <span>🕐</span>
            <span>工作时间：周一至周五 9:00-18:00</span>
          </p>
        </div>
      </div>

      {/* Version */}
      <div className="text-center text-sm text-gray-400">
        <p>心灵导航 v1.0.0</p>
        <p className="mt-1">© 2024 心灵导航 All Rights Reserved</p>
      </div>
    </div>
  )
}
