import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Navbar from "../../components/navbar/Navbar"
import SymbolButton, { SymbolButtonProps } from "../../components/symbolbutton/SymbolButton"
import { SubtitleText, TitleText, Wrapper } from "../../themes/Theme"
import { DashboardPanel, DashboardRedirects, DashboardWrapper } from "./Dashboard.styles"
import { useGlobalContext } from "../../contexts/global.context"


const redirectLinks: Array<SymbolButtonProps> = [
    {
        name: "Budget",
        abbrevation: "BG",
        symbol: "$",
        path: "/budget",
        color: "secondary"
    },
    {
        name: "Spends",
        abbrevation: "TXN",
        symbol: "$",
        path: "/spends",
        color: "primary"
    }
]

interface SummaryType {
    budget: number,
    spends: number,
    percentageSpent: number,
    exceeded: boolean
}

export default function Dashboard() {

    const { isLoggedIn, isLoading, handleLogOut } = useGlobalContext()
    const navigate = useNavigate()

    const [summary, setSummary] = useState<SummaryType>({
        budget: 0,
        spends: 0,
        percentageSpent: 0,
        exceeded: false
    })

    useEffect(() => {

        if (isLoading) return
        if (!isLoggedIn) {
            navigate('/sign-in')
        }

        axios.get(import.meta.env.VITE_API_URL + "/api/summary/info")
        .then(res => {
            const { budget, spends, percentageSpent, exceeded } = res.data.summary
            setSummary({
                budget,
                spends,
                percentageSpent,
                exceeded
            })
        })
        .catch(() => {
            handleLogOut!()
            navigate('/sign-in')
        })

    }, [isLoading, isLoggedIn])

    return (
        <Wrapper>
            <Navbar />
            <DashboardWrapper>
                <DashboardPanel>
                    <TitleText>Welcome to BuddyGet!</TitleText>
                    <SubtitleText flushed>You have spent, around <SubtitleText color="secondary">${summary.spends}</SubtitleText> this month, <SubtitleText color="text">{summary.exceeded? summary.percentageSpent - 100 : summary.percentageSpent}%</SubtitleText> 
                    <SubtitleText color={summary.exceeded ? "primary": "secondary"}>{summary.exceeded? " Greater than " : " Lesser than "}</SubtitleText> your monthly budget wants! {summary.exceeded ? "Please adjust your ways!" : "Keep going!"}</SubtitleText> 
                </DashboardPanel>
                <DashboardPanel>
                    <TitleText flushed>What's from here?</TitleText>
                    <DashboardRedirects>
                    {
                        redirectLinks.map((redir) => (
                            <SymbolButton 
                                key={redir.name}
                                path={redir.path}
                                symbol={redir.symbol}
                                abbrevation={redir.abbrevation}
                                name={redir.name}
                                color={redir.color}
                            />
                        ))
                    }
                    </DashboardRedirects>
                </DashboardPanel>
            </DashboardWrapper>
        </Wrapper>
    )
}