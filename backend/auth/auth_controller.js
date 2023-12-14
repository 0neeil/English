const User = require('../db/models/User')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator")


class AuthController{
    async registration (req, res){
        const {email, username, password} = req.body
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({msg: "Registration errors"})
            }
            const dbuser = await User.findAll({where: {email: email}})
            if(dbuser.length){
                res.status(406).json({message : `User with ${email} email already exists`})
            }
            else{
                bcrypt.genSalt(7,  function(err, salt) {
                    bcrypt.hash(password, salt, async function(err, hash) {
                        await User.create({email: email, username: username, password: hash })

                        res.status(200).json({message: "User added"})
                    });
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    // async check(req, res, next) {
    //     const token = generateJwt(req.user.id, req.user.role)
    //     return res.json({token})
    // }
}

module.exports = new AuthController()