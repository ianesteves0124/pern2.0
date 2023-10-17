// DOM
// DOM MANIPULATION === querying dom (finds an element in the dom tree)
// DOM UPDATE === updating the dom
// RE-RENDERING ===  after update happens it renders it on the browser or re-render
// VIRTUAL DOM IS A COPY OF THE ORIGINAL DOM.
// VDOM NEVER UPDATES THE ORIGINAL DOM
// THIS BATCH UPDATE WITH THE VDOM CALLED RECONCILIATION
// useMemo || Caching storing something so that no need for recomputing.
// same input get the memoized value and return if diff val == recompute the val and memoize and return.
// optimize computer programs by caching the result of the expensive function call and returns it for the same output.

import { useState } from 'react';
import { Typography, Button } from 'antd';
import Child from '../components/SeventhComponent_useM';

const { Text } = Typography;

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log(`Parent Rendering`);
  return (
    <div>
      <Text>You clicked me {count} times </Text>
      <Button type='default' onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <Child header={`I am a  child component`} />
    </div>
  );
};

export default Parent;
