const User = require("../db/models/User")
const UserInform = require("../db/models/UserInform");
const UserVocabularies = require("../db/models/UserVocabulary")
const Vocabularies = require("../db/models/Vocabulary")

class UserController {
    async getUserByid(req, res) {
        try {
            const {id} = req.params
            const user = await User.findOne({
                where: { id: id},
                attributes: ["username", "email", "role", "createdAt"],
                include: [
                    {
                        model: UserInform,
                        as: 'userinforms', 
                        attributes: ["name", "biography", "phone", "link1", "link2", "link3"]
                    }
                ]
            })

            if(!user){
                res.status(400).json({message: `User with id ${id} not found` })
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async updateUserInform (req, res) {
        try {
            const {id} = req.params
            const {name, biography, phone, link1, link2, link3} = req.body
            const userInfo = await UserInform.findOne({where:{userid: id}})
            if(userInfo){
                if(name != userInfo.name) userInfo.name = name 
                if(biography != userInfo.biography) userInfo.biography = biography 
                if(phone != userInfo.phone) userInfo.phone = phone 
                if(link1 != userInfo.link1) userInfo.link1 = link1
                if(link2 != userInfo.link2) userInfo.link2 = link2 
                if(link3 != userInfo.link3) userInfo.link3 = link3 
                userInfo.save()
                res.status(200).json({message:"Updating success"})
            }else
                res.status(404).json({message: "User not found"})
            
        } catch (error) {
            res.status(500).json(error)
        }
    } 
}

module.exports = new UserController() 