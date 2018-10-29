import React from 'react';
import DrawingLine from './DrawingLine';

const Drawing =({ lines }) => (
  <svg className='line_path'>
    {lines.map((line, i) => (
      <DrawingLine key={i} line={line} />
    ))}
  </svg>
)

export default Drawing;
