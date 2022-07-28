const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

class User extends Model {
    static init(sequelize) {
        super.init({
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                set(value) {
                    const hash = bcrypt.hashSync(value, 10)
                    this.setDataValue('password', hash)
                }
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            active: DataTypes.TINYINT(1),

        }, {
            sequelize,
            freezeTableName: true,
        })
    }
}

module.exports = User