import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import NotFound from './pages/Page404';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import Merchant from './pages/Merchant';

import Coupon from './pages/Coupon';
import CreateCoupon from './sections/@dashboard/coupon/create';
import UpdateCoupon from './sections/@dashboard/coupon/update';

import Banner from './pages/Banner';
import BannerCreate from './sections/@dashboard/banner/create';
import BannerView from './sections/@dashboard/banner/view';
import BannerUpdate from './sections/@dashboard/banner/update';
import BannerImage from './sections/@dashboard/banner/image';
import Food from './pages/Food';
import CreateFood from './sections/@dashboard/Food/create';
import UpdateFood from './sections/@dashboard/Food/update';
import Cuisine from './pages/Cuisine';
import CreateCuisine from './sections/@dashboard/Cuisine/create';
import UpdateCuisine from './sections/@dashboard/Cuisine/update';
import Order from './pages/Order';
import Strings from './pages/String';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'merchant', element: <Merchant /> },
        { path: 'order', element: <Order /> },
        { path: 'banner', element: <Banner /> },
        { path: 'coupon', element: <Coupon /> },
        { path: 'coupon/create', element: <CreateCoupon /> },
        { path: 'coupon/update', element: <UpdateCoupon /> },

        { path: 'string', element: <Strings /> },
        { path: 'banner/create', element: <BannerCreate /> },
        { path: 'banner/view', element: <BannerView /> },
        { path: 'banner/update', element: <BannerUpdate /> },
        { path: 'banner/image', element: <BannerImage /> },
        { path: 'food', element: <Food /> },
        { path: 'food/create', element: <CreateFood /> },
        { path: 'food/update', element: <UpdateFood /> },
        { path: 'cuisine', element: <Cuisine /> },
        { path: 'cuisine/create', element: <CreateCuisine /> },
        { path: 'cuisine/update', element: <UpdateCuisine /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
