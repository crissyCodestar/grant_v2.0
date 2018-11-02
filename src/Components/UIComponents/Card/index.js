import React from 'react';
import classNames from 'classnames';
import './Card.css';

export const Card =({header, info, image})=>(
  <div>
    <div>
      <div>
        <img src={image}/>
      </div>
      <div>
        {header}
      </div>
      <div>
        {info}
      </div>
    </div>
  </div>
)
