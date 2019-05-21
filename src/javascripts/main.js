import firebase from 'firebase/app';

import Auth from './components/auth/auth';
import Birfday from './components/birfday/birfday';
import MyNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  Auth.authPrint();
  Birfday.birfdayPrint();
};

init();
