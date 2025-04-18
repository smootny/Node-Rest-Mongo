const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-store', 'root', 'CezokOne187!', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;