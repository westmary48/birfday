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
      getFriends(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(error => console.error('no new friends', error));
};

const newFriendButton = () => {
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = (friends) => {
  let domString = '<button  id = "add-friend-button" class = "btn btn-danger">Add Friend</button>';
  friends.forEach((friend) => {
    domString += `<h3>${friend.name}<h/3>`;
  });
  util.printToDom('friends', domString);
  document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
};

const getFriends = uid => [
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      console.error('friends array', friends);
      showFriends(friends);
    })
    .catch(err => console.error('no friends', err)),
];

export default { getFriends };
