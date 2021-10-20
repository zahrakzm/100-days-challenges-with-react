import React , {useState} from 'react';
import './assets/css/custom.css'

const Palindrome = () => {
    const [message, setMessage] = useState('')
    const [str, setstr] = useState('')


   const getPalindrome = (e) => {
        var len = str;
        var mid = Math.floor(len.length / 2);
    
        for (var i = 0; i < mid; i++) {
          if (str[i] === str[len.length - 1 - i]) {
            setMessage( `${len} is a palindrome` );
          } else {

            setMessage( `${len} is not a palindrome` );
        break;    
          }
        }
      };
  const getWord = (e) => {
       setstr( e.target.value );
      };
    return (
        <div>
           <div className="box">
          <div className="flex-area">
            <input onChange={getWord} />
            <button onClick={getPalindrome}>Check</button>
          </div>
          <h3>{message}</h3>
        </div>
        </div>
    )
}

export default Palindrome
