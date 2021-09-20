import { FETCH } from "../actions/actionTypes";

const initialState = {
    issues:[]
}

export default function githubIssues(state=initialState, action){
    switch(action.type){
        case FETCH:
            return state;
        default:
            return state;
    }
}