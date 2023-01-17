import React from 'react'
import requests from '../api/Requests'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='Upcoming' fetchURL={requests.fetchUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.fetchPopular} />
      <Row rowID='3' title='Trending' fetchURL={requests.fetchTrending} />
      <Row rowID='4' title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row rowID='5' title='Horror' fetchURL={requests.fetchHorror} />
    </>
  )
}

export default Home