import { useState, useCallback, memo, useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { LoggedUserContext } from '../../contexts/LoggedUser';
import { CartSection, LeftSideDiv, RightSideDiv, BuyListDiv, EndPurchaseDiv } from './styles.js';

const numberConverter = string => Number(string.replace(',', '.'))

const CartJSX = () => {
  const { userMoney, setUserMoney } = useContext(LoggedUserContext);
  const [inputValues, setInputValues] = useState({});
  const [products, setProducts] = useState([]);
  const [endPurchase, setEndpurchase] = useState(false);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;

    setInputValues({...inputValues, [name]: value})
  }, [inputValues])

  const handleAdd = useCallback(input => {
    setProducts(state => [...state, { name: input.name, price: input.price, id: Date.now() }]);
    
    setInputValues({ name: '', price: '' });
    setEndpurchase(false)
  }, [products, inputValues, setEndpurchase])

  const handleRemove = useCallback(id => {
    setProducts(state => state.filter(item => item.id !== id))
  }, [products])

  const buyPrice = products.reduce((pile, accItem) => pile + numberConverter(accItem.price), 0);

  const handleEndPurchase = () => {
    setUserMoney(userMoney - buyPrice);
    setEndpurchase(true);
    setProducts([]);
  };

  return(
    <CartSection>
      <h1>Carrinho</h1>
      <h2>Dinheiro: R${ userMoney.toFixed(2).replace('.', ',') }</h2>

      <LeftSideDiv>
        <div>
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
            name='price'
            onChange={ handleInputChange }
            value={ inputValues.price || '' }
            autoComplete='off'
            placeholder='00,00' />

          { inputValues.name === '' && inputValues.price === ''
            ? <></>
            : <button onClick={ () => handleAdd(inputValues) } >Adicionar</button>
          }
        </div>        
      </LeftSideDiv>

      <RightSideDiv>
        <BuyListDiv>
          {
            products.map((item, index) => {
              const { name, id, price } = item;
              const wholePrice = numberConverter(item.price);
              
              return(
                <div key={ id }>
                  <h3>{ index +1 } | { name }</h3>
                  <p>Valor: R${ price } Total: R${ wholePrice.toFixed(2).replace('.', ',') }</p>
                  <button onClick={ () => handleRemove(id) }><AiFillDelete /></button>
                </div>
              )
            })
          }
        </BuyListDiv>

        <EndPurchaseDiv>
          { products.length === 0 || endPurchase === true 
            ? <></>
            : <>
                <span>Valor da compra: R${ buyPrice.toFixed(2).replace('.', ',') }</span>
                <button onClick={ () => handleEndPurchase() }>Encerrar compra</button>
              </> 
          }
        </EndPurchaseDiv>
      </RightSideDiv>
    </CartSection>
  )
}

export default memo(CartJSX);