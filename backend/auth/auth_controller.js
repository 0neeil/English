const User = require('../db/models/User')
const Sequelize = require('sequelize');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator")

const generateJwt = (id, username, role) => {
    return jwt.sign(
        {id, username, role},
        process.env.JWT_SECRET,
        {expiresIn: '2h'}
    )
}

class AuthController{
    async registration (req, res){
        const {email, username, password} = req.body
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Registration errors"})
            }
            const dbUser = await User.findOne({
                where: {
                    [Sequelize.Op.or]: [
                    { username: username },
                    { email: email }
                    ]
                }
            });

            if (dbUser) {
                if (dbUser.username === username) {
                    res.status(406).json({ message: `Username ${username} already exists` });
                } else if (dbUser.email === email) {
                    res.status(406).json({ message: `Email ${email} already exists` });
                } else {

                    res.status(406).json({ message: `User with ${username} or ${email} already exists` });
                }
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

    async login(req, res) {
        const { email, password } = req.body;
    
        try {
            const dbUser = await User.findOne({ where: { email: email } });
    
            if (!dbUser) {
                return res.status(403).json({ message: "User with this email isn't found" });
            }
    
            const passwordMatch = await bcrypt.compare(password, dbUser.dataValues.password);
    
            if (passwordMatch) {
                const token = generateJwt(dbUser.dataValues.id, dbUser.dataValues.username, dbUser.dataValues.role);
                return res.status(200).json({
                    message: "Successful authorization",
                    token: token
                });
            } else {
                return res.status(403).json({ message: "Wrong password" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.role)
        return res.json({token})
    }
}

module.exports = new AuthController()