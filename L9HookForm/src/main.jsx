import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './from.jsx'
import ZodForm from './zodform.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ZodForm/>
  </StrictMode>,
)
