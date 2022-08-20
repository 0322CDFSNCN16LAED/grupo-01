const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const Comprador = sequelize.define("Comprador",
    {
        idComprador : DataTypes.INTEGER,
        tipoComrador : DataTypes.STRING,
        
          idUsuario: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Usuarios',
                
              },
              key: 'idUsuario'
            },
            allowNull: false
          }
        
    },{
        tableName : "Comprador",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    return Comprador

  }