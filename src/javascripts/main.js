import firebase from 'firebase/app';

import Auth from './components/auth/auth';
import Birfday from './components/birfday/birfday';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  console.error('keys', apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  Auth.authPrint();
  Birfday.birfdayPrint();
};

init();
