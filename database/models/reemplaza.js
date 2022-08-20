const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const Reemplaza = sequelize.define("Reemplaza",
    {
        idReemplaza : DataTypes.INTEGER,
        nombre : DataTypes.INTEGER,
        
    },{
        tableName : "Usuarios",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    Reemplaza.associate = function(models){
        Reemplaza.hasMany(models.Productos,{
          as :"productos",
          foreignKey :"idReemplaza"
        })
      }


    return Reemplaza

  }