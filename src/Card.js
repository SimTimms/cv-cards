import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Typography, Slide, Fade } from '@mui/material';
import InfoPanel from './InfoPanel';
import moment from 'moment';
export default function Card({ card, delay, cardsArr, setCardsArr }) {
  const [isShown, setIsShown] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, 50 * delay);
  }, [delay]);

  return !isShown ? null : (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div
        style={{
          margin: 5,
        }}
      >
        <Tilt
          className="tilt"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          transitionSpeed={1000}
          scale={1}
          gyroscope={true}
          tiltReverse={true}
        >
          <div
            style={{
              border: '1px dashed #ddd',
              zIndex: 10,
              borderRadius: 1,
              margin: 'auto',
              cursor: 'pointer',
              width: isCollapsed ? 180 : 180,
              background:
                card.img === 'back' ? '#222' : isCollapsed ? '#fff' : '#fff',
              color: isCollapsed ? '#222' : '#222',
              padding: 10,
            }}
            onClick={() => {
              const exists = cardsArr.indexOf(card);
              const shallowArr = [...cardsArr];
              exists === -1
                ? shallowArr.push(card)
                : shallowArr.splice(exists, 1);

              setCardsArr([...shallowArr]);
              setIsCollapsed(isCollapsed ? false : true);
            }}
          >
            <div
              style={{
                backgroundImage: `url(${card.img})`,
                paddingTop: isCollapsed ? 50 : 50,
                backgroundSize: card.imgSize === 'cover' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <Typography variant="h5" align="center">
              {card.title}
            </Typography>
            <Typography variant="body2" align="center">
              {card.lastUsed &&
                `Last Used: ${
                  card.lastUsed ? moment(card.lastUsed).fromNow() : ''
                }`}
            </Typography>
            <Typography variant="body2" align="center">
              {card.firstUsed &&
                `First Used: ${
                  card.firstUsed ? moment(card.firstUsed).fromNow() : ''
                }`}
            </Typography>
            <InfoPanel details={card.description} isCollapsed={isCollapsed} />
          </div>
        </Tilt>
      </div>
    </Slide>
  );
}
