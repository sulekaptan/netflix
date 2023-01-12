import React from 'react'
import requests from '../api/Requests'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
      <Main />
      <Row title='Upcoming' fetchURL={requests.fetchUpcoming} />
      <Row title='Popular' fetchURL={requests.fetchPopular} />
      <Row title='Trending' fetchURL={requests.fetchTrending} />
      <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row title='Horror' fetchURL={requests.fetchHorror} />
    </>
  )
}

export default Home