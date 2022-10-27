import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
const CardItem = ({movie}) => {
  return (
    <Box >
      <Link to={`/movie/${movie.id}`}>
        <div className='card'>
            <img className='card__image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt='coco'></img>
            <div className='card__overlay'>
                <div className='overlay__text w-100 p-3 text-center'>
                    <Text fontSize={'25px'}>{movie.original_title}</Text>
                    <Text>{movie.release_date}</Text>
                    <Text>{movie.vote_average}</Text>
                </div>
            </div>
        </div>
        </Link>
    </Box>
  )
}

export default CardItem