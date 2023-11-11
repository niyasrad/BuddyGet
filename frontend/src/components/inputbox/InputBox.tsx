import { InputBoxError, InputBoxInput, InputBoxLabel, InputBoxWrapper } from "./InputBox.styles";

interface InputBoxProps {
    value: string,
    name: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: string | undefined,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    type?: string
}

export default function InputBox({ value, name, label, onChange, error, onBlur, type }: InputBoxProps) {
    return (
        <InputBoxWrapper>
            <InputBoxLabel>{label}</InputBoxLabel>
            <InputBoxInput 
                type={type ? type : "text"}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur ? onBlur : () => {}}
            />
            {error && 
                <InputBoxError>
                    <span>{error}</span>
                </InputBoxError>
            }
        </InputBoxWrapper>
    )
}