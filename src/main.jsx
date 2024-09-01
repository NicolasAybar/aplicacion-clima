import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheatherApp } from './components/WheatherApp'
import './components/styles/weatherStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < WheatherApp/>
  </StrictMode>,
)
