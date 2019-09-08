import React from 'react';

const UserComment = (prop) => {
    return (
        <li className="userComment">
            <div className="userCommentGif">
                <img src={prop.gif} />
            </div>
            <h2>{prop.message}</h2>
            <p>{prop.numOfKills}</p>
        </li>
    )
}

export default UserComment;