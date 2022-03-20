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
      class="btn btn-scroll"> 
      <i className="fa-solid fa-circle-chevron-up fa-5x"></i> 
    </button>
  )
}

export default ScrollUpButton;