import birfdayData from '../../helpers/data/birfdayData';

import util from '../../helpers/util';

const birfdayPrint = (uid) => {
  birfdayData.getBirfdayByUid(uid)
    .then((birthday) => {
      console.error(birthday);
      let domString = `<h1>${birthday.date}</h1>`;
      domString += `<img src =${birthday.imageUrl} alt = "birthday location" />`;
      domString += `<h2>${birthday.location} @ ${birthday.time}</h2>`;
      util.printToDom('event', domString);
    })
    .catch(error => console.error('could not get birfday', error));
};

export default { birfdayPrint };
