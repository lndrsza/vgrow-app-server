const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try 
    {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
        next()
    } 
    catch (error)
    {
        return res.status(401).json({error: "Falha na autenticação"})
    }
}