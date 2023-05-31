import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Usercontext } from './UserContext';

const Header = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(Usercontext);
  console.log(isDark);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Welcome {user}!</h1>
    </header>
  );
};

// const Header = ({ isDark }) => {
//   return (
//     <header
//       className="header"
//       style={{
//         backgroundColor: isDark ? 'black' : 'lightgray',
//         color: isDark ? 'white' : 'black',
//       }}
//     >
//       <h1>Welcome 홍길동!</h1>
//     </header>
//   );
// };
export default Header;