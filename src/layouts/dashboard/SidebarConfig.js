// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/dashboard/app',
  //   icon: getIcon('eva:pie-chart-2-fill')
  // },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'merchant',
    path: '/dashboard/merchant',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'banner',
    path: '/dashboard/banner',
    icon: getIcon('ph:flag-banner-fill')
  },
  {
    title: 'food',
    path: '/dashboard/food',
    icon: getIcon('emojione-monotone:pot-of-food')
  },
  {
    title: 'cuisine',
    path: '/dashboard/cuisine',
    icon: getIcon('dashicons:food')
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: getIcon('carbon:order-details')
  },
  {
    title: 'Strings',
    path: '/dashboard/string',
    icon: getIcon('ic:sharp-policy')
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill')
  // },
  
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill')
  // },

  {
    title: 'Coupon',
    path: '/dashboard/coupon',
    icon: getIcon('ri:coupon-2-fill')
  },

 {
    title: 'Withdrawal',
    path: '/dashboard/withdrawal',
    icon: getIcon('uil:money-withdrawal')
  },

  {
    title: 'Notify',
    path: '/dashboard/notify',
    icon: getIcon('ic:baseline-notification-add')
  },

  {
    title: 'Loyalty',
    path: '/dashboard/loyalty',
    icon: getIcon('ic:baseline-loyalty')
  },
  
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill')
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill')
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill')
  }
];

export default sidebarConfig;
