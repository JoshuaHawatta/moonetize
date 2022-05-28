//HOOKS_AND_CONTEXTS
import { useState, useCallback, memo, useContext } from 'react';
import { ErrorMessagesContext } from '../../contexts/ErrorMessage';
import { LoggedUserContext } from '../../contexts/LoggedUser';

//MASKS_AND_REGEX
import { showMoneyAsCurrency, numberConverter } from '../../currency';
import { priceInputRegex, nameInputRegex } from './regex';

//STYLING 
import { AiFillDelete } from 'react-icons/ai';
import { CartSection, LeftSideDiv, RightSideDiv, BuyListDiv, EndPurchaseDiv } from './styles.js';

const CartJSX = () => {
  const [inputValues, setInputValues] = useState({ name: '', price: '' });
  const [products, setProducts] = useState([]);
  const [endPurchase, setEndpurchase] = useState(false);

  const { errorMessage, setErrorMessage } = useContext(ErrorMessagesContext);
  const { userMoney, setUserMoney } = useContext(LoggedUserContext);

  const handleInputChange = e => setInputValues({...inputValues, [e.target.name]: e.target.value});

  const handleAdd = useCallback(input => {
    if(nameInputRegex.test(inputValues.name) && priceInputRegex.test(inputValues.price)) {
      setProducts(state => [...state, { name: input.name, price: input.price, id: Date.now() }]);
      
      setInputValues({ name: '', price: '' });
      setEndpurchase(false);
      setErrorMessage('')
    }else {
      setErrorMessage('Preencha todos os campos para adicionar o produto!')
      return
    }
  }, [inputValues.name, inputValues.price, setErrorMessage])

  const handleRemove = id => setProducts(state => state.filter(item => item.id !== id));

  const TOTAL_PRICE = products.reduce((pile, accItem) => pile + numberConverter(accItem.price), 0);

  const handleEndPurchase = useCallback(() => {
    setUserMoney(userMoney - TOTAL_PRICE);
    setEndpurchase(true);
    setProducts([])
  }, [TOTAL_PRICE, userMoney, setUserMoney]);

  return(
    <CartSection>
      <h1>Carrinho</h1>
      <h2>Dinheiro: { showMoneyAsCurrency(userMoney) }</h2>

      <LeftSideDiv>
        <p>Coloque os valores exatos para não haver diferença do caixa para o seu Carrinho!</p>
        <label htmlFor='product-name'>Produto</label>
        <input
          id='product-name'
          type='text'
          name='name'
          onChange={ handleInputChange }
          value={ inputValues.name }
          autoComplete='off'
          placeholder='ex: Mouse Gamer' />
      
          <label htmlFor='product-price'>R$</label>
          <input 
            type='text'
            id='product-price'
            name='price'
            onChange={ handleInputChange }
            value={ inputValues.price }
            autoComplete='off'
            placeholder='ex: 200' />
          <button onClick={ () => handleAdd(inputValues) } >Adicionar</button>
          <span>{ errorMessage }</span>
      </LeftSideDiv>

      <RightSideDiv>
        <BuyListDiv>
          {
            products.map((item, index) => {
              const { name, id, price } = item;

              return(
                <div key={ id }>
                  <span>{ index +1 }</span>
                  <h3>{ name } | Valor: { showMoneyAsCurrency(numberConverter(price)) }</h3>
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
                <span>Valor da compra: { showMoneyAsCurrency(TOTAL_PRICE) }</span>
                <button onClick={ () => handleEndPurchase() }>Encerrar compra</button>
              </> 
          }
        </EndPurchaseDiv>
      </RightSideDiv>
    </CartSection>
  )
}

export default memo(CartJSX);