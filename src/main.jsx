import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NavbarDrawerContextProvider } from './context/NavbarDrawerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarDrawerContextProvider>
      <App />
    </NavbarDrawerContextProvider>
  </StrictMode>,
)
