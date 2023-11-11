import styled from "@emotion/styled"

export const DashboardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2rem;

    max-width: 90%;
    width: 45rem;

    margin: 6rem auto;
    padding: 5rem;
    box-sizing: border-box;
    border-radius: 1rem;

    background-color: var(--colors-primary-flush);
    border: 1px solid var(--colors-text-flush);

    @media only screen and (max-width: 990px) {
        flex-direction: column;
        width: 100%;
        padding: 2rem;
    }
`

export const DashboardPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: left;
    width: 50%;

    @media only screen and (max-width: 990px) {
        width: 100%;
    }
`

export const DashboardRedirects = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

