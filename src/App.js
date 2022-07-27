import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { profileArray } from './data/profile';
import { Typography } from '@mui/material';
import { useStyles } from './styles';
import {
  Profile,
  DevDesc,
  LoginPage,
  UserType,
  RecruitmentPreferences,
  SkillMenu,
} from './components';
import Router from './Router';
import { theme } from './theme';
import { REACT_APP_API } from './envVars';
import Cookies from 'js-cookie';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { MY_SKILLS } from './data';

function App() {
  const authToken = Cookies.get('cv-c1-token');
  const client = new ApolloClient({
    uri: REACT_APP_API,
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
      authorization: authToken ? `Bearer ${authToken}` : '',
    },
  });

  const [filter, setFilter] = useState([]);
  const [skillSearch, setSkillSearch] = useState('');
  const [techTest, setTechTest] = useState(0);
  const [interview, setInterview] = useState(1);
  const [salary, setSalary] = useState(0);
  const [page, setPage] = useState('skills');
  const [dateLevel, setDateLevel] = useState('level');
  const [userType, setUserType] = useState('dev');
  const [employment, setEmployment] = useState('Full-Time');
  const classes = useStyles();

  useEffect(() => {
    setDateLevel('level');
  }, [page, setPage]);

  function updateFilter(item, filter, setFilter, level) {
    const exists = filter.filter((filterItem) => filterItem.item === item);
    if (level === -1) {
      setFilter(filter.filter((filterItem) => filterItem.item !== item));
      return;
    }
    if (exists.length > 0) {
      const removeFilter = filter.filter(
        (filterItem) => filterItem.item !== item
      );
      const newFilter = [...removeFilter, { item: item, level: level }];
      setFilter(newFilter);
    } else {
      const newFilter = [...filter, { item: item, level: level }];
      setFilter(newFilter);
    }
  }

  function profiles(profileArray, filter, setProfileState) {
    const filteredProfileArr = profileArray.filter((profile) => {
      const relSkills = profile.skills.filter((i) => {
        for (let ins = 0; ins < filter.length; ins++) {
          const thisFilter = filter[ins];

          if (
            i.title === thisFilter.item.title &&
            i.level >= thisFilter.level
          ) {
            return true;
          }
        }
      });
      return relSkills.length === filter.length ? true : false;
    });

    return filteredProfileArr.map((item, index) => (
      <button
        className={classes.skillButton}
        onClick={() => setProfileState(item)}
        key={`check_${index}`}
      >
        {item.name}
      </button>
    ));
  }

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router token={authToken} />
      </ApolloProvider>
    </ThemeProvider>
  );

  /*
  if (!mySkills && page === 'skills' && authToken) {
    return (
      <ApolloProvider client={client}>
        <Query
          query={MY_SKILLS}
          onCompleted={(data) => {
            setMySkills(data.mySkills);
          }}
          onError={(error) => {}}
        >
          {(mySkills) => {
            return null;
          }}
        </Query>
      </ApolloProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <LoginPage />
          <UserType
            setUserType={setUserType}
            userType={userType}
            setPage={setPage}
          />
          <Menu setPage={setPage} page={page} userType={userType} />
          {page === 'preview' && <PreviewProfile />}
          {page === 'skills' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 460,
                margin: 'auto',
                background: '#f6f5f3',
                padding: 10,
                marginTop: 10,
              }}
            >
              <SkillMenu dateLevel={dateLevel} setDateLevel={setDateLevel} />
              <Typography
                variant="body2"
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  borderBottom: '1px solid #aaa',
                  paddingBottom: 10,
                  marginBottom: 10,
                  width: '100%',
                }}
              >
                {dateLevel === 'level'
                  ? `What level of each skill do you have?`
                  : dateLevel === 'date'
                  ? `When did you learn the skill, when did you last use it?`
                  : `What have you achieved`}
              </Typography>
              <Skills
                mySkills={mySkills}
                setMySkills={setMySkills}
                skillSearch={skillSearch}
                dateLevel={dateLevel}
              />
            </div>
          )}
          {page === 'req' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 460,
                margin: 'auto',
                background: '#f6f5f3',
                padding: 10,
                marginTop: 10,
              }}
            >
              <Typography
                variant="body2"
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 10,
                }}
              >
                {dateLevel === 'level'
                  ? `What level of each skill do you have?`
                  : `as`}
              </Typography>
              <Skills mySkills={mySkills} setMySkills={setMySkills} />
            </div>
          )}
          {page === 'preferences' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 460,
                margin: 'auto',
                background: '#f6f5f3',
                padding: 10,
                marginTop: 10,
              }}
            >
              <RecruitmentPreferences
                setInterview={setInterview}
                setEmployment={setEmployment}
                setSalary={setSalary}
                setTechTest={setTechTest}
              />
            </div>
          )}

          {page === 'spec' && (
            <div
              style={{
                margin: 'auto',
                width: 460,
                background: '#f6f5f3',
                padding: 10,
                marginTop: 10,
              }}
            >
              <DevDesc
                filter={filter}
                techTest={techTest}
                interview={interview}
                employment={employment}
                salary={salary}
              />
            </div>
          )}
          {page === 'profiles' && (
            <div
              style={{
                margin: 'auto',
                width: 460,
              }}
            >
              <Typography variant="body2">
                <b>{`Matching Profiles: `}</b>
              </Typography>
              <br />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                {filter.length > 0 &&
                  profiles(profileArray, filter, setProfileState)}
              </div>
            </div>
          )}
        </div>
        {profileState && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              padding: 20,
              background: '#fafafa',
            }}
          >
            <Profile
              userProfile={profileState}
              setProfileState={setProfileState}
            />
          </div>
        )}
      </ApolloProvider>{' '}
    </ThemeProvider>
  );
  */
}

export default App;
