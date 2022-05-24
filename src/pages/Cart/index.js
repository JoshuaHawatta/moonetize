import { useState, useCallback, memo, useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { LoggedUserContext } from '../../contexts/Logged-user';
import { CartSection, AddDiv, ProductInputDiv, TotalItemsDiv } from './styles.js';

const convertStringToNumber = string => Number(string.replace(',', '.'))

const CartJSX = () => {
  const { userMoney, setUserMoney } = useContext(LoggedUserContext);
  const [inputValues, setInputValues] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [endPurchase, setEndpurchase] = useState(false);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;

    setInputValues({...inputValues, [name]: value})
  }, [inputValues])

  const handleAdd = useCallback(({ name, productPrice }) => {
    setCartItems(prevState => [...prevState, 
      {
        name: name, 
        productPrice: 
        productPrice, id: Date.now()
      }]
    )
    setInputValues('');
  }, [cartItems, inputValues])

  const handleRemove = useCallback(id => {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  }, [cartItems])

  const totalPrice = cartItems.reduce((acumulator, actualItem) => {
    return acumulator + convertStringToNumber(actualItem.productPrice);
  }, 0);

  const handleEndPurchase = () => {
    setUserMoney(userMoney - totalPrice);
    setEndpurchase(true);
  };

  return(
    <CartSection>
      <h1>Carrinho</h1>
      <h2>Dinheiro restante: R${ userMoney.toFixed(2) }</h2>
      { cartItems.length === 0 ? <></> : <h2>Valor da compra: R${ totalPrice.toFixed(2) }</h2> }

      <AddDiv>
        <ProductInputDiv>
          <label htmlFor='product-name'>Produto</label>
          <input
            id='product-name'
            type='text'
            name='name'
            onChange={ handleInputChange }
            value={ inputValues.name || '' }
            autoComplete='off'
            placeholder='Doritos' />

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
        {
          cartItems.map((item, index) => {
            const { name, id, productPrice } = item;
            const wholePrice = convertStringToNumber(item.productPrice);
        
            return(
              <div key={ id }>
                <span>{ index +1 }</span>
                <h3>{ name }</h3>
                <p>Valor: R${ productPrice } Total: R${ wholePrice.toFixed(2).replace('.', ',') }</p>
                <button onClick={() => handleRemove(id) }><AiFillDelete /></button>
              </div>
            )
          })
        }
      </TotalItemsDiv>

      <div>
      { cartItems.length === 0 || endPurchase === true 
        ? <></> 
        : <button onClick={() => handleEndPurchase()}>Encerrar compra</button> }        
      </div>

    </CartSection>
  )
}
  
export default memo(CartJSX);