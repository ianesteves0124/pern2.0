import React, { useCallback, useState } from 'react';
import { Button, Input, Typography } from 'antd';
import Greetings from '../components/EighthComponent_useCb';

const { Title } = Typography;

const EighthPage = () => {
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(0);

  const getGreeting = useCallback(() => {
    return `Hello ${name}!`;
  }, [name]);

  return (
    <div>
      <Title>useMemo & useCallback</Title>
      <Input
        placeholder='ENTER YOUR NAME'
        type='text'
        size='medium'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Greetings getGreeting={getGreeting} />
      <Button onClick={() => setCounter(counter + 1)}>CLICK ME</Button>
    </div>
  );
};

export default EighthPage;
