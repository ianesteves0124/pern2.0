import { useState, useEffect } from 'react';

const useDummyUser = (username) => {
  const [user, setUser] = useState(null); // fetch user details
  const [error, setError] = useState(null); // error message
  const [loading, setLoading] = useState(false); //if the data is loaded};

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        //ASYNC CALL RETURNS PROMISE
        //await returns a response can be use only in async
        // `https://dummyjson.com/users/${username}`
        const response = await fetch(`https://api.github.com/users/${username}`);
        const responseData = await response.json();
        setUser(responseData);
        setLoading(false);
        console.log(response);
        console.log(responseData);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return { user, loading, error };
};

export default useDummyUser;
