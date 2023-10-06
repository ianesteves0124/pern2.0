import React from 'react';
import { Card, Avatar, Popover } from 'antd';
import withFetch from '../../HOC/withFetch';

const { Meta } = Card;

const MovieAnalytics = (props) => {
  const { movies } = props;

  const renderContent = (movie) => (
    <div>
      <p>Runtime: {movie.runtime}</p>
      <p>Rating: {movie.rating}</p>
      <p>Year: {movie.year}</p>
    </div>
  );

  return (
    <div className='flex flex-wrap content-center justify-center items-center '>
      {movies.map((movie, index) => (
        <Popover key={index} content={renderContent(movie)} title={movie.title} trigger='hover'>
          <Card
            key={index}
            hoverable
            style={{
              width: 250,
              margin: 20
            }}
            cover={<img alt={movie.title} src={movie.poster} />}
          >
            <Meta avatar={<Avatar src={movie.poster} />} title={movie.title} description={`by: ` + movie.director} />
          </Card>
        </Popover>
      ))}
    </div>
  );
};

const HOC = withFetch(MovieAnalytics);
export default HOC;

/*
import { Table } from 'antd';
import withFetch from '../../HOC/withFetch';

const MovieAnalytics = (props) => {
  const { movies } = props;
  const movieTitle = [
    {
      title: 'Title:',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Director: ',
      dataIndex: 'director',
      key: 'director'
    },
    {
      title: 'Runtime: ',
      dataIndex: 'runtime',
      key: 'runtime'
    },
    {
      title: 'Rating: ',
      dataIndex: 'rating',
      key: 'rating'
    },
    {
      title: 'Year: ',
      dataIndex: 'year',
      key: 'year'
    }
  ];

  return (
    <div>
      <Table columns={movieTitle} dataSource={movies} />
    </div>
  );
};
const HOC = withFetch(MovieAnalytics);
export default HOC; */
