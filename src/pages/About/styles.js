import styled from 'styled-components';

export const Article = styled.article `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutSection = styled.section `
  padding: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--theme-color);

  h1 {
    font: 10rem "Overpass", Arial, sans-serif;
    margin-bottom: 2rem;
  }

  h3 {
    font: 3.5rem "Quick-sand", Arial, sans-serif;
    margin-bottom: 0.5rem;
  }

  span {
    font: 2.5rem "Urbanist";
    color: white;
  }
`;

export const LeftSideSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--theme-color);
  width: 100%;
  margin: 4rem 0;
  padding: 5rem;

  svg {
    font-size: 20rem;
    color: var(--background-color);
  }

  h3 {
    font: 7rem "Overpass", Arial, sans-serif;
    color: var(--background-color);
  }

  p {
    font: 2rem "Quick-sand", Arial, sans-serif;
    text-align: start;
    width: 50vw;
    color: var(--background-color);
  }
`;

export const RightSideSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin: 4rem 0;
  padding: 5rem;

  svg {
    font-size: 20rem;
    color: var(--theme-color);
  }

  h3 {
    font: 7rem "Overpass", Arial, sans-serif;
    color: var(--theme-color);
  }

  p {
    font: 2rem "Quick-sand", Arial, sans-serif;
    text-align: end;
    width: 50vw;
    color: var(--theme-color);
  }
`;

export const CenterSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--theme-color);
  width: 100%;
  margin: 4rem 0;
  padding: 5rem;

  svg {
    font-size: 20rem;
    color: var(--background-color);
  }

  h3 {
    font: 7rem "Overpass", Arial, sans-serif;
    color: var(--background-color);
  }

  p {
    font: 2rem "Quick-sand", Arial, sans-serif;
    text-align: start;
    width: 50vw;
    color: var(--background-color);
  }

`;