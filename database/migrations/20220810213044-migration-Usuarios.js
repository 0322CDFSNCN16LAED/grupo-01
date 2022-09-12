

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Usuarios', { 
      idUsuario: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      nombre : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING, 
      },
      apellido : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING, 
      },
      nacimiento : {
        allowNull : false,
        type: Sequelize.DataTypes.DATE
      },
      email : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING,
      },
      sexo : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING,
      },
      contraseña : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
      },
      celular : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
      },
      imagen : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING, 
      },
      createdAt : {
        allowNull : false,
        type: Sequelize.DataTypes.DATE, 
      },
      updateAt : {
        allowNull : false,
        type: Sequelize.DataTypes.DATE, 
      },
    
    
    });


     
  },

  async down (queryInterface, Sequelize) {
    
     
     await queryInterface.dropTable('Usuarios');
     
  }
};
