import { useState, useCallback, memo } from 'react';
import { CartSection, AddDiv, ProductInputDiv, TotalItemsDiv, EndPurchaseDiv } from './styles.js';

const CartJSX = () => {
  const userData = JSON.parse(sessionStorage.getItem('User')) || [];
  const { userMoney } = userData;

  const [inputValues, setInputValues] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value })
  }, [inputValues])

  const handleAddProduct = useCallback(item => {
    setCartItems(prevState => [...prevState, 
      {
        name: item.name,
        productPrice: item.productPrice,
        quantity: item.quantity,
        id: Date.now()
      }])
    setInputValues('');
  }, [cartItems])

  const handleRemoveProduct = useCallback(id => {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  }, [cartItems])

  const ShowTotalMoneySpent = () => {
    const totalMoneySpent = cartItems
      .map(item => Number(item.productPrice.replace(',', '.')))
      .reduce((acc, currentItem) => acc + currentItem, 0);

    const numberWithComma = String(totalMoneySpent).replace('.', ',');

    return(
      <span>{ `R$${numberWithComma}` }</span>
    )
  }

  return(
    <CartSection>
      <h1>Carrinho</h1>
      <h2>{ `Dinheiro atual: R$${userMoney[1]}` }</h2>

      <AddDiv>
        <ProductInputDiv>
          <input 
            type='text'
            name='name'
            onChange={ handleInputChange }
            value={ inputValues.name || '' }
            autoComplete='off'
            placeholder='Doritos' />

          <input 
            type='number' 
            min='1' 
            name='quantity' 
            value={ inputValues.quantity || '' }
            onChange={ handleInputChange } />

          <input 
            type='text'
            name='productPrice'
            onChange={ handleInputChange }
            value={ inputValues.productPrice || '' }
            autoComplete='off'
            placeholder='00,00' />

          <button onClick={() => handleAddProduct(inputValues) } >Adicionar</button>
        </ProductInputDiv>        
      </AddDiv>

      <TotalItemsDiv>
        { cartItems.map((item, index) => {
            return(
              <div key={ item.id }>
                <p>{index +1}</p>
                <h3>{ item.name }</h3>
                <span>{ `Quant.(${item.quantity})` }</span>
                <p>{ item.productPrice }</p>
                <button onClick={() => handleRemoveProduct(item.id) }></button>
              </div>
            )
          }) }

        <EndPurchaseDiv>
          <ShowTotalMoneySpent />
        <button>Encerrar compra</button>
        </EndPurchaseDiv>

      </TotalItemsDiv>
    </CartSection>
  )
}
  
export default memo(CartJSX);