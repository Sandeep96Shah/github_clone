import { FETCH } from "./actionTypes";

export function getIssuesHelper(){
    const url="https://developer.github.com/v3/issues/";
    fetch(url)
    .then(response => response.json())
    .then(data => console.log("data", data))
    .catch(err => console.log("error", err));
}

export function getIssues(data){
    return {
        type:FETCH,
        payload:data,
    }
}