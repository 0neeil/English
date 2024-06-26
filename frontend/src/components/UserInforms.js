import React, { useState, useEffect } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { updateUserInforms } from "../http/userAPI"
import { getUser } from "../http/userAPI"
import img from "../img/default_avatar.png"
import './styles/UserInform.css'

const UserInforms = () =>{
    const [userData, setUserData] = useState({})
    const [editProfile, setEditProfile] = useState(false)
    const [editName, setEditName] = useState("")
    const [editBio, setEditBio] = useState("")
    const [editPhone, setEditPhone] = useState("")
    const [editLink1, setEditLink1] = useState("")
    const [editLink2, setEditLink2] = useState("")
    const [editLink3, setEditLink3] = useState("")

        useEffect( () => {
            async function fetchData () {
                const {data} = await getUser()
                setEditName(data.userinforms.name)
                setEditBio(data.userinforms.biography)
                setEditPhone(data.userinforms.phone)
                setEditLink1(data.userinforms.link1)
                setEditLink2(data.userinforms.link2)
                setEditLink3(data.userinforms.link3)
            }
            fetchData()
        },[])
    

    
    

    let formFields = [
        { label: "Name:", value: editName, set: setEditName, type: "text", style: "edit-name mb-0"},
        { label: "Bio:", title:"Bio:", value: editBio || '', set: setEditBio, as: "textarea", rows: 3, type: "text", style: " mb-2"},
        { label: "Phone:", title:"Phone:", value: editPhone || '', set: setEditPhone, type: "tel", placeholder: "+380990123456", style: " mb-2"},
        { label: "Link 1:", title:"Links:", value: editLink1 || '', set: setEditLink1, type: "text", style: "a mb-1" },
        { label: "Link 2:", value: editLink2 || '', set: setEditLink2, type: "text", style: "a mb-1" },
        { label: "Link 3:", value: editLink3 || '', set: setEditLink3, type: "text", style: "a mb-3" },
      ];

      const handleSendForm = async () =>{
            const {status} = await updateUserInforms(editName, editBio, editPhone, editLink1, editLink2, editLink3)
            if (status===200)
                setEditProfile(false)
      }


    return (
        <div>
            <div className="profile-img-container">
                <button 
                    className="profile-img-edit"
                >
                    <img className="profile-img" src={img} alt="Your proto"></img>
                </button>
            </div>

            <div>
                {editProfile === false ? 
                    <div>                    
                        {formFields.map((field, index) => (
                            <div>
                                <div key={index+10}
                                    className="edit-lable"
                                >
                                    {field.title}
                                </div>
                                {field.label.includes("Link") ?
                                <a 
                                    key={index}
                                    className={field.style}
                                    href={field.value}
                                    target="_blank"
                                >
                                    {field.value}
                                </a>
                                :
                                <div 
                                    key={index}
                                    className={field.style}
                                >   
                                    {field.value}    
                                </div>
                                }


                                {index === 0 && 
                                    <div 
                                        key={20}
                                        className="edit-username mt-0 mb-3"
                                    >   
                                        {userData.username}    
                                    </div>
                                    }
                                
                            </div>
                            

                        ))}
                    <Button variant="success" className="mt-3 edit-profile-button" onClick={() => setEditProfile(true)} >
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
                                type={field.type}
                                value={field.value}
                                placeholder={field.placeholder}
                                onChange={e => field.set(e.target.value)}
                                className="d-inline edit-input"
                                as={field.as}
                                rows={field.rows} 
                                required
                            >
                            </FormControl>
                            </FormGroup>
                            ))
                        }
                        </Form>
                        <div className="d-flex justify-content-center mb-4">
                        <Button variant="success" onClick={() => handleSendForm()} className="me-4">Save</Button>
                        <Button variant="danger" onClick={() => setEditProfile(false)}>Cancel</Button>
                        </div>
                    </div>
                }
                        
            </div>
        </div>
    )
}

export default UserInforms