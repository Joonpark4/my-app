import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Usercontext } from './UserContext';

const Content = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(Usercontext)
  return (
    <header
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>{user}님, 좋은 하루 되세요</h1>
    </header>
  );
};

// const Content = ({ isDark }) => {
//   return (
//     <header
//       className="content"
//       style={{
//         backgroundColor: isDark ? 'black' : 'lightgray',
//         color: isDark ? 'white' : 'black',
//       }}
//     >
//       <h1>홍길동님, 좋은 하루 되세요</h1>
//     </header>
//   );
// };
export default Content;