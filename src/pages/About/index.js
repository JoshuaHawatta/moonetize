import ScrollUpButton from '../../components/ScrollUpBtn';
import './about.css';

const AboutJSX = () => {
  return(
      <section id='homeScreen'>

        <div id='introductionDiv'>
          <h1>O que é o Mooty?</h1>
          <h3>É o gerenciador de gastos ideal para todas as ocasiões.</h3>
          <span className='whiteText'> Vamos aprender a usar?</span>
        </div>

        <div className='leftSideText' id='passTheHatDiv'>
        <i className='fa-solid fa-scale-balanced fa-10x'></i>
          <h3 className='functionalityName'>Vaquinha</h3>
          <p>A vaquinha faz o cálculo de quantas pessoas estão com você, dividindo o valor igualmente para cada um! Agora não tem mais desculpa para não rachar, hein?</p>
        </div>
          
        <div className='rightSideText' id='marketDiv'>
          <i className='fa-solid fa-cart-shopping fa-10x'></i>
          <h3 className='functionalityName'>Mercado</h3>
          <p>Você já foi no mercado e ficou com medo de estourar seu orçamento? Ou pior: esqueceu quanto dinheiro estava levando? Também resolvemos isso para você! Anote o nome, quantidade e preço de cada item e deixe que o Mooty faça o resto!</p>
        </div>

        <div className='scrollUpDiv'>
          <ScrollUpButton />
        </div>
        
      </section>
  )
}

export default AboutJSX;