

module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuarios",
    {
          idUsuario :
          { type : DataTypes.INTEGER,
                        primaryKey : true,
          },
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
        createdAt : "createdAt",
        updatedAt : "updateAt"

    });

    return Usuario

  }