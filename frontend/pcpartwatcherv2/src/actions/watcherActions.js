import {GET_PARTS, POST_LIST} from './types';

export const getParts = (id) => dispatch =>{
        fetch(`http://localhost:5000/parts/`)
        .then(res => res.json())
        .then(parts => dispatch({
            type: GET_PARTS,
            payload: parts
        }));
}

export const postLinks = (links) => dispatch =>{
    console.log('action called');
    fetch('http://localhost:5000/input', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(links)
    })
    .then(res => res.json())
    .then(id => dispatch({
        type: POST_LIST,
        payload: id
    }));
}