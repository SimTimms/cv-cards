import React, { useState } from 'react';

export default function Wrapper({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  );
}
