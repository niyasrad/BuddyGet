import styled from "@emotion/styled";

export const InputBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem 0;
    width: 100%;
`

export const InputBoxLabel = styled.p`
    font-size: 0.9em;
    font-weight: 300;
    color: gray;
`

export const InputBoxInput = styled.input`
    margin-top: 0.5rem;
    width: 100%;
    height: 2.5rem;
    color: var(--colors-text);
    background-color: var(--colors-secondary-flush);
    border-radius: 0.5rem;
    border: 1px solid var(--colors-secondary);
    padding: 0.2rem 0.6rem;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: 300;
    outline: none;
    transition: 0.3s;

    &:focus {
        border: 1px solid var(--colors-primary);
    }
`

export const InputBoxError = styled.div`
    transition: all 0.3s ease-in-out;
    height: auto;

    span {
        font-size: 0.8em;
        font-weight: 300;
        color: red;
    }
`