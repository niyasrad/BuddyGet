import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { SignFormDLogo, SignFormMLogo, SignFormTitle, SignFormWrapper } from "./SignForm.styles"

import logoSmall from "../../assets/logo-small.svg"
import logoLarge from "../../assets/logo-large.svg"
import { useGlobalContext } from "../../contexts/global.context"

interface SignFormProps {
    children: React.ReactNode,
    title: string
}

export default function SignForm({ children, title }: SignFormProps) {

    const { isLoggedIn, isLoading } = useGlobalContext()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(isLoading, isLoggedIn)
        if (!isLoading && isLoggedIn) {
            navigate("/")
        }
    }, [isLoading, isLoggedIn])

    return (
        <SignFormWrapper>
            <SignFormMLogo src={logoSmall} alt="BuddyGet Logo" />
            <SignFormDLogo src={logoLarge} alt="BuddyGet Logo" />
            <SignFormTitle>{title}</SignFormTitle>
            {children}
        </SignFormWrapper>
    )
}