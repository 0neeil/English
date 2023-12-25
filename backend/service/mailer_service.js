const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: "learner.english.easy@gmail.com",
            pass: "aa6756aa",
        }
    },
    {
        from: "Mailer Test <learner.english.easy@gmail.com>"
    }

)

const mailer = message =>{
    transporter.sendMail(message, (error, info) => {
        if(error) return console.log(error)
        return console.log("success ", info)
    })

}

module.exports = mailer