import { AllMovie } from "../types/movieType"
import axios from 'axios'
export const getAllMovie =()=>{

    return async(dispatch)=>{
        const {data} =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=166b462263df3d4c4224c0029226d126&language=en-US&page=1`)
        dispatch({type:AllMovie , data:data.results , pages:data.total_pages})
    }
    
}

export const getAllMovieBySearch =(name)=>{

    return async(dispatch)=>{
        const {data} = await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=166b462263df3d4c4224c0029226d126&query=${name}&page=1`)
        dispatch({type:AllMovie , data:data.results , pages:data.total_pages})
    }
    
}

export const getPage =(page)=>{

    return async(dispatch)=>{
        const {data} =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=166b462263df3d4c4224c0029226d126&language=en-US&page=${page}`)
        dispatch({type:AllMovie , data:data.results , pages:data.total_pages})
    }
    
}