import { ButtonText, ButtonWrapper } from "./Button.styles"

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
    return (
        <ButtonWrapper
            onClick={onClick}
        >
            <ButtonText>{text}</ButtonText>
        </ButtonWrapper>
    )

}