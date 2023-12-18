import React from "react"
import { Button } from "react-bootstrap"
import './styles/Profile.css'
import img from "../img/default_avatar.png"

const Profile = () =>{  
    return (
        <div className="profile-container">
            <h2 className="page-title">User Profile</h2>
            <div className="row d-flex text">
                <div className="profile-img-group col-lg-3 col-md-12 col-sm-12">
                    <div className="profile-img-container">
                        <img className="profile-img" src={img} alt="Your proto"></img>
                    </div>
                    <div className="username mb-3">
                        Username
                    </div>
                    <div>
                    <Button className="edit-profile-button">
                       Edit profile
                    </Button>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 profile-content">
                    <h4 className="d-block page-title">Stats</h4>
                </div>
            </div>
        </div>
        
    )
}

export default Profile