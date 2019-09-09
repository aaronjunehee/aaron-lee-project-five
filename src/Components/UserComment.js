import React from 'react';

const UserComment = (prop) => {
    return (
        <li className="userComment">
            <div className="userCommentGif">
                <img src={prop.gif} />
            </div>
            <h4>{prop.message}</h4>
            <p class="deathCount">🥀x{prop.numOfKills}</p>
        </li>
    )
}

export default UserComment;