//useSTATE TUTORIAL
import { useState } from 'react';
import { Button } from 'antd';

const Colorizer = () => {
  // INITIALIZE FIRST VAL FOR CURRENT VALUE
  const [color, setColor] = useState('#aaa');

  //randomize color
  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  };

  //UPDATES THE CURRENT VALUE OF COLOR
  const changeColor = () => {
    const randColor = getRandomColor(); // get random color from getRandomColor function
    console.log('Color Change', randColor);
    setColor(randColor); // change/update the current value/color
  };

  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));
  //LAZY INITIALIZE
  const incrBy3 = () => {
    console.log('increased by 3');
    // setCounter(counter + 3);
    setCounter((prev) => prev + 3);
  };

  return (
    <div className='flex flex-col items-center justify-center bg-slate-300'>
      <div
        className='w-52 h-52 m-4 p-4 border border-solid border-white-500 rounded-lg'
        style={{ backgroundColor: color }}
      >
        {color}
      </div>
      <Button type='default' className='cursor-pointer' onClick={changeColor}>
        CHANGE COLOR
      </Button>
      <div>
        <span>{counter}</span>
        <Button type='default' className='cursor-pointer' onClick={incrBy3}>
          +3
        </Button>
      </div>
    </div>
  );
};

export default Colorizer;
