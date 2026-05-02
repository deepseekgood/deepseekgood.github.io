import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './lib/auth'
import { SettingsProvider } from './lib/settings'
import Header from './components/Header'
import Home from './pages/Home'
import Test from './pages/Test'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Counselors from './pages/Counselors'
import CounselorDetail from './pages/CounselorDetail'
import Appointment from './pages/Appointment'
import ArticleDetail from './pages/ArticleDetail'
import Profile from './pages/Profile'
import Records from './pages/Records'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Favorites from './pages/Favorites'
import History from './pages/History'
import About from './pages/About'
import Feedback from './pages/Feedback'
import Settings from './pages/Settings'

function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />
            <main className="pb-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
                <Route path="/test/quiz" element={<Quiz />} />
                <Route path="/test/result" element={<Result />} />
                <Route path="/counselors" element={<Counselors />} />
                <Route path="/counselors/:id" element={<CounselorDetail />} />
                <Route path="/appointment/:id" element={<Appointment />} />
                <Route path="/articles/:id" element={<ArticleDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/records" element={<Records />} />
                <Route path="/profile/orders" element={<Orders />} />
                <Route path="/profile/favorites" element={<Favorites />} />
                <Route path="/profile/history" element={<History />} />
                <Route path="/about" element={<About />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </Router>
      </SettingsProvider>
    </AuthProvider>
  )
}

export default App
