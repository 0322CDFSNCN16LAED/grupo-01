

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Factura', { 
      idFactura: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      idUsuario : {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Usuarios',
            
          },
          key: 'idUsuario'
        },
        allowNull: false
      },
     
      total : {
        allowNull : false,
        type: Sequelize.DataTypes.DECIMAL(10, 2)
      },
      descripcion : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING, 
      },
      direccionEntrega : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING
      },
      fecha : {
        allowNull : false,
        type: Sequelize.DataTypes.DATE,
      },
      numeroFactura : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER,
      },
      banco : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING,
      },
      cuota : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER(3),
      },
      
      idTipoPago : {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'TipoPago',
           
          },
          key: 'idTipoPago'
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
    
     
     await queryInterface.dropTable('Factura');
     
  }
};