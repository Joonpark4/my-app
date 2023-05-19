/* eslint-disable*/
import React, { useState } from 'react';

function List(props) {
  
  return (
    <div className="list">
      <div className="list_top">
        <div className='list_word'>{props.word}</div>
        <div className='list_meaning'>{props.meaning}</div>
      </div>
    </div>
  );
}

export default List;
