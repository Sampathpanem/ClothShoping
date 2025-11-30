import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import Mainpage from './pages/Mainpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Mainpage/>
    <App />
  </StrictMode>,
)
