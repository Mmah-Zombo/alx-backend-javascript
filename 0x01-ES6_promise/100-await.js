/* eslint-disable linebreak-style */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let ans;
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    ans = { photo, user };
  } catch {
    ans = { photo: null, user: null };
  }

  return ans;
}
