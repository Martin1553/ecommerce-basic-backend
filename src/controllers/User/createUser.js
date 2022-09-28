const { User } = require('../../db')

async function createUser(req, res) {
    let {
        name,
        email,
        username,
        password
    } = req.body
    try {
        await User.create({
            name,
            email,
            username,
            password
        })
         res.redirect('/users');
    } catch (error) {
        res.send(error)
    }
}


module.exports =  {
    createUser 
}