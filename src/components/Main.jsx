import React, { useEffect } from 'react'
import axios from 'axios'
import requests from '../Requests'


const Main = () => {

    const [movies, setMovies] = React.useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.fetchPopular)
            .then(res => {
                setMovies(res.data.results)
            })
    }, [])
    console.log(movie)

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full '>
                {/* <div className='absolute w-full h-full bg-gradient-to-r from-black'></div> */}
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full p-4 md:p-8 top-[20%] '>
                    <h1 className='text-3xl md:text-4xl font-bold'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className='my-4'>
                        <button className='bg-gray-300 text-black border border-gray-300 py-2 px-5'>Play</button>
                        <button className='text-white border border-gray-300 py-2 px-5 ml-5'>Watch Later</button>
                    </div>
                    <p className='text-sm text-gray-400'>Released: {movie?.release_date}</p>
                    <p className=' text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]  '>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Main