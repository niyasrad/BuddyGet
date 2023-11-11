import styled from "@emotion/styled";

export const SignFormWrapper = styled.div`
    display: flex;
    width: 18rem;
    max-width: 90%;
    height: 100%;
    max-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
`

export const SignFormMLogo = styled.img`
    display: none;
    width: 10rem;
    max-width: 90%;
    margin-bottom: 1rem;

    @media only screen and (max-width: 990px) {
        display: block;
    }
`

export const SignFormDLogo = styled.img`
    display: block;
    width: 15rem;
    max-width: 80%;
    margin-bottom: 1rem;

    @media only screen and (max-width: 990px) {
        display: none;
    }
`

export const SignFormTitle = styled.h1`
    font-size: 1.3em;
    font-weight: 700;
    color: var(--colors-text);
    margin-bottom: 1rem;
`