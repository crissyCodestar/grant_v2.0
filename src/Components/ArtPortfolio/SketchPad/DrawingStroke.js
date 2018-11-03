import React from 'react';

const DrawingStroke = ({markerWidth, handleLineStroke, marker, handleColorChange}) => (
  <div>
    <button onClick={handleLineStroke}> + </button>
    {markerWidth}

    <input type="color" value={marker} onChange={handleColorChange}/>

  </div>
)

export default DrawingStroke;
