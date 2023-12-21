import React from "react"

import UserInforms from "../components/UserInforms"
import './styles/Profile.css'


const Profile = () =>{ 

    return (
        <div className="profile-container">
            <h2 className="page-title">User Profile</h2>
            <div className="row d-flex text">
                <div className="profile-img-group col-lg-3 col-md-12 col-sm-12">
                    <UserInforms/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 profile-content">
                    <h4 className="d-block page-title">Stats</h4>
                </div>
            </div>
        </div>
        
    )
}

export default Profile