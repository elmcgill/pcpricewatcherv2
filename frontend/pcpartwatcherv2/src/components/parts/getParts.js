import React from 'react';
import {useParams} from 'react-router-dom';

import Parts from './parts';

function GetParts(){
    const {id} = useParams();

    return(
        <div>
            <Parts listId={id}/>
        </div>
    );
}

export default GetParts;