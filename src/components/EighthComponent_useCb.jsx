import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const EighthComponent_useCb = ({ getGreeting }) => {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    setGreeting(getGreeting());
    console.log(`Greeting: useEffect`);
  }, [getGreeting]);
  return (
    <div>
      <Title>{greeting}</Title>
    </div>
  );
};

export default EighthComponent_useCb;
