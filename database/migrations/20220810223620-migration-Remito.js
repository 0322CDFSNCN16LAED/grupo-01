

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Remito', { 
      idRemito: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      deposito : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING
      },
      idFactura: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Factura',
           
          },
          key: 'idFactura'
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
    
     
     await queryInterface.dropTable('Remito');
     
  }
};