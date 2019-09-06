import React from 'react';

const UserComment = (prop) => {
    return (
        <li>
            <h2>{prop.message}</h2>
            <p>{prop.numOfKills}</p>
            <div>Gif Goes Here</div>
        </li>
    )
}

export default UserComment;