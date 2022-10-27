import {Button,Box,  Heading, Image, Text,  VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const param  =useParams()
    const [movie, setMovie] = useState([])
    const getMovieDetails = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=166b462263df3d4c4224c0029226d126&language=en-US`)
        setMovie(data)
    }
    useEffect(()=>{
        getMovieDetails()
    },[])
  return (
   <VStack >
        <Box position={'relative'} w='100%' p='0' m='0'>
            <Image boxShadow={'0 0px 15px rgba(0,0,0,0.8)'} borderRadius={'10px'} h='520px'  w='100%' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
            {/* {!isSmallScreen && <Image opacity={{base:'none' , lg:'block'}} boxShadow={'0 1px 7px rgba(0,0,0,0.5)'} left={'80px'} bottom={'-70px'} border='7px solid #1a202c' borderRadius={'50%'} position={'absolute'} w='200px' h='200px' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} ></Image>} */}
        </Box>
        <Box w='100%'>
      
            <Heading mt={{lg:'100px' , base:'50px'}} mb='35px' >
                Movie Details
            </Heading>
            <Box lineHeight={'35px'}>
                <Text  fontSize={'22px'} borderBottom={'1px solid white'} py='3'><span>Tagline</span> : {movie.tagline}</Text>
                <Text  fontSize={'22px'} borderBottom={'1px solid white'} py='3'><span>Title</span> : {movie.title}</Text>
                <Text  fontSize={'22px'} borderBottom={'1px solid white'} py='3'><span>Date</span> : {movie.release_date}</Text>
                <Text  fontSize={'22px'} borderBottom={'1px solid white'} py='3'><span>Rate</span> : {movie.vote_average}</Text>
                <Text  fontSize={'22px'} borderBottom={'1px solid white'} py='3'><span>Buget</span> : {movie.budget}$</Text>
            </Box>
        </Box>
        <br/>
        <br/>
        <Box w='100%' mt='50px'>
            <Heading  mb='35px' >
                Over view
            </Heading>
            <Box lineHeight={'35px'}>
                <Text fontSize={'18px'}>{movie.overview}</Text>
            </Box>
        </Box>
        <br/>
        <br/>
        <a href={movie.homepage} >
            <Button p='5px 70px' mb='40px' _>Warch Movie</Button>
        </a>

   </VStack>
  )
}

export default MovieDetails