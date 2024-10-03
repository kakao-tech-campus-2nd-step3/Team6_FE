import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/components/features/Layout/MainLayout'
import { ProfileQuestionLayout } from '@/components/features/Layout/ProfileQuestionLayout'
import MainPage from '@/pages/MainPage'
import MyPage from '@/pages/MyPage'
import ProfileQuestionPage from '@/pages/ProfileQuestionPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
  {
    path: '/',
    element: <ProfileQuestionLayout />,
    children: [{ path: '/profile-question', element: <ProfileQuestionPage /> }],
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
