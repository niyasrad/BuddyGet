import { SubtitleText, TitleText } from "../../themes/Theme"
import { SymbolButtonBox, SymbolButtonWrapper } from "./SymbolButton.styles"

export interface SymbolButtonProps {
    path: string,
    symbol: string,
    abbrevation: string,
    name: string,
    color: "primary" | "secondary" 
}

export default function SymbolButton({ symbol, abbrevation, name, color }: SymbolButtonProps) {

    return (
        <SymbolButtonWrapper onClick={() => {}}>
            <SymbolButtonBox color={color}>
                <SubtitleText color={color}>{abbrevation}</SubtitleText>
                <TitleText color={color}>{symbol}</TitleText>
            </SymbolButtonBox>
            <SubtitleText>{name}</SubtitleText>
        </SymbolButtonWrapper>
    )
}