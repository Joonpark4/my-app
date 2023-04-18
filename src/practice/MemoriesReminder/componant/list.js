// import logo from './logo.svg';
/* eslint-disable*/
import React, { useState, useRef, useEffect } from 'react';

function List(props) {
  const [selected, setSelected] = useState(props.selected);
  const [showMenu, setShowMenu] = useState(false);
  const [updating, setUpdating] = useState(props.updating);
  const [id, setId] = useState(props.id);
  const [nextId, setNextId] = useState(props.nextId);
  const [left_text, setLeft_text] = useState(props.left);
  const [right_text, setRight_text] = useState(props.right);
  const [hide, setHide] = useState(props.hide);

  // 리스트를 클릭했을때 : 셀렉티드 토글, 업데이트중 아님
  const handleClick = () => {
    setSelected(!selected);
    setUpdating(false);
  };

  // 취소 버튼 함수
  const handleCancel = () => {
    setShowMenu(false);
    setUpdating(!updating);
    // 아래는 취소를 눌렀을 경우 원래 받아온 텍스트와 동일한 텍스트를 다시 텍스트박스에 입력
    setLeft_text(props.left);
    setRight_text(props.right);
  };

  // 삭제 버튼 함수
  const handleDelete = (e) => {
    e.stopPropagation();
    const storedWords = JSON.parse(localStorage.getItem('words'));
    const newWords = storedWords.filter((word) => word.id !== props.id);
    localStorage.setItem('words', JSON.stringify(newWords));
    props.onDelete();
  };

  const classes = ['list', selected ? 'selected' : null]
    .filter(Boolean)
    .join(' ');

  let left = props.left;
  let right = props.right;
  if (props.hide == true) {
    right = <span style={{ color: 'white' }}>{props.right}</span>;
  }
  let btn_left = (
    <button className="btn_list" onClick={handleCancel}>
      Update
    </button>
  );
  let btn_right = (
    <button className="btn_list" onClick={handleDelete}>
      Delete
    </button>
  );
  if (updating === true) {
    left = (
      <input
        type="text"
        className="updating_text"
        value={left_text}
        onClick={(event) => event.stopPropagation()}
        name="left_text"
        placeholder="Word"
        onChange={(e) => {
          setLeft_text(e.target.value);
        }}
      ></input>
    );
    right = (
      <input
        type="text"
        className="updating_text"
        value={right_text}
        onClick={(event) => event.stopPropagation()}
        name="right_text"
        placeholder="Meaning"
        onChange={(e) => {
          setRight_text(e.target.value);
        }}
      ></input>
    );
    btn_left = (
      <button className="btn_list" onClick={handleCancel}>
        Cancel
      </button>
    );
    btn_right = (
      <button
        className="btn_list"
        onClick={() => {
          if (left_text !== '' && right_text !== '') {
            props.onUpdate(id, left_text, right_text);
            setShowMenu(false);
            setUpdating(!updating);
          } else {
            alert("You can't update with blank");
          }
        }}
      >
        Confirm
      </button>
    );
  }

  return (
    <div className={classes} onClick={handleClick}>
      <div className="list_top">
        <div>{left}</div>
        <div className="hidden">{right}</div>
      </div>
      <div>
        {selected && (
          <div
            className="list_bottom"
            // 아래쪽 클릭하면 토글하지 않기
            onClick={(event) => event.stopPropagation()}
          >
            {btn_left}
            {btn_right}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
