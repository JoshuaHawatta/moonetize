import { ScrollUpSection } from './styles.js';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollUpButton = () => {
  const scrollUp = () => window.scrollTo({ top: 0,behavior: 'smooth' })

  return (
    <ScrollUpSection>
      <button onClick={ scrollUp }><IoIosArrowUp /></button>
    </ScrollUpSection>
  )
}

export default ScrollUpButton;