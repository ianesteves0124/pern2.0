import { useRef, useEffect } from 'react';
import { Typography, Button } from 'antd';

const Title = Typography;

const RefFocus = () => {
  const counter = useRef(0);

  const handleClick = () => {
    counter.current += 1;
    console.log(counter.current);
  };

  useEffect(() => {
    console.log('counter changed to: ', counter.current);
  }, [counter]);

  return (
    <div>
      <Title>VALUE: {counter.current}</Title>
      <Button onClick={handleClick}>CLICK ME</Button>
    </div>
  );
};
export default RefFocus;
