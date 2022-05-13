import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return(
    <footer>
      <a href='https://www.linkedin.com/in/joshua-hawatta' target='_blank' rel='norefferer'>
        Feito por Joshua Hawatta
      </a>

      <div className='social-media'>
        <a href='https://www.linkedin.com/in/joshua-hawatta' target='_blank'rel='norefferer'>
          <BsLinkedin className='icons' />
          LinkedIn</a>

        <a href='https://www.instagram.com/joshuahawatta' target='_blank' rel='norefferer'>
          <BsInstagram className='icons' />
          Instagram</a>

        <a href='https://github.com/JoshuaHawatta' target='_blank' rel='norefferer'>
          <BsGithub className='icons' />
          GitHub</a>
      </div>

      <Link to='/privacy-policy' rel='norefferer'>Política de privacidade</Link>
    </footer>
  )
}

export default Footer;