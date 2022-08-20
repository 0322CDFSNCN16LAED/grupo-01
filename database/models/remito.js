const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const Remito = sequelize.define("Remito",
    {
        idRemito: DataTypes.INTEGER,
         
          deposito : DataTypes.STRING,
         
          idFactura: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Factura',
               
              },
              key: 'idFactura'
            },
            allowNull: false
          }
        
    },{
        tableName : "Remito",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    return Remito

  }