import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SignUp from "./pages/signing/SignUp"
import SignIn from "./pages/signing/SignIn"
import { GlobalContext, globalDefaults } from "./contexts/global.context"
import { useLayoutEffect, useState } from "react"
import axios from "axios"
import Dashboard from "./pages/dashboard/Dashboard"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    }
])


export default function App() {

    const [isLoading, setIsLoading] = useState<boolean>(globalDefaults.isLoading)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(globalDefaults.isLoggedIn)
    const [username, setUsername] = useState<string>(globalDefaults.username)

    const handleLogOut = () => {
        localStorage.removeItem("token")
        delete axios.defaults.headers.common["Authorization"]
        setIsLoggedIn(globalDefaults.isLoggedIn)
        setUsername(globalDefaults.username)
        setIsLoading(false)
    }

    useLayoutEffect(() => {

        const token = localStorage.getItem("token")
        if (!token) {
            handleLogOut()
        }

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        axios.get(import.meta.env.VITE_API_URL + "/api/user/verify")
        .then(res => {
            setIsLoggedIn(true)
            setUsername(res.data.info.username)
            setIsLoading(false)
            toast.success("Welcome back, " + res.data.info.username)
        })
        .catch(() => {
            handleLogOut()
        })

    }, [])

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
                isLoggedIn,
                setIsLoggedIn,
                username,
                setUsername,
                handleLogOut
            }}
        >
            <RouterProvider router={router} />
            <ToastContainer />
        </GlobalContext.Provider>
    )
}