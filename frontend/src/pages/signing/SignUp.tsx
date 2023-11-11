import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

import SignForm from "../../components/signform/SignForm"
import InputBox from "../../components/inputbox/InputBox"
import Button from "../../components/button/Button"
import { SignNavigate } from "./Signing.styles"
import { useGlobalContext } from "../../contexts/global.context"

interface SignUpForm {
    username: string;
    password: string;
    confirmPassword: string;
    error: {
        username: string | undefined;
        password: string | undefined;
        confirmPassword: string | undefined;
    }

}

export default function SignUp() {

    const navigate = useNavigate()
    const { setUsername } = useGlobalContext()

    const [form, setForm] = useState<SignUpForm>({
        username: "",
        password: "",
        confirmPassword: "",
        error : {
            username: undefined,
            password: undefined,
            confirmPassword: undefined,
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

        if (form.password !== form.confirmPassword) {
            setForm({
                ...form,
                error: {
                    ...form.error,
                    confirmPassword: "Passwords do not match"
                }
            })
            return
        }

        axios.post(import.meta.env.VITE_API_URL + "/api/user/sign-up", {
            username: form.username,
            password: form.password
        })
        .then(res => {
            toast.success("Account created successfully")
            localStorage.setItem("token", res.data.info.token)
            axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.info.token
            setUsername!(res.data.info.username)
            navigate("/")
        })
        .catch(err => {
            toast.error(err.response.data.message)
        })

    }

    return (
        <SignForm title="Account Sign-Up">
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
            <InputBox
                value={form.confirmPassword} 
                label="Confirm Password" 
                name="confirmPassword"
                onChange={handleChange} 
                error={form.error.confirmPassword} 
                onBlur={handleBlur}
                type="password"
            />
            <SignNavigate>Already have an account? <span onClick={() => navigate('/sign-in')}>Log In</span></SignNavigate>
            <Button
                text="Sign-Up"
                onClick={handleSubmit}
            />
        </SignForm>
    )
}