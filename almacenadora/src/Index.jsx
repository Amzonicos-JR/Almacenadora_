import React, { useState, createContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage';
// import { UsersPage } from './pages/UsersPage/UsersPage'
// import { LeasesPage } from './pages/LeasesPage/LeasesPage'
import App from './App'
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
// import { AddCellar } from './pages/CellarPage/AddCellar';
// import { AddAccountPage } from './pages/AccountPage/AddAccountPage';


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
                },
                {
                    path: '/dashboard',
                    element: loggedIn ? <DashboardPage></DashboardPage> : <LoginPage></LoginPage>,
                    children:[
                        // {
                        //     path: 'users',
                        //     element: <UsersPage></UsersPage>
                        // },                    
                    ] 
                },
                // {
                //     path: '/add-account',
                //     element: <AddAccountPage></AddAccountPage>
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
