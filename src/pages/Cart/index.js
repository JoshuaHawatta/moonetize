import { useContext, useState, useCallback, memo } from 'react';
import { LoggedUserContext } from '../../contexts/Logged-user';

import { 
  CartSection, 
  AddItemDiv, 
  ProductInputDiv, 
  TotalItemsDiv, 
  EndPurchaseDiv } from './styles.js';

const CartJSX = () => {
  const { userMoney, setUserMoney } = useContext(LoggedUserContext);
  const [product, setProduct] = useState('');
  const [cartItems, setCartItems] = useState([]);

  return(
    <CartSection>
      <h1>Carrinho</h1>

      <AddItemDiv>
        <ProductInputDiv>
          <input 
            type='text'
            name='product-name'
            value={ product } 
            onChange={ e => setProduct(e.target.value) }
            autoComplete='off'
            placeholder='Doritos' />
            
          <input type='number' min='1' name='quantity' />

          <button>Adicionar</button>
        </ProductInputDiv>        
      </AddItemDiv>

      <TotalItemsDiv>
        { cartItems.map(item => {
            return(
              <div>
                <h3>{ item.name }</h3>
                <span>{ cartItems.length +1 }</span>
                <p>{ `- R$${item.price}` }</p>
              </div>
            )
          }) }

        <EndPurchaseDiv>
        <h2>{ `Restante total: R$${userMoney[1]}` }</h2>
        <button>Encerrar compra</button>
        </EndPurchaseDiv>

      </TotalItemsDiv>
    </CartSection>
  )
}
  
export default memo(CartJSX);