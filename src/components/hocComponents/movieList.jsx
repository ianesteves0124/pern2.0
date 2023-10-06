import withFetch from '../../HOC/withFetch';
import { Card, Typography } from 'antd';

const Title = Typography;

const MovieList = (props) => {
  const { movies } = props;
  return (
    <div className='bg-slate-400'>
      <Title className='flex justify-center'>Movie List - with HOC</Title>
      <div className='flex flex-wrap content-center justify-center items-center'>
        {movies.map((movie, index) => (
          <Card
            hoverable
            key={index}
            style={{ width: 250, margin: '16px', borderRadius: 20, border: '3px solid black' }}
            cover={<img style={{ width: 300, height: 300, borderRadius: 20 }} alt={movie.title} src={movie.poster} />}
          >
            <Card.Meta
              style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'lighter' }}
              title={movie.title}
              description={movie.director}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
const HOC = withFetch(MovieList);
export default HOC;

// /* <ul className='flex flex-wrap content-center justify-center items-center'>
//           {movies.map((movie, index) => (
//             <li
//               className='flex flex-col content-center justify-center items-center m-4 border border-solid border-#ebebeb rounded p-4'
//               key={index}
//             >
//               <img style={{ width: 300, height: 300 }} src={movie.poster} alt={movie.title} />
//               <span>{movie.title}</span>
//           </li>
//           ))
//           }
//         </ul>*/
