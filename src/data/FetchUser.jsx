import useDummyUser from './hooks/useDummyUser';

const FetchUser = ({ username }) => {
  const { user, loading, error } = useDummyUser(username);
  return (
    <div className=''>
      {loading && <p>Loading . . . .</p>}
      {error && <p>{error.message}</p>}

      {user && (
        <ul className='flex flex-col content-center justify-center items-center mt-2'>
          <li>
            <img className='w-72 h-72 border rounded-full' src={user.avatar_url} alt={user.login} />
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
