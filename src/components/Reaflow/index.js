import React from 'react';
import { Canvas } from 'reaflow';

const Reaflow = () => {
  return (
    <Canvas
      nodes={[
        {
          id: '1',
          text: '1'
        },
        {
          id: '2',
          text: '2'
        }
      ]}
      edges={[
        {
          id: '1-2',
          from: '1',
          to: '2'
        }
      ]}
    />
  );
};

export default Reaflow;
