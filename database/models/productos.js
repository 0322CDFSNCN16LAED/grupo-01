

module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Productos",{
      idProducto:{
        type : DataTypes.INTEGER,
        primaryKey : true
      }, 
      nombre : DataTypes.STRING, 
      precio : DataTypes.DECIMAL(10, 2),
      descripcion : DataTypes.STRING, 
      descuento :DataTypes.DECIMAL(10, 2),
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
        createdAt : "createdAt",
        updatedAt : "updateAt",

    });


  

    return Producto

  }