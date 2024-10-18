import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@/pages/ErrorPage'
import GroupPage from '@/pages/GroupPage'
import { MainLayout } from '@/pages/Layout/MainLayout'
import { ProfileQuestionLayout } from '@/pages/Layout/ProfileQuestionLayout'
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
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <MainPage />,
          },
          {
            path: '/mypage/:userId',
            element: <MyPage />,
          },
          {
            path: '/grouppage',
            element: <GroupPage />,
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
