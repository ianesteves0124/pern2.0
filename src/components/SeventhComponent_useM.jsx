//CHILD COMPONENT OF SEVENTHPAGE.JSX

import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;
const Child = ({ header }) => {
  console.log('Child Rendering');
  return (
    <div>
      <Title>{header}</Title>
      <Text>HELLO HELLO</Text>
    </div>
  );
};

export default React.memo(Child);
