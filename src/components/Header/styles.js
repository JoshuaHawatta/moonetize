import styled from 'styled-components';

export const HeaderWrapper = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  background: var(--background-color);

`;

export const LogoDiv = styled.div `
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 25vw;

  a {
    color: var(--theme-color);
    font: 5rem 'Quick-sand', Arial, sans-serif;
    text-decoration: none;
    margin: 0.5rem;
  }

  img {
    width: 9.5rem;
    margin: 0.5rem;

  }
`;

export const NavBarLinks = styled.nav `
  display: flex;
  align-items: flex-end;
  padding: 0 2rem;

  a {
    color: var(--theme-color);
    font: 1.5rem 'Overpass', Arial, sans-serif;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    max-width: 75vw;
    transition: all 0.2s;
    border-radius: 0.5rem;

    /*EFFECTS*/
    &:focus, &:hover {
      color: var(--background-color);
      background-color: var(--theme-color);
    }
  }
`;