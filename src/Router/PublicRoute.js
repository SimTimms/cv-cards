import { LoginPage } from './Pages';

export default function PublicRoute({ setProfile, profile }) {
  return <LoginPage setProfile={setProfile} profile={profile} />;
}
