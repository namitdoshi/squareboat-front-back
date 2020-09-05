const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Recruiter", {
    recruiter_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false  
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
