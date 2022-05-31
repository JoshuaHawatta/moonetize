import styled from 'styled-components';

export const FooterWrapper = styled.footer `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background-color: var(--theme-color);

  a {
    font: 1.4rem 'Overpass', Arial, sans-serif;
    opacity: 0.8;
    margin: 0 0.5rem;
    color: var(--background-color);
    transition: all 0.2s ease;

    /*EFFECTS*/
    &:hover {
      opacity: 1;
      cursor: pointer;
      transform: translateY(-0.5rem);
    }
  }
`;

export const SocialMediaSection = styled.section `
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 1.5rem;
  transition: all 0.2s ease;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font: 1.4rem 'Overpass', Arial, sans-serif;
    opacity: 0.8;
    margin: 1.5rem 2rem;
    color: var(--background-color);
    transition: all 0.2s ease;

    svg {
      font-size: 2rem;
    text-align: center;
    }

    /*EFFECTS*/
    &:hover {
      opacity: 1;
      cursor: pointer;
      transform: translateY(-0.5rem);
    }
  }
`;