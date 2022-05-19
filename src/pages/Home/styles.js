import styled from 'styled-components';

export const MainWrapper = styled.main `
  height: 70vh;
`;

export const UserHubSection = styled.section `
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 4rem;
`;

export const UserDataDiv = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 25vw;

  h1, p {
    font-family: 'Overpass', Arial, sans-serif;
    color: var(--theme-color);
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 2.2rem;
  }
`;

export const HideOrShowMoneyDiv = styled.div `
  max-width: 75vw;
  
  color: var(--theme-color);
  font-family: 'Overpass';

  svg {
    font-size: 3rem;
    animation: pulse .3s ease-in forwards;
    cursor: pointer;
    transition: 0.2s ease;
    color: #FFFFFF;

    &:hover {
      color: var(--theme-color);
    }
  }
`;

export const FunctionalitiesSection = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FunctionalityDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--theme-color);
  margin: 4rem;
  padding: 2rem;
  width: 35vw;
  height: 25rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    span, svg, h2 {
      color: var(--theme-color);
    }

    background-color: var(--background-color);
    border: 0.2rem solid var(--theme-color);
    animation: spinCard 0.5s ease .3s forwards;
  }

  svg, h2, span {
    color: var(--background-color);
  }

  h2 {
    font: 4rem 'Overpass', Arial, sans-serif;
  }

  span {
    font-size: 1.8rem;
  }

  svg {
    font-size: 10rem;
    margin-bottom: 0.5rem;
  }
`;