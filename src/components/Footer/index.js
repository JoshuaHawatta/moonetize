import './footer.css';

const Footer = () => {
  return(
    <footer id='footerContent'>
      <div className='socialMedias' id='gitHubDiv'>
        <i className='fa-brands fa-github fa-3x'></i>
        <a href='https://github.com/JoshuaHawatta' target='_blank'>GitHub</a>
      </div>

      <div className='socialMedias' id='whatsappDiv'>
        <i className='fa-brands fa-whatsapp fa-3x'></i>
        <a href='https://wa.me/5561998784278' target='_blank'>WhatsApp</a>
      </div>

      <div className='socialMedias' id='instagramDiv'>
        <i className='fa-brands fa-instagram fa-3x'></i>
        <a href='https://www.instagram.com/joshuahawatta/' target='_blank'>Instagram</a>
      </div>
    </footer>
  )
}

export default Footer;