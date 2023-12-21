import React, { useState } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import img from "../img/default_avatar.png"
import './styles/UserInform.css'

const UserInforms = () =>{

    const formFields = [
        { label: "Name:", value: userData.userinforms.name },
        { label: "Bio:", value: userData.userinforms.biography, as: "textarea", rows: 3 },
        { label: "Phone:", value: userData.userinforms.phone },
        { label: "Link 1:", value: userData.userinforms.link1 },
        { label: "Link 2:", value: userData.userinforms.link2 },
        { label: "Link 3:", value: userData.userinforms.link3 },
      ];

    const [editProfile, setEditProfile] = useState(false)
    const [editName, setEditName] = useState('')
    const userData = JSON.parse(localStorage.user)
   

    return (
        <div>
        <div className="profile-img-container">
            <img className="profile-img" src={img} alt="Your proto"></img>
        </div>

        <div>
            {editProfile === false ? 
                <div>
                    <div className="username mb-3">
                        {userData.username}
                    </div>
                    
                    {userData.userinforms.name &&                     
                        <div className="username mb-3">
                            {userData.userinforms.name}
                        </div>
                    }
                <Button onClick={() => setEditProfile(true)} className="edit-profile-button">
                    Edit profile
                </Button>
                </div>
                :
                <div>
                    <Form>
                    {formFields.map((field, index) => (
                        <FormGroup 
                            key={index} 
                            className="d-flex justify-content-md-center justify-content-lg-between edit-group"
                        >
                        <FormLabel className="d-inline edit-label">{field.label}</FormLabel>
                        <FormControl
                            value={field.value}
                            className="d-inline edit-input"
                            as={field.as}
                            rows={field.rows} 
                        ></FormControl>
                        </FormGroup>
                        ))
                    }
                    </Form>
                    <div className="d-flex justify-content-center mb-4">
                    <Button className="me-4">Save</Button>
                    <Button onClick={() => setEditProfile(false)}>Cancel</Button>
                    </div>
                </div>
            }
                    
        </div>
    </div>)
}

export default UserInforms