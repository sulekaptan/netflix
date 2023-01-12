import React, { useEffect } from 'react'
import axios from 'axios'
import requests from '../api/Requests'


const Main = () => {

    const [movies, setMovies] = React.useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.fetchPopular)
            .then(res => {
                setMovies(res.data.results)
            })
    }, [])

    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }
        else{
            return str
        }
    }

    return (
        <div className='w-full h-[800px] text-white'>
            <div className='w-full h-full '>
                {/* <div className='absolute w-full h-full bg-gradient-to-r from-black'></div> */}
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute p-4 md:p-8 w-full top-[20%] '>
                    <h1 className='text-3xl md:text-4xl font-bold'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className='my-4'>
                        <button className='bg-gray-300 text-black border border-gray-300 py-2 px-5'>Play</button>
                        <button className='text-white border border-gray-300 py-2 px-5 ml-5'>Watch Later</button>
                    </div>
                    <p className='text-sm py-5 text-gray-400'>Released: {movie?.release_date}</p>
                    <p className=' text-gray-200  w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] '>{truncateString(movie?.overview, 180)}</p>
                </div>
            </div>
        </div>
    )
}

export default Main