import React from 'react';

const UserComment = ({gif, message, numOfKills}) => {
    return (
        <li className="userComment">
            <div className="userCommentGif">
                <img src={gif} />
            </div>
            <h4>{message}</h4>
            <p className="deathCount">🥀x{numOfKills}</p>
        </li>
    )
}

export default UserComment;