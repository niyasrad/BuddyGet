import styled from "@emotion/styled";

export interface ColorTypes {
    color?: 'primary' | 'secondary' | 'text' | 'background',
    flushed?: boolean
}

export const TitleText = styled.h1<ColorTypes>`
    font-size: 1.3em;
    font-weight: 500;
    color: ${props => props.color ? `var(--colors-${props.flushed ? `${props.color}-flush` : props.color})` : `var(--colors-text${props.flushed ? '-flush' : ''})`};
`

export const SubtitleText = styled.p<ColorTypes>`
    display: inline;
    font-size: 1em;
    letter-spacing: 0.05em;
    font-weight: 300;
    margin-bottom: 1rem;
    color: ${props => props.color ? `var(--colors-${props.flushed ? `${props.color}-flush` : props.color})` : `var(--colors-text${props.flushed ? '-flush' : ''})`};
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`