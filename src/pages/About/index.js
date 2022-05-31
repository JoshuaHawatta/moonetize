import ScrollUpButton from '../../components/ScrollUpBtn';
import { FaMoneyCheckAlt, FaShoppingCart, FaLock } from 'react-icons/fa';
import { Article, AboutSection, LeftSideSection, RightSideSection, CenterSection } from './styles';

const AboutJSX = () => {
  return(
      <Article>
        <AboutSection>
          <h1>O que é o Moonetize?</h1>
          <h3>É o gerenciador de gastos ideal para todas as ocasiões.</h3>
          <span> Vamos aprender a usar?</span>
        </AboutSection>

        <LeftSideSection>
          <FaMoneyCheckAlt />
          <h3>Vaquinha</h3>
          <p>A vaquinha faz o cálculo de quantas pessoas estão com você, dividindo o valor igualmente para cada um! Agora não tem mais desculpa para não rachar, hein?</p>
        </LeftSideSection>
          
        <RightSideSection>
          <FaShoppingCart />
          <h3>Carrinho</h3>
          <p>Já saiu e não queria gastar muito? Também resolvemos isso! Anote o preço e o nome do produto e nós fazemos o resto!</p>
        </RightSideSection>

        <CenterSection>
          <FaLock />
          <h3>Segurança</h3>
          <p>Todos os dados que você colocar aqui são temporários, então não se preocupe quanto à nossa segurança. No momento que você sair do app, todo seu registro será apagado, então nenhuma pessoa má intencionada roubará seus dados :)</p>
        </CenterSection>

        <ScrollUpButton /> 
      </Article>
  )
}

export default AboutJSX;