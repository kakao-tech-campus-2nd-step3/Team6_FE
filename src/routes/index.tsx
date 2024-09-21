import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import MyPage from '../pages/MyPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
