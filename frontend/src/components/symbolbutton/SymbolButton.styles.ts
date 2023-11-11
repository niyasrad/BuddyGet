import styled from "@emotion/styled";
import { ColorTypes } from "../../themes/Theme";

export const SymbolButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    width: 7rem;
    max-width: 100%;
    cursor: pointer;
`

export const SymbolButtonBox = styled.div<ColorTypes>`
    width: 100%;
    border: 1px solid ${props => props.color ? `var(--colors-${props.flushed ? `${props.color}-flush` : props.color})` : `var(--colors-text${props.flushed ? '-flush' : ''})`};
    border-radius: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    font-size: 1em;
    color: ${props => props.color ? `var(--colors-${props.flushed ? `${props.color}-flush` : props.color})` : `var(--colors-text${props.flushed ? '-flush' : ''})`};
    background-color: white;
`
