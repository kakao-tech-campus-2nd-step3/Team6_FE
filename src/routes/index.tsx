import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/components/features/Layout/MainLayout'
import { ProfileQuestionLayout } from '@/components/features/Layout/ProfileQuestionLayout'
import ErrorPage from '@/pages/ErrorPage'
import GroupPage from '@/pages/GroupPage'
import LoginPage from '@/pages/LoginPage'
import LoginRedirectPage from '@/pages/LoginRedirectPage'
import MainPage from '@/pages/MainPage'
import MyPage from '@/pages/MyPage'
import ProfileQuestionPage from '@/pages/ProfileQuestionPage'

import { ProtectedRoute } from './ProtectedRoute'

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
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/mypage',
            element: <MyPage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/login/redirect',
        element: <LoginRedirectPage />,
      },
      {
        path: '/grouppage',
        element: <GroupPage />,
      },
    ],
  },
  {
    path: '/',
    element: <ProfileQuestionLayout />,
    children: [{ path: '/profile-question', element: <ProfileQuestionPage /> }],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
