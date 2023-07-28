/* eslint-disable linebreak-style */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      res.map((each) => ({
        status: each.status,
        value: each.status === 'fulfilled' ? each.value : String(each.reason),
      }));
    });
}
