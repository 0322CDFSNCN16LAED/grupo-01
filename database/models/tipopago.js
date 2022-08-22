

module.exports = (sequelize, DataTypes) => {

    const TipoPago = sequelize.define("TipoPago",
    {
        idTipoPago : DataTypes.INTEGER,
        nombre : DataTypes.INTEGER,
        
    },{
        tableName : "TipoPago",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

    return TipoPago

  }