import './button.css';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollUpButton = () => {
  const scrollUp = () => window.scrollTo({ top: 0,behavior: 'smooth' })

  return (
    <div className='scrollUpDiv'>
      <button onClick={ scrollUp } className="btn-scroll"><IoIosArrowUp /></button>
    </div>
  )
}

export default ScrollUpButton;