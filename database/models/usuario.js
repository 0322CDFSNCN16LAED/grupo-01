const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuarios",
    {
          idUsuario : DataTypes.INTEGER,
          nombre : DataTypes.INTEGER,
          apellido : DataTypes.STRING,  
          nacimiento : DataTypes.DATE,
          email : DataTypes.STRING,
          sexo : DataTypes.STRING,
          contraseña : DataTypes.INTEGER, 
          celular : DataTypes.INTEGER, 
          imagen : DataTypes.STRING, 
         
        
    },{
        tableName : "Usuarios",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    return Usuario

  }