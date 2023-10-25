import { useMemo, useState } from 'react';

const getAgeAnalytics = (data) => {};

const UserAnalytics = () => {
  const [users, setUsers] = useState([]);

  //   const ageData = getAgeAnalytics(users);

  const ageData = useMemo(() => getAgeAnalytics(users), [users]);

  return <div>{ageData}</div>;
};

export default UserAnalytics;
