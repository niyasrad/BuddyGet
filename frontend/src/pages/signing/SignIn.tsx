import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import SignForm from "../../components/signform/SignForm"
import InputBox from "../../components/inputbox/InputBox"
import Button from "../../components/button/Button"
import { SignNavigate } from "./Signing.styles"
import { toast } from "react-toastify"
import { useGlobalContext } from "../../contexts/global.context"

interface SignInForm {
    username: string,
    password: string,
    error: {
        username: string | undefined,
        password: string | undefined
    }
}

export default function SignIn() {

    const navigate = useNavigate()
    const { setUsername, setIsLoggedIn } = useGlobalContext()

    const [form, setForm] = useState<SignInForm>({
        username: "",
        password: "",
        error: {
            username: undefined,
            password: undefined
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            error: {
                ...form.error,
                [e.target.name]: undefined
            }
        })
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setForm({
                ...form,
                error: {
                    ...form.error,
                    [e.target.name]: "This field is required"
                }
            })
        }
    }

    const handleSubmit = () => {

        for (const [key, value] of Object.entries(form)) {
            if (key !== "error") {
                if (value.length === 0) {
                    setForm({
                        ...form,
                        error: {
                            ...form.error,
                            [key]: "This field is required"
                        }
                    })
                    return
                }
            }
        }

        axios.post(import.meta.env.VITE_API_URL + "/api/user/sign-in", {
            username: form.username,
            password: form.password
        })
        .then(res => {
            toast.success("Sign-In Successful!")
            localStorage.setItem("token", res.data.info.token)
            axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.info.token
            setUsername!(res.data.info.username)
            setIsLoggedIn!(true)
            navigate("/")
        })
        .catch(err => {
            toast.error(err.response.data.message)
        })

    }


    return (
        <SignForm title="Account Sign-In">
            <InputBox
                value={form.username}
                label="Username"
                name="username"
                onChange={handleChange}
                error={form.error.username}
                onBlur={handleBlur}
            />
            <InputBox
                value={form.password}
                label="Password"
                name="password"
                onChange={handleChange}
                error={form.error.password}
                onBlur={handleBlur}
                type="password"
            />
            <SignNavigate>Don't have an account? <span onClick={() => navigate('/sign-up')}>Create One</span></SignNavigate>
            <Button
                text="Sign-In"
                onClick={handleSubmit}
            />
        </SignForm>
    )
}