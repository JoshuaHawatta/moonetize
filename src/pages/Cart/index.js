//HOOKS_AND_CONTEXTS
import { useState, useCallback, memo, useContext } from 'react';
import { ErrorMessagesContext } from '../../contexts/ErrorMessage';
import { LoggedUserContext } from '../../contexts/LoggedUser';
import { CartPriceContext } from '../../contexts/CartPrice';

//MASKS_AND_REGEX
import { showMoneyAsCurrency, CART_MASKED_PRICE_INPUT } from '../../currency';
import { nameInputRegex } from './regex';

//STYLING 
import { IoMdTrash } from 'react-icons/io';
import { 
  CartArticle,
  UserInfoSection,
  ScreenHalfsSection,
  LeftSideDiv,
  RightSideDiv,
  BuyListDiv,
  ProductDiv,
  EndPurchaseDiv } from './styles.js';

const CartJSX = () => {
  const { cartPrice, setCartPrice } = useContext(CartPriceContext);
  const { userMoney, setUserMoney } = useContext(LoggedUserContext);
  const { errorMessage, setErrorMessage } = useContext(ErrorMessagesContext);

  const [inputValues, setInputValues] = useState({});
  const [products, setProducts] = useState([]);
  const [endPurchase, setEndpurchase] = useState(false);

  const handleInputChange = e => setInputValues({...inputValues, [e.target.name]: e.target.value});

  const handleAdd = useCallback((input) => {
    if(nameInputRegex.test(input.name) && cartPrice !== 0) {
      setProducts(state => [...state, { name: input.name, price: cartPrice, id: Date.now() }]);
      
      setInputValues({ name: '' });
      setCartPrice(0);
      setEndpurchase(false);
      setErrorMessage('')
    }else {
      setErrorMessage('Primeiro coloque o valor, depois o nome e aí adicione no seu carrinho!')
      return
    }
  }, [inputValues.name, inputValues.price, setErrorMessage, setCartPrice])

  const handleRemove = id => setProducts(state => state.filter(item => item.id !== id));

  const TOTAL_PRICE = products.reduce((acumulator, item) => acumulator + item.price, 0);

  const handleEndPurchase = useCallback(() => {
    setUserMoney(userMoney - TOTAL_PRICE);
    setEndpurchase(true);
    setProducts([])
  }, [TOTAL_PRICE, userMoney, setUserMoney]);

  return(
    <CartArticle>
      <UserInfoSection>
        <h1>{ showMoneyAsCurrency(userMoney) }</h1>
      </UserInfoSection>

    <ScreenHalfsSection>

      <LeftSideDiv>
        <label htmlFor='product-price'>Valor do produto</label>
        <CART_MASKED_PRICE_INPUT name='price' id='product-price' />

        <label htmlFor='product-name'>Nome do produto</label>
        <input
          id='product-name'
          type='text'
          name='name'
          onChange={ handleInputChange }
          value={ inputValues.name || ''}
          autoComplete='off'
          placeholder='ex: Mouse Gamer' />

          <button onClick={ () => handleAdd(inputValues) } >Adicionar produto</button>
          <span>{ errorMessage }</span>
      </LeftSideDiv>

    { products.length === 0 
      ? null 
      : <RightSideDiv>
          <BuyListDiv>
            { products.map(({ name, id, price })=> {
              return(
                <ProductDiv key={ id }>
                  <h3>{ name } { showMoneyAsCurrency(price) }</h3>
                  <button onClick={ () => handleRemove(id) }><IoMdTrash /></button>
                </ProductDiv>
              )}) }
            </BuyListDiv>
    
            <EndPurchaseDiv>
              { endPurchase === true 
                ? null
                : <>
                    <span>{ showMoneyAsCurrency(TOTAL_PRICE) }</span>
                    <button onClick={ () => handleEndPurchase() }>Encerrar compra</button>
                  </> 
              }
            </EndPurchaseDiv>
        </RightSideDiv> } 
    </ScreenHalfsSection>
    </CartArticle>
  )
}

export default memo(CartJSX);