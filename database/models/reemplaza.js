
module.exports = (sequelize, DataTypes) => {

    const Reemplaza = sequelize.define("Reemplaza",
    {
        idReemplaza : DataTypes.INTEGER,
        nombre : DataTypes.INTEGER,
        
    },{
        tableName : "Reemplaza",
        timestamps : true,
        createdAt : "created_at",
        updateAt : "update_at"

    });

 


    return Reemplaza

  }