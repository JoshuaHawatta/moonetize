import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { FooterWrapper, SocialMediaSection } from './styles';

const Footer = () => {
  return(
    <FooterWrapper>
      <a href='https://www.linkedin.com/in/joshua-hawatta' target='_blank' rel="noreferrer">
        Feito por Joshua Hawatta
      </a>

      <SocialMediaSection>
        <a href='https://www.linkedin.com/in/joshua-hawatta' target='_blank'rel="noreferrer">
          <BsLinkedin alt='linkedin' />
          LinkedIn</a>

        <a href='https://www.instagram.com/joshuahawatta' target='_blank' rel="noreferrer">
          <BsInstagram alt='instagram' />
          Instagram</a>

        <a href='https://github.com/JoshuaHawatta' target='_blank' rel="noreferrer">
          <BsGithub alt='gitHub' />
          GitHub</a>
      </SocialMediaSection>

      <Link to='/privacy-policy' rel="noreferrer">Política de privacidade</Link>
    </FooterWrapper>
  )
}

export default Footer;