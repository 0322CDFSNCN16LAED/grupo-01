
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Comprador', { 
      idComprador: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      tipoComrador : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING
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
    
     
     await queryInterface.dropTable('Comprador');
     
  }
};