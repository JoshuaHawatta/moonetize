import MoonetizeJSX from '../../pages/MoonetizeHub';
import CheckHasUser from './CheckHasUser';

const SignOrLogin = () => {
  if(localStorage.length < 2) {
    return( <CheckHasUser /> )
  }
  
  return( <MoonetizeJSX /> )
}

export default SignOrLogin;