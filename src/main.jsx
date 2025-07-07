import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'animate.css';

import '@smastrom/react-rating/style.css';
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
         </div> */}
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>


  </StrictMode>,
)
