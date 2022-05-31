import styled from 'styled-components';

export const CartArticle = styled.article `
  width: 100%;
  padding: 0 4rem;
  height: 90vh;
`;

export const UserInfoSection = styled.section `
  margin-bottom: 5rem;

  /*COLORS*/
  h1 {
    font: 4rem 'Overpass', Arial, sans-serif;
    color: var(--theme-color);
    text-align: start;
  }
`;

export const ScreenHalfsSection = styled.section `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  margin-top: 2rem;
`;

export const LeftSideDiv = styled.div `
  /*FLEXBOX*/
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 50vw;
  
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

    /*EFFECTS*/
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

    /*EFFECTS*/
    &:hover {
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
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  flex-direction: column;
  width: 35vw;
  border-radius: 2rem;
  padding: 2rem;
  border: 0.2rem solid var(--theme-color);
`;

export const BuyListDiv = styled.div `
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProductDiv = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 2.5rem;

  h3 {
    font: 2.3rem 'Overpass', Arial, sans-serif;
    margin-right: 2rem;
    color: var(--theme-color);
    border-bottom: 0.1rem solid var(--theme-color);
  }

  button {
    background: none;
    transform: translateY(0.2rem);
    
    svg {
      background: none;
      font-size: 2.5rem;
      color: var(--theme-color);
    }
  }
`;

export const EndPurchaseDiv = styled.div `
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 0.2rem solid var(--theme-color);
  margin-top: 1.5rem 0;
  padding: 2rem 0;

  span {
    font-size: 3rem;
    color: var(--theme-color);
  }

  button {
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
    border: 0.1rem solid var(--theme-color);
    border-radius: 2rem;
    background-color: var(--background-color);
    transition: all 0.2s;
    color: var(--theme-color);

    /*EFFECTS*/
    &:hover {
      cursor: pointer;
      color: var(--background-color);
      background-color: var(--theme-color);
    }
  }
`;