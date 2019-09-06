import React from 'react';

const UserComment = (prop) => {
    return (
        <li>
            <div>Gif Goes Here</div>
            <h2>{prop.message}</h2>
            <p>{prop.numOfKills}</p>
        </li>
    )
}

export default UserComment;