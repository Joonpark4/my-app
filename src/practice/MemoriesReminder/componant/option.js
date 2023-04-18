// import logo from './logo.svg';
/* eslint-disable*/
import React, { useState } from 'react';

function Option(props) {
  let page = props.page;
  const [hide, setHide] = useState(props.hide);
  const [addList, setAddList] = useState(props.addList);
  const [offset, setOffset] = useState(props.offset);

  const hideClick = () => {
    const newHide = !hide;
    setHide(newHide);
    // Call the updateHide function with the new hide value
    props.updateHide(newHide);
  };

  const addListClick = () => {
    if (addList === true) {
      setAddList(false);
      props.updateAddList(false);
    } else {
      setAddList(true);
      props.updateAddList(true);
    }
  };

  const offsetClick = () => {
    setOffset(!offset);
    props.updateSetOffset(!offset);
  };

  if (page === 'List') {
    return (
      <div>
        <div className="btn_option list_option" onClick={hideClick}>
          Hide
          <br />
          Answer
        </div>
        <div className="btn_option list_option" onClick={addListClick}>
          Add
          <br />
          Word
        </div>
        <div className="btn_option list_option" onClick={offsetClick}>
          Offset
        </div>
      </div>
    );
  } else if (page === 'Test') {
    return (
      <div>
        <div className="btn_option list_option">
          Writing
          <br />
          Answer
        </div>
        <div className="btn_option list_option">
          Pair
          <br />
          Game
        </div>
        <div className="btn_option list_option">
          Making
          <br />
          Words
        </div>
      </div>
    );
  }
}
export default Option;
