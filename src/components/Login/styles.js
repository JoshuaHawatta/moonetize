import styled from 'styled-components';

export const LoginSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-color);
  height: 100vh;
  padding: 4rem;

  h2 {
    color: var(--theme-color);
    font-size: 4.8rem;
    margin: 0.2rem 0;
  }
`;

export const InputFieldDiv = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;

  button {
    border: 0.2rem solid var(--theme-color);
    font-size: 1.5rem;
    margin: 1rem;
    padding: 2.5rem;
    transition: all 0.2s;
    color: var(--theme-color);
    background-color: var(--background-color);
    
    /*EFFECTS*/
    :hover {
      cursor: pointer;
      color: var(--background-color);
      background-color: var(--theme-color);
    }
  }
`;

export const Field = styled.div `
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  label {
    font-size: 3rem;
    color: var(--theme-color);
  }

  input {
    background: none;
    outline: none;
    border: none;
    width: 100%;
    font-size: 2rem;
    height: 2rem;
    padding: 2rem 1rem;
    transition: all 0.2s ease;
    color: var(--theme-color);
    border-bottom: 0.2rem solid var(--theme-color);

    /*EFFECTS*/
     &:focus{
      font-size: 2.5rem;
      color: var(--background-color);
      animation: fillBackground 0.8s ease-out forwards;

      ::placeholder { color: var(--background-color); }
    }
  }

  span {
    padding-top: 1.5rem;
    font: 1.8rem 'Overpass', Arial, sans-serif;
    color: var(--theme-color);
  }
`;