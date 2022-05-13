import './button.css';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollUpButton = () => {
  const scrollUp = () => window.scrollTo({ top: 0,behavior: 'smooth' })

  return (
    <button onClick={ scrollUp } className="btn-scroll"><IoIosArrowUp /></button>
  )
}

export default ScrollUpButton;