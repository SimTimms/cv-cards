import { useState, useEffect } from 'react';
import AuthRoute from './AuthRoute';
import PublicRoute from './PublicRoute';

export default function Router({ token }) {
  const [profile, setProfile] = useState({ token: null });

  useEffect(() => {
    token && token !== undefined && setProfile({ ...profile, token });
  }, [token]);

  return profile.token ? (
    <AuthRoute setProfile={setProfile} />
  ) : (
    <PublicRoute setProfile={setProfile} profile={profile} />
  );
}
