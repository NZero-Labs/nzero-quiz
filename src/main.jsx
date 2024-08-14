import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QuizProvider } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <QuizProvider>
    <BrowserRouter basename='/nzero-quiz'>
    <App />
  </BrowserRouter>
  </QuizProvider>
  ,
)
