/*eslint-disable*/
// useRecucer : useState와 동일하게 State를 생성하고 관리할 수 있게 해주는 도구이다.
// 단, 여러개의 하위값을 포함하는 복잡한 State를 다루어야 할 때, useReducer를 사용하면 코드가 간결해지고 유지보수가 쉬워진다.
// useReducer는 Reducer, Dispatch, Action 세가지로 나뉜다.
// 철준이가 은행에 돈 만원 출금을 요구한다면, 은행은 철준이의 계좌에서 만원이 빠져나갈 수 있도록 거래내역을 업데이트 시켜준다.
// 이때 거래내역을 State라고하고, 은행은 거래내역을 업데이트 하는 것을 도와주므로 Reducer라고 할 수 있다. 철수는 요구를 하므로 철수가 Dispatch이고, 철수가 요청한 그 요구는 Action이라 할 수 있다.

// reducer - state를 업데이트하는 역할(은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
import React, { useReducer, useState } from 'react';
import Student from './component/student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };

    case 'mark-student':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

function App() {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count} </p>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add-student', payload: { name } });
          setName('');
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}

export default App;
