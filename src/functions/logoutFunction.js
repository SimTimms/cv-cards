import Cookies from 'js-cookie';

export default async function logoutFunction(setProfile) {
  Cookies.remove('cv-c1-token');
  Cookies.remove('cv-c1-userId');
  setProfile({ token: null });
}
