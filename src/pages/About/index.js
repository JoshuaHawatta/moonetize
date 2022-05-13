import ScrollUpButton from '../../components/ScrollUpBtn';
import { FaMoneyCheckAlt, FaShoppingCart } from 'react-icons/fa';
import './about.css';

const AboutJSX = () => {
  return(
      <article>
        <div className='introductionDiv'>
          <h1>O que é o Moonetize?</h1>
          <h3>É o gerenciador de gastos ideal para todas as ocasiões.</h3>
          <span className='whiteText'> Vamos aprender a usar?</span>
        </div>

        <div className='leftSideText'>
          <FaMoneyCheckAlt className='money-icon' />
          <h3>Vaquinha</h3>
          <p>A vaquinha faz o cálculo de quantas pessoas estão com você, dividindo o valor igualmente para cada um! Agora não tem mais desculpa para não rachar, hein?</p>
        </div>
          
        <div className='rightSideText'>
          <FaShoppingCart className='cart-icon' />
          <h3>Carrinho</h3>
          <p>Já saiu e não queria gastar muito? Também resolvemos isso! Anote o nome, quantidade e preço do produto e nós fazemos o resto!</p>
        </div>

        <div className='scrollUpDiv'>
          <ScrollUpButton />
        </div>  
      </article>
  )
}

export default AboutJSX;