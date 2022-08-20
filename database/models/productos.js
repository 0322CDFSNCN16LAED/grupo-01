const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const Producto = sequelize.define("Productos",
    {
          idProducto:DataTypes.INTEGER, 
          nombre : DataTypes.STRING, 
          precio : DataTypes.DECIMAL(10, 2),
          descripcion : DataTypes.STRING, 
          descuento : DataTypes.DECIMAL(10, 2),
          idReemplaza : {
            type: DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Reemplaza',
               
              },
              key: 'idReemplaza'
            },
            allowNull: false
          },
          presentacion : DataTypes.STRING,
          relevancia : DataTypes.INTEGER, 
          imagen : DataTypes.STRING, 
          stockFisico : DataTypes.INTEGER, 
          stockVirtual : DataTypes.INTEGER, 
          vidasQueSalva : DataTypes.INTEGER, 
          ltsH2oAhorrada : DataTypes.INTEGER, 
          kgCo2Ahorrado : DataTypes.INTEGER, 
        
        
    },{
        tableName : "Productos",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });


    Productos.associate = function(models){
      Productos.belongsTo(models.Reemplaza,{
        as :"reemplaza",
        foreignKey :"idReemplaza"
      })
    }

    return Producto

  }