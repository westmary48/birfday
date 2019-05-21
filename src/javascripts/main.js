import Auth from './components/auth/auth';
import Birfday from './components/birfday/birfday';

import '../styles/main.scss';

const init = () => {
  Auth.authPrint();
  Birfday.birfdayPrint();
};

init();
