

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Factura_Producto', { 
      idFactura_Producto: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      idProducto: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Productos',
            
          },
          key: 'idProducto'
        },
        allowNull: false
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
      cantidad : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
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
    
     
     await queryInterface.dropTable('Factura_Producto');
     
  }
};