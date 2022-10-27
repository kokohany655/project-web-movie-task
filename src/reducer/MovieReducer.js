import { AllMovie } from '../types/movieType'

const initalState = {movie :[] , pageCount:0}
export const MovieReducer = (state = initalState ,action )=>{
    switch(action.type){
        case AllMovie:return{movie:action.data , pageCount: action.pages};
        default:return state
    }
}