import './footer.css';

const Footer = () => {
  return(
    <footer>
      <div className='social-media' id='social-whatsapp'>
        <i className='fa-brands fa-whatsapp fa-2x'></i>
        <a href='https://wa.me/5561998784278' target='_blank'>WhatsApp</a>
      </div>
      <div className='social-media' id='social-instagram'>
        <i className='fa-brands fa-instagram fa-2x'></i>
        <a href='https://www.instagram.com/joshuahawatta/' target='_blank'>Instagram</a>
      </div>
      <div className='social-media' id='social-github'>
        <i className='fa-brands fa-github fa-2x'></i>
        <a href='https://github.com/JoshuaHawatta' target='_blank'>GitHub</a>
      </div>
    </footer>
  )
}

export default Footer;