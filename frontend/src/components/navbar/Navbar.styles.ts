import styled from "@emotion/styled";

export const NavbarWrapper = styled.div`
    width: 100%;
    padding: 0.5rem 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: var(--colors-background);

    @media only screen and (max-width: 990px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const NavbarLogo = styled.img`
    height: 3rem;
    width: auto;
    object-fit: contain;
    cursor: pointer;
`

export const NavbarLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-self: center;

    @media only screen and (max-width: 990px) {
        display: none;
    }
`

export const NavbarLink = styled.a<{ current?: boolean }>`
    text-decoration: none;
    color: ${props => (props.current ? "var(--colors-secondary)" : "var(--colors-primary)")};
    font-size: 1em;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: var(--colors-secondary);
    }
`

export const NavbarUser = styled.div`
    display: flex;
    align-items: center;
    justify-self: end;
    gap: 0.5rem;

    svg {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        width: 2rem;
        height: 2rem;

        &:hover {
            color: var(--colors-secondary);
        }
    }
`

export const NavbarName = styled.div`
    font-size: 1em;
    font-weight: 400;
    color: grey;
    user-select: none;
`