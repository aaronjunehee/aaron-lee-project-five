import React from 'react';

const UserComment = (prop) => {
    return (
        <li>
            <h2>{prop.message}</h2>
            <p>{prop.numOfKills}</p>
            <img src={prop.gif} />
        </li>
    )
}

export default UserComment;