/* eslint-disable linebreak-style */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signPromise, photoPromise])
    .then((res) => {
      res.map((each) => ({
        status: each.status,
        value: each.status === 'fulfilled' ? each.value : String(each.reason),
      }));
    });
}
