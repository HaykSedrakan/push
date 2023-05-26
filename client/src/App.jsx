import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBarLayout from './Layouts/outlet'
import LoginPage from './components/LoginPage/LoginPage'
import NotFound from './components/ErrorPage/ErrorPage'
import ProductDetails from './components/productDetails/ProductDetails'
import Settings from './components/Settings/Settings'
import ProductsPage from './components/ProductsPage/ProductsPage'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import AdminCategories from './components/AdminDashboard/AdminCategories/AdminCategories'
import AdminBanners from './components/AdminDashboard/AdminBanners/AdminBanners'
import MyFavorites from './components/MyFavorites/MyFavorites'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBarLayout />} />
        <Route path="/login/auth" element={<LoginPage />} />{' '}
        <Route path="/product/details/:id" element={<ProductDetails />} />
        <Route path="/user/:id/account/settings" element={<Settings />} />
        <Route path="/my/favorites/products" element={<MyFavorites />} />
        <Route path="/product/search" element={<ProductsPage />} />
        <Route path="/admin/admindashboard" element={<AdminDashboard />}>
          <Route
            path="/admin/admindashboard/categories"
            element={<AdminCategories />}
          />
          <Route
            path="/admin/admindashboard/mainBaners"
            element={<AdminBanners />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />{' '}
      </Routes>
    </>
  )
}

export default App
