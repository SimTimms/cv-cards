import { useState, useEffect } from 'react';
import { FullWrapper } from '../../../components';
import {
  UserType,
  Menu,
  PreviewProfile,
  SkillsPage,
  Requirements,
} from './tabs';
import { MY_SKILLS } from 'data';
import { useQuery } from '@apollo/client';

export default function AuthRoute() {
  const [userType, setUserType] = useState('dev');
  const [page, setPage] = useState('skills');
  const [mySkills, setMySkills] = useState(null);
  const { loading, error, data } = useQuery(MY_SKILLS);

  useEffect(() => {
    data && setMySkills(data.mySkills);
  }, [data]);

  return (
    <FullWrapper>
      <UserType
        setUserType={setUserType}
        userType={userType}
        setPage={setPage}
      />
      <Menu setPage={setPage} page={page} userType={userType} />
      {page === 'preview' && <PreviewProfile />}
      {page === 'skills' && (
        <SkillsPage mySkills={mySkills} setMySkills={setMySkills} />
      )}
      {page === 'req' && <Requirements />}
    </FullWrapper>
  );
}
