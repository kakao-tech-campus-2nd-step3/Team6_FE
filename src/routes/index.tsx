import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/components/features/Layout'
import MainPage from '@/pages/MainPage'
import MyPage from '@/pages/MyPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
