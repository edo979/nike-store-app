import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import App from './App'
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { Search } from './pages/Search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error page, not found!!!</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: 'products/:id', element: <ProductPage /> },
      { path: 'products/search', element: <Search /> },
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
