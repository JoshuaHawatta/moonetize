import styled from 'styled-components';

export const CartSection = styled.section `
  width: 100%;
  padding: 0 4rem;
  height: 90vh;

  /*COLORS*/
  h1, h2 {
    color: var(--theme-color);
    text-align: start;
  }

  /*FONTS*/
  h1, h2 { font: 4.5rem 'Overpass', Arial, sans-serif; }
  h2 { font-size: 2rem }
`;

export const LeftSideDiv = styled.div `
  /*FLEXBOX*/
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 50vw;
  padding: 4rem 0;
  margin-top: 2rem;
  
  /*COLORS*/
  input, label, button, p, span { color: var(--theme-color); }

  /*ELEMENTS*/
  p {
    font: 1.5rem 'Overpass', Arial, sans-serif;
    max-width: 50vw;
    margin-bottom: 2rem;
  }

  label { font-size: 3rem; }

  input, button { width: 35vw; }
  
  input {
    background: none;
    outline: none;
    border: none;
    font-size: 2.5rem;
    padding: 1rem;
    margin: 2rem 0;
    height: 5rem;
    border-bottom: 0.1rem solid var(--theme-color);
    transition: all .3s ease;

    &:focus{
      font-size: 3rem;
      color: var(--theme-color);
      animation: createBorder .5s ease forwards;
      ::placeholder { color: var(--background-color); }
    }
  }

  button {
    text-align: center;
    font-size: 1.5rem;
    padding: 2.5rem;
    border: 0.2rem solid var(--theme-color);
    background-color: var(--background-color);
    transition: all 0.2s;

    :hover {
      cursor: pointer;
      color: var(--background-color);
      background-color: var(--theme-color);
    }
  }

  span {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

export const RightSideDiv = styled.div `
  background-color: brown;
`;

export const BuyListDiv = styled.div `
  background-color: cyan;

`;

export const EndPurchaseDiv = styled.div `
  background-color: pink;
`;