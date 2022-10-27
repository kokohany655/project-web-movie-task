import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Paginations from './Pagination';
import CardItem from './CardItem'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from '../actions/MovieActions';

const CardList = ({getPage,pageCounts}) => {
  const [movies, setMovies] = useState([])
  // const [pageCounts, setPageCounts] = useState(0)
  const data = useSelector(state=>state.movie)
  const dispatch = useDispatch()

  useEffect(()=>{
    setMovies(data)
  },[data])
  useEffect(()=>{
    dispatch(getAllMovie())
  },[])
  return (
    <>
    {movies.length >=1?
        <Box>
          <SimpleGrid columns={{xl:[5] , lg:[4] ,md:[3] ,sm:[2] ,base:[1]}} spacing='5' m={{sm:'20', lg:'0' , base:'10px'}}>
      {movies.map((mov)=>(
          <CardItem key={mov.id} movie={mov}/>
      ))}
    </SimpleGrid>
        <Paginations getPage={getPage} pageCounts={pageCounts}/>
    </Box>:<h1>no found movie</h1>
      }
    
    </>
  )
}

export default CardList