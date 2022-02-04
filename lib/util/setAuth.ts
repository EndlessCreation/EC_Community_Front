import { AuthState } from '../../module/auth';

const setAuth = (auth: AuthState): void => {
  try {
    localStorage.setItem('auth', JSON.stringify(auth));
  } catch (e) {
    console.log('localStorage is not working');
  }
};

export default setAuth;
