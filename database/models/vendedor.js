const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const Vendedor = sequelize.define("Vendedor",
    {
        idVendedor : DataTypes.INTEGER,
        tipoVendedor : DataTypes.STRING,
          
          idUsuario: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Usuarios',
                
              },
              key: 'idUsuario'
            },
            allowNull: false
          },
        
    },{
        tableName : "Vendedor",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    return Vendedor

  }