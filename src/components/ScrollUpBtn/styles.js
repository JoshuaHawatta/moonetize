import styled from 'styled-components';

export const ScrollUpSection = styled.section `
  background: none;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  button {
    border: none;
    background: none;
    font-size: 5rem;
    padding: 2rem;
    color: #FFFFFF;
    transition: all 0.2s;

    /*EFFECTS*/
    &:hover {
      cursor: pointer;
      color: var(--theme-color);
    }
  }
`;