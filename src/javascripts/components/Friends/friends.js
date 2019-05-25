import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';
import friendsData from '../../helpers/data/friendsData';


const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birfday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(error => console.error('no new friends', error));
};

const newFriendButton = () => {
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = () => {
  const domstring = '<button  id = "add-friend-button" class = "btn btn-danger">Add Friend</button>';
  util.printToDom('friends', domstring);
  document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
};

export default { showFriends };
