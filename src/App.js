import { Container } from '@chakra-ui/react';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import axios from 'axios'
import { useEffect, useState } from 'react';
import {Routes , Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from './actions/MovieActions';

function App() {
  

  
  

  
 

  return (
    <div className="App">
      <NavBar/>
      <Container maxW={{xl:'container.xl' , lg:'container.lg',  md:'container.md' , sm:'container.sm' , base:'400px'}}>
        <Routes>
          <Route path='/' element={<CardList/>}  />
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
          
      </Container>
    </div>
  );
}

export default App;
