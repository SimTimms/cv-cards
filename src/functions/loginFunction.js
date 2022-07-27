import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export default async function loginFunction(data, setProfile) {
  const { token } = data.userLogin;
  if (token) {
    const tokenDecode = jwtDecode(token);
    await Cookies.set('cv-c1-token', token, { expires: 7 });
    await Cookies.set('cv-c1-userId', tokenDecode.userId, { expires: 7 });
    setProfile({ token });
  }
}
