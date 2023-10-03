//CUSTOM HOOKS
import { useState } from 'react';
import { Typography, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FetchUser from '../data/FetchUser';

const FindUser = () => {
  const { Title, Text } = Typography;
  const [userName, setUserName] = useState(''); // changes the current state value

  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>FIND USER</Title>
      <form className='mb-5'>
        {/* input username  with event handler*/}
        <Input
          size='large'
          prefix={<UserOutlined />}
          placeholder='Enter Username'
          style={{ width: 700 }}
          onChange={(event) => setUserName(event.target.value)}
        />
      </form>
      <div>{userName ? <FetchUser username={userName} /> : <Text>Please Initiate a Search</Text>}</div>
    </div>
  );
};

export default FindUser;
