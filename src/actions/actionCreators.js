import * as actions from "./actionTypes"
import { addLikeMovie } from './actionCreators';

//action function example
export const addLikeMovie = description => ({
    type: actions.ADD_LIKE,
        payload: {
            description:""
        }
})