import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NavbarDrawerContextProvider } from './context/NavbarDrawerContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarDrawerContextProvider>
        <App />
      </NavbarDrawerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
