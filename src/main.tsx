import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import App from './App'
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { Search } from './pages/Search'
import { ErrorPage } from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products/:id', element: <ProductPage /> },
      {
        path: 'products/search',
        element: <Search />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)
