// import logo from './logo.svg';
/* eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function Option() {
  const dispatch = useDispatch();

  const addWord = () => {
    alert("클릭")
    dispatch({
      type: "ADD_WORD",
      payload: { id: Date.now(), word: "New Word", meaning: "New Meaning" }
    });
  };

  return (
    <div>
      <div className="btn_option list_option">
        Hide
        <br />
        Answer
      </div>
      <div className="btn_option list_option" onClick={addWord}>
        Add
        <br />
        Word
      </div>
      <div className="btn_option list_option">
        Offset
      </div>
    </div>
  );
}
export default Option;
