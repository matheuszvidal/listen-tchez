import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TchezProvider from './context/TchezProvider.tsx';
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sobre',
    element: <About />
  },
  {
    path: '/contato',
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TchezProvider>
      <RouterProvider router={router} />
    </TchezProvider>
  </React.StrictMode>,
)
