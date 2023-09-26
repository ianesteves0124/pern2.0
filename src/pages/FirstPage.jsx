import { movie } from '../data/movieList';
import FirstComponent from '../components/FirstComponent';

const fetchMovieData = () => {
  return movie;
};
const movieComponent = () => {
  const movieData = fetchMovieData();
  return (
    <div className='flex-col bg-slate-300'>
      <h2 className='text-4xl text-center pt-3 text-white font-extrabold'>
        {' '}
        <span className='text-red-500 text-5xl'>M</span>OVIES
      </h2>
      <ul className='flex flex-wrap content-center justify-center'>
        {movieData.map((item) => (
          <FirstComponent key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default movieComponent;
