/** 
 * useEFFECT TUTORIAL == side effects
 * import { useEffect } from 'react';

 * Runs After Every Render
 * useEffect(() => {});

 * Runs Once After
 * Mounting(Initial Render)
 * useEffect(() => {},[]);

 * Runs Only After
 * State Changes
 * useEffect(() => {},[state]);

 * Runs Only After
 * Props Changes
 * useEffect(() => {},[props]);

 * Runs Only After
 * Props/State Changes
 * useEffect(() => {},[props,state]);

 * useEffect(()=>{ return () =>{};},[props,state])
*/

import { useState, useEffect } from 'react';

const Greeting = ({ randomMax }) => {
  // eslint-disable-next-line
  const [randNumber, setrandNumber] = useState(Math.floor(Math.random() * randomMax) + 1);
  const [greeting, setGreeting] = useState('');

  //runs every render
  useEffect(() => {
    console.log('ThirdPage.js: useEffect()'); // side effect
  }, []);

  useEffect(() => {
    window.localStorage.setItem('random', randNumber); //stores the random number at the local storage of the browser\
    //checks if the expression matches
    if (randomMax === randNumber) {
      window.localStorage.setItem('jackpot', true); // stores another variable to the local storage
    } else {
      window.localStorage.setItem('jackpot', false); // . . .
    }
    //takes random number and output the greeting message inside the cases
    switch (randNumber) {
      case 1:
        setGreeting('Hello');
        break;
      case 2:
        setGreeting('Bonjour');
        break;
      case 3:
        setGreeting('Hola');
        break;
      case 4:
        setGreeting('Guten Tag');
        break;
      case 5:
        setGreeting('Ciao');
        break;
      case 6:
        setGreeting('Salut');
        break;
      case 7:
        setGreeting('Hallo');
        break;
      case 8:
        setGreeting('Cześć');
        break;
      default:
        setGreeting('Hello');
    }
    return function cleanUp() { // CLEANUP
      console.log('Clean up');
      window.localStorage.removeItem('random');
      window.localStorage.removeItem('jackpot');
    };
  }, [randNumber, randomMax]); //runs after the current state changes

  return (
    <div className='bg-slate-500'>
      <h1 className='text-center font-extrabold text-4xl'>Random Greeting</h1>
      <h2 className='text-center font-extrabold text-2xl mt-10'> {greeting}</h2>
    </div>
  );
};

export default Greeting;
