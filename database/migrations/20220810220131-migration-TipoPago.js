

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('TipoPago', { 
      idTipoPago: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      nombre : {
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
    
     
     await queryInterface.dropTable('TipoPago');
     
  }
};
