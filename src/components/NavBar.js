import { FormControl, Input, Text, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllMovie, getAllMovieBySearch } from '../actions/MovieActions'

const NavBar = () => {
  const dispatch = useDispatch()

  const search = async(name)=>{
    if(name===''){
      dispatch(getAllMovie())
    }
    dispatch(getAllMovieBySearch(name))
  }
  return (
    <Flex w='100%' mb='30px' boxShadow={'0 1px 7px rgba(0,0,0,0.5)'}>
        <Container py='4' alignItems={'center'} maxW={{xl:'container.xl' , lg:'container.lg',  md:'container.md' , sm:'container.sm' , base:'400px'}} display={'flex'} justifyContent='space-between' >
            <Text mr={'5'} fontSize='2xl' fontWeight={'700'} bgGradient={'linear(to-r ,cyan.400 ,blue.500 ,purple.600)'} bgClip='text'>Movie</Text>
            <FormControl display={'flex'}>
                <Input onChange={e=>search(e.target.value)} type={'text'} placeholder='Search...'></Input>
            </FormControl>
        </Container>
    </Flex>
  )
}

export default NavBar