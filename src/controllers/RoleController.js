const Role = require('../models/Role')

module.exports = {
    async selectAll(req, res) {
        const roles = await Role.findAll()
        return res.json(roles)
    },

    async insert(req, res) {
        const {name, admin} = req.body;
        const role = await Role.create({name, admin})
        return res.json(admin)
    }
}