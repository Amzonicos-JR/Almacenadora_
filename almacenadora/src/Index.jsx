import React, { useState, createContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage';
import { UsersPage } from './pages/UsersPage/UsersPage'
import App from './App'
<<<<<<< HEAD
=======
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
>>>>>>> asumpango-2018373
// import { AccountPage } from './pages/AccountPage/addAccountPage';

export const AuthContext = createContext();
export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: ''
      })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound/>,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
<<<<<<< HEAD
=======
                },
                {
                    path: '/dashboard',
                    element: loggedIn ? <DashboardPage></DashboardPage> : <LoginPage></LoginPage>,
                    children:[
                        {
                            path: 'users',
                            element: <UsersPage></UsersPage>
                        }
                    ]
>>>>>>> asumpango-2018373
                }
                // {
                //     path: '/account',
                //     element: <AccountPage></AccountPage>
                // }
            ]
        }
    ])
    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes}></RouterProvider>
        </AuthContext.Provider>
    )
}
