const { Model, DataTypes } = require('sequelize')

class Role extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            admin: DataTypes.TINYINT,
        }, {
            sequelize,
            freezeTableName: true,
            
        })
    }
}

module.exports = Role