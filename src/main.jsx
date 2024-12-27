import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import LoadingScreen from './components/animations/loading/LoadingScreen.jsx'
import MainPage from './components/rainpaul/MainPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/rainpaul" element={<MainPage />} />
    </Routes>
  </Router>
)
