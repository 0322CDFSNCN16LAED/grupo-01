

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Productos', { 
      idProducto: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.DataTypes.INTEGER,
      },
      nombre : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING, 
      },
      precio : {
        allowNull : false,
        type: Sequelize.DataTypes.DECIMAL(10, 2)
      },
      descripcion : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING, 
      },
      descuento : {
        allowNull : false,
        type: Sequelize.DataTypes.DECIMAL(10, 2)
      },
      
      idReemplaza : {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Reemplaza',
           
          },
          key: 'idReemplaza'
        },
        allowNull: false
      },
      presentacion : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING,
      },
      relevancia : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
      },
      imagen : {
        allowNull : false,
        type: Sequelize.DataTypes.STRING, 
      },
      stockFisico : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
      },
      stockVirtual : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
      },
      vidasQueSalva : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
      },
      ltsH2oAhorrada : {
        allowNull : false,
        type: Sequelize.DataTypes.INTEGER, 
      },
      kgCo2Ahorrado : {
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
    
     
     await queryInterface.dropTable('Productos');
     
  }
};