'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
     queryInterface.changeColumn('Productos', "idProducto" , 
     {  type: Sequelize.DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true, 
    });
     
  },


};
