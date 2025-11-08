import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Components/Router.jsx'
import ContextProv from './Components/Context/ContextProv.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProv>
      <RouterProvider router={router}>

      </RouterProvider>
    </ContextProv>
  </StrictMode>,
)
