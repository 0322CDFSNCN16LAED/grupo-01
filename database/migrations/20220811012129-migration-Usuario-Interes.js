

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Usuario_Interes', { 
      idUsuario_Interes: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      
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
      idCategoriaInteres: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'CategoriaInteres',
            
          },
          key: 'idCategoriaInteres'
        },
        allowNull: false
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
    
     
     await queryInterface.dropTable('Usuario_Interes');
     
  }
};