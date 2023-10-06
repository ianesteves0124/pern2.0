//HOC
//const enhanced = HOC(wrapped)
// HOC = JS FUNC THAT TAKES A COMPONENT AND RETURNS A NEW ENHANCED COMPONENT.
// HOC code are in the hoc components and HOC
import React from 'react';
// import MovieList from '../components/hocComponents/movieList';
import MovieAnalytics from '../components/hocComponents/movieAnalytics';

const SixthPage = () => {
  return (
    <div>
      {/* <MovieList /> */}
      <MovieAnalytics />
    </div>
  );
};

export default SixthPage;
