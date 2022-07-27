import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Typography, Slide } from '@mui/material';
import InfoPanel from './InfoPanel';
import moment from 'moment';
import { IMG_INDEX } from '../data/imgIndex';

export default function Card({ card, delay, cardsArr, setCardsArr }) {
  const [isShown, setIsShown] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, 50 * delay);
  }, [delay]);

  function yearsExp(firstY, lastY) {
    if (firstY === null || lastY === null) {
      return '';
    }
    const first = moment(firstY);
    const last = moment(lastY);
    let diff = last.diff(first, 'years');
    if (diff === 0) {
      diff = last.diff(first, 'months');
      return `${diff} Month${diff !== 1 ? 's' : ''}`;
    }
    return `${diff} Year${diff !== 1 ? 's' : ''}`;
  }
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
                backgroundImage: `url(${
                  IMG_INDEX[card.name] ? IMG_INDEX[card.name].img : null
                })`,
                paddingTop: isCollapsed ? 50 : 50,
                backgroundSize: card.imgSize === 'cover' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <Typography variant="h5" align="center">
              {card.name}
            </Typography>
            <Typography variant="body2" align="center">
              {`${yearsExp(card.firstUsed, card.lastUsed)}`}
            </Typography>

            <div
              style={{
                width: '100%',
                marginBottom: 8,
                marginTop: 8,
              }}
            ></div>
            {card.tech && (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {card.tech.map((tech, index) => (
                  <img
                    src={tech.img}
                    style={{
                      height: 20,
                      maxHeight: 20,
                      minHeight: 20,
                      padding: 5,
                    }}
                    key={`img_${index}`}
                  />
                ))}
              </div>
            )}

            <InfoPanel
              details={card.description}
              isCollapsed={isCollapsed}
              hasInfo={card.description !== '' && card.description}
            />
          </div>
        </Tilt>
      </div>
    </Slide>
  );
}
