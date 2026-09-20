import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { BusinessPage } from './pages/BusinessPage'
import { ComparePage } from './pages/ComparePage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ProductsPage } from './pages/ProductsPage'
import { StoreLocatorPage } from './pages/StoreLocatorPage'
import { SupportPage } from './pages/SupportPage'
import { TechnologyPage } from './pages/TechnologyPage'
import { WhyPage } from './pages/WhyPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:slug', element: <ProductPage /> },
      { path: 'why-airbrace', element: <WhyPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: 'store-locator', element: <StoreLocatorPage /> },
      { path: 'technology', element: <TechnologyPage /> },
      { path: 'compare', element: <ComparePage /> },
      { path: 'business', element: <BusinessPage /> },
      { path: 'privacy', element: <LegalPage kind="privacy" /> },
      { path: 'terms', element: <LegalPage kind="terms" /> },
      { path: 'warranty', element: <LegalPage kind="warranty" /> },
      { path: 'shipping', element: <LegalPage kind="shipping" /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
