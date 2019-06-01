import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResults = results.data;
      const friends = [];
      Object.keys(friendResults).forEach((friendsId) => {
        friendResults[friendsId].id = friendsId;
        friends.push(friendResults[friendsId]);
      });
      resolve(friends);
    })
    .catch(error => reject(error));
});

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

export default { addNewFriend, getFriendsByUid };
