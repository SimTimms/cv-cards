import React from 'react';
import { Register, Login, Error } from './tabs';
import { CentralWrapper } from '../../../components';

export default function LoginPage({ setProfile }) {
  const [page, setPage] = React.useState(0);
  return (
    <CentralWrapper>
      {page === 0 && <Login setProfile={setProfile} setPage={setPage} />}
      {page === 1 && <Register setPage={setPage} />}
      {page === 3 && <Error setPage={setPage} />}
    </CentralWrapper>
  );
}
