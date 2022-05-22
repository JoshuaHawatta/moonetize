import { useState, useCallback, memo, useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { LoggedUserContext } from '../../contexts/Logged-user';
import { CartSection, AddDiv, ProductInputDiv, TotalItemsDiv, EndPurchaseDiv } from './styles.js';

const CartJSX = () => {
  const [inputValues, setInputValues] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [endPurchase, setEndPurchase] = useState(false);
  const { setUserMoney, userMoney } = useContext(LoggedUserContext);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value })
  }, [inputValues])

  const handleAdd = useCallback(item => {
    setCartItems(prevState => [...prevState, 
      {
        name: item.name,
        productPrice: item.productPrice,
        quantity: item.quantity,
        id: Date.now(),
      }])

    setInputValues('');
  }, [cartItems])

  const handleRemove = useCallback(id => {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  }, [cartItems])

  const ShowCartProducts = () => {
    const productsInCart = cartItems.map((item, index) => {
      const { name, id, productPrice, quantity } = item;
      const WHOLE_PRICE = Number(productPrice.replace(',', '.')) * quantity;

      return(
        <div key={ id }>
          <p>{index +1}</p>
          <h3>{ name }</h3>
          <p>Valor: R${ productPrice } Quant.({ quantity }) Total: R${ WHOLE_PRICE.toFixed(2) }</p>
          <button onClick={() => handleRemove(id) }><AiFillDelete /></button>
        </div>
      )
    })

    return (
      <>
        { productsInCart }
      </>
    )
  }

  const ShowPurchasePrice = () => {
    const cartTotalPrice = cartItems
      .map(item => Number(item.productPrice.replace(',', '.') * item.quantity))
      .reduce((acumulator, actualValue) => acumulator + actualValue, 0);

    const showFullPrice = cartTotalPrice.toFixed(2).replace('.', ',');

    return (
      <span>preço final da compra:R${ showFullPrice }</span>
    )
  }

  const HandleEndPurchase = useCallback(() => {
    const cartTotalPrice = cartItems
      .map(item => Number(item.productPrice.replace(',', '.') * item.quantity))
      .reduce((acumulator, actualValue) => acumulator + actualValue, 0);

    setUserMoney(prevState => [...prevState, userMoney[0] - cartTotalPrice])
  }, [userMoney])

  return(
    <CartSection>
      <h1>Carrinho</h1>
      <AddDiv>
        <ProductInputDiv>
          <input 
            type='text'
            name='name'
            onChange={ handleInputChange }
            value={ inputValues.name || '' }
            autoComplete='off'
            placeholder='Doritos' />

          <input type='number' 
            min='1' 
            name='quantity' 
            value={ inputValues.quantity || '' }
            onChange={ handleInputChange } />

          <label htmlFor='product-price'>R$</label>
          <input 
            type='text'
            id='product-price'
            name='productPrice'
            onChange={ handleInputChange }
            value={ inputValues.productPrice || '' }
            autoComplete='off'
            placeholder='00,00' />

          <button onClick={ () => handleAdd(inputValues) } >Adicionar</button>
        </ProductInputDiv>        
      </AddDiv>

      <TotalItemsDiv>
        <ShowCartProducts />

        <EndPurchaseDiv>
          <ShowPurchasePrice />
        </EndPurchaseDiv>
      </TotalItemsDiv>
    </CartSection>
  )
}
  
export default memo(CartJSX);