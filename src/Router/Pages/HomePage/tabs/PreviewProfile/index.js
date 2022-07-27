import React, { useState } from 'react';
import { Card, Wrapper } from '../../../../../components';
import { Typography } from '@mui/material';
import { genGraph, genTime } from '../../../../../functions';
import {
  ARR_DATA,
  ARR_DEPLOY,
  ARR_PRODUCTS,
  ARR_EXPERIENCE,
  ARR_HIRING,
  ARR_FRONT,
  ARR_BACK,
  ARR_ENV,
} from '../../../../../data/cards';
import { MY_PROFILE } from '../../../../../data';
import { Query } from '@apollo/client/react/components';
import Cookies from 'js-cookie';

function displayCards(cardArray, cardsArr, setCardsArr) {
  const newCardArray = [];

  if (cardArray === null) {
    return null;
  }
  for (let i = 0; i < cardArray.length; i++) {
    newCardArray.push(
      <Card
        card={cardArray[i]}
        delay={i}
        key={`${i}-${cardArray[i].title}`}
        cardsArr={cardsArr}
        setCardsArr={setCardsArr}
      />
    );
  }
  return newCardArray;
}

export default function PreviewProfile({ setProfileState }) {
  const [view, setView] = useState(null);
  const [profile, setProfile] = useState(null);
  const [timeline, setTimeline] = useState(false);
  const [graph, setGraph] = useState(false);

  const [cardsArr, setCardsArr] = useState([]);
  if (!profile) {
    return (
      <Query
        query={MY_PROFILE}
        variables={{ userId: Cookies.get('cv-c1-userId') }}
        onCompleted={(data) => {
          setView(data.myProfile.skills);
          setProfile(data.myProfile);
        }}
        onError={(error) => {}}
      >
        {(item) => <div>sad</div>}
      </Query>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        zIndex: 10,
        alignItems: 'center',
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        flexDirection: 'row',
      }}
    >
      {graph && (
        <div
          style={{
            zIndex: 15,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            left: 0,
            padding: 0,
            background: '#fafafa',
            display: 'flex',
          }}
          onClick={() => setGraph(false)}
        >
          {genGraph(view)}
        </div>
      )}
      {timeline && (
        <div
          style={{
            zIndex: 12,
            height: '100vh',
            width: '100vw',
            overflow: 'auto',
            position: 'fixed',
            top: 0,
            left: 0,
            padding: 20,
            background: '#fafafa',
            display: 'flex',
          }}
          onClick={() => setTimeline(false)}
        >
          <div style={{ margin: 'auto' }}>{genTime(view)}</div>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          zIndex: 11,
          alignItems: 'center',
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2" onClick={() => setProfileState(null)}>
          {profile.name}
        </Typography>
        <Typography variant="h3">{profile.type}</Typography>
        <div
          style={{
            display: 'flex',
            zIndex: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <Typography
            variant="h5"
            onClick={() => setTimeline(timeline ? false : true)}
          >
            Timeline
          </Typography>
          <Typography
            variant="h5"
            onClick={() => setGraph(graph ? false : true)}
          >
            Graph
          </Typography>
          <Typography
            variant="h5"
            onClick={() =>
              setView([
                ...ARR_FRONT,
                ...ARR_BACK,
                ...ARR_DEPLOY,
                ...ARR_DATA,
                ...ARR_ENV,
                ...ARR_EXPERIENCE,
              ])
            }
          >
            All
          </Typography>
          <Typography
            variant="h5"
            onClick={() => setView([...ARR_FRONT, ...ARR_BACK])}
          >
            Tech
          </Typography>
          <Typography variant="h5" onClick={() => setView([...profile.skills])}>
            Database
          </Typography>

          <Typography variant="h5" onClick={() => setView([...ARR_DEPLOY])}>
            Code Management
          </Typography>
          <Typography variant="h5" onClick={() => setView([...ARR_PRODUCTS])}>
            Products
          </Typography>
          <Typography variant="h5" onClick={() => setView([...ARR_EXPERIENCE])}>
            Experience
          </Typography>
          <Typography variant="h5" onClick={() => setView([...ARR_HIRING])}>
            Hire
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            zIndex: 10,
            alignItems: 'center',
            left: 0,
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <Wrapper>{displayCards(view, cardsArr, setCardsArr)}</Wrapper>
        </div>
      </div>
    </div>
  );
}
