import React from "react";
import Mask from "../../img/mask.jpg"
import './profile.css';

function Profile () {
    return(
        <div className="profile">
            <div className="me">
                <img src={Mask} alt="foto" />
                <p>Ilon Mask</p>
            </div>
            <div className="posts">
                <input type="text" />
                <button>Добавить пост</button>
                <div className="post">
                    <img src={Mask} className="imgmini" />
                    <span>Ilon Mask</span>
                    <p>Hello, world!</p>
                </div>
            </div>
        </div>
    )

}

export default Profile