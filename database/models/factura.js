
module.exports = (sequelize, DataTypes) => {

    const Factura = sequelize.define("Factura",
    {
        idFactura: DataTypes.INTEGER,
        idUsuario : {
            type: DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Usuarios',
                
              },
              key: 'idUsuario'
            },
            allowNull: false
        },
         
        total : DataTypes.DECIMAL(10, 2),
        descripcion :DataTypes.STRING, 
        direccionEntrega : DataTypes.STRING,
        fecha :DataTypes.DATE,
        numeroFactura : DataTypes.INTEGER,
        banco : DataTypes.STRING,
        cuota : DataTypes.INTEGER(3),
        idTipoPago : {
            type: DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'TipoPago',
               
              },
              key: 'idTipoPago'
            },
            allowNull: false
          },    
    },
    {
        tableName : "Factura",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    return Factura

  }