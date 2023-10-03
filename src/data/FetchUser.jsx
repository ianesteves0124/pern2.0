import React from 'react';
import useDummyUser from './hooks/useDummyUser';
import { Image, List } from 'antd';

const FetchUser = ({ username }) => {
  const { user, loading, error } = useDummyUser(username);

  // Define user information or "Not Available" message for each field
  const listofUsers = [
    { title: 'Name:', content: user?.name || 'Not Available' },
    { title: 'Bio:', content: user?.bio || 'Not Available' },
    { title: 'Location:', content: user?.location || 'Not Available' },
    { title: 'Blog or Site:', content: user?.blog || 'Not Available' },
    { title: 'Public repos:', content: user?.public_repos || 0 },
    { title: 'Followers:', content: user?.followers || 0 },
    { title: 'Following:', content: user?.following || 0 }
  ];

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {user ? (
        <List
          itemLayout='horizontal'
          dataSource={listofUsers}
          renderItem={(item) => (
            <List>
              <Image style={{ width: 200, height: 200, borderRadius: '50%' }} src={user.avatar_url} alt={user.login} />
              <List title={item.title} description={item.content} />
            </List>
          )}
        />
      ) : (
        <p>User information not available.</p>
      )}
    </div>
  );
};

export default FetchUser;

/* <li style={{ listStyle: 'none' }}>
            <img className=' w-72 h-72 border rounded-full' src={user.image} alt={user.firstName} />
          </li>
          <li>
            <strong>Name:</strong> {user.firstName + ' ' + user.lastName}
          </li>
          <li>
            <strong>Age:</strong> {user.age ? user.age : 'NA'}
          </li>
          <li>
            <strong>Email: </strong> {user.email ? user.email : 'NA'}
          </li>
          <li>
            <strong>Address:</strong>{' '}
            {user.address.address + ', ' + user.address.city ? user.address.address + ', ' + user.address.city : 'NA'}
          </li>
          <li>
            <strong>Contact:</strong> {user.phone ? user.phone : 0}
          </li>
          <li>
            <strong>Company:</strong> {user.company.name ? user.company.name : 'NA'}
          </li>
          <li>
            <strong>Company Address:</strong>{' '}
            {user.company.address.address + ', ' + user.company.address.city
              ? user.company.address.address + ', ' + user.company.address.city
              : 'NA'}
          </li> */
/* {user && (
        <ul className='flex flex-col content-center justify-center items-center mt-2'>
          <li>
            <img className='w-72 h-72 border rounded-full' src={user.avatar_url} alt={user.login} />
            <Image style={{ width: 200, height: 200, borderRadius: '50%' }} src={user.avatar_url} alt={user.login} />
          </li>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Bio:</strong> {user.bio ? user.bio : 'NA'}
          </li>
          <li>
            <strong>Location:</strong> {user.location ? user.location : 'NA'}
          </li>
          <li>
            <strong>Blog or Site:</strong> {user.blog ? user.blog : 'NA'}
          </li>
          <li>
            <strong>Public Repos:</strong> {user.public_repos ? user.public_repos : 0}
          </li>
          <li>
            <strong>Followers:</strong> {user.followers ? user.followers : 0}
          </li>
          <li>
            <strong>Following:</strong> {user.following ? user.following : 0}
          </li>
        </ul>
      )} */
