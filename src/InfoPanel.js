import React, { useEffect, useState } from 'react';
import { Grow, Typography } from '@mui/material';

export default function InfoPanel({ details, isCollapsed }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <Grow in={!isCollapsed}>
      <div
        style={{
          height: isCollapsed ? 0 : '100%',
          borderTop: '1px solid rgba(0,0,0,0.1)',
          background: '#222',
          color: '#fff',
        }}
      >
        <Typography variant="body2" align="center">
          {details}
        </Typography>
      </div>
    </Grow>
  );
}
