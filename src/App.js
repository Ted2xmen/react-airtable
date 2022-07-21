import { Routes, Route } from 'react-router-dom'
// Pages
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bookmarks" element={<AboutPage />} />
        <Route path="youtube" element={<VideoPage />} />
      </Routes>
    </div>
  )
}

export default App
