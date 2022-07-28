const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    async selectAll(req, res) {
        const users = await User.findAll()
        return res.json(users)
    },

    async insert(req, res) {
        const {first_name, last_name, active, password, email} = req.body
        const user = await User.create({first_name, last_name, active, password, email})
        return res.json(user)
    },
    
    async login(req, res){
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user){
            const password_valid = await bcrypt.compare(req.body.password, user.password)
            if (password_valid){
                token = jwt.sign({
                    "id" : user.id,
                    "email" : user.email,
                    "first_name" : user.first_name
                }, 
                process.env.JWT_KEY,
                {
                    expiresIn : "1d"
                }
                )
                return res.status(200).json(
                    {
                        message: "Autenticação com sucesso",
                        token : token}
                    )
            } else {
                return res.status(400).json({error: "Senha incorreta"})
            }
        } else {
            return res.status(404).json({error: "Usuário não encontrado"})
        }
    }
}