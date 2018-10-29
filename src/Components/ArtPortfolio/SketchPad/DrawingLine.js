import React from 'react';

const DrawingLine = ({line}) => {
  const pathData = "M " +
  line.map(p => {
    return  `${p.get('x')} ${p.get('y')}`
    }).join(" L ");
    console.log(pathData);
  return <path className='path_draw' d={pathData} />

}

export default DrawingLine;
