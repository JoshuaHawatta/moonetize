import './button.css';

const ScrollUpButton = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      onClick={ scrollUp } 
      id='scrollBtn'> 
      <i className="fa-solid fa-circle-up fa-5x"></i> 
    </button>
  )
}

export default ScrollUpButton;