import React, { useState, createContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage';
import App from './App'
// import { AccountPage } from './pages/AccountPage/addAccountPage';

export const AuthContex = createContext();
export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)

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
                }
                // {
                //     path: '/account',
                //     element: <AccountPage></AccountPage>
                // }
            ]
        }
    ])
    return (
        <AuthContex.Provider value={{ loggedIn, setLoggedIn }}>
            <RouterProvider router={routes}></RouterProvider>
        </AuthContex.Provider>
    )
}
