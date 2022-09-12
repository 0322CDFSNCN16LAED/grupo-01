
module.exports = (sequelize, DataTypes) => {

    const Reemplaza = sequelize.define("Reemplaza",
    {
        idReemplaza : { type : DataTypes.INTEGER,
        primaryKey : true
        },

        nombre : DataTypes.INTEGER,
        
        
    },{
        tableName : "Reemplaza",
        timestamps : true,
        createdAt : "createdAt",
        updatedAt : "updateAt"

    });

    Reemplaza.associate = (models) => {

      Reemplaza.hasMany(models.Productos, {
          as :"productos",
          foreignKey : "idReemplaza"
        });
  
      }


    return Reemplaza

  };