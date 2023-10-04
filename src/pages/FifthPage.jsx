// useRef
// const ref = useRef(initialValue)
// persist value between renders but does not re-render the component by any chance
// accepts an optional argument. it can be a valid JavaScript value to set the initial val of the ref.
// useRef: Key Points
// return an object with a special property called 'current'
// updating the ref val doesn't cause a re-render of the component.
// the ref val is persisted between renders.
import { useState, useRef, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import FifthComponent from '../components/FifthComponent';
const Counter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  return (
    <>
      <Input
        size='small'
        placeholder=''
        prefix={<UserOutlined />}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {count.current}
      <FifthComponent />
    </>
  );
};

export default Counter;
