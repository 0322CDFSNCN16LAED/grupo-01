const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const CategoriaInteres = sequelize.define("CategoriaInteres",
    {
        idCategoriaInteres : DataTypes.INTEGER,
        nombre : DataTypes.INTEGER,
        
    },{
        tableName : "CategoriaInteres",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    return CategoriaInteres

  }