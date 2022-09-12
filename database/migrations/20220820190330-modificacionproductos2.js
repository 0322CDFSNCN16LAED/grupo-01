'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
     queryInterface.changeColumn('Productos', "relevancia" , 
     {  type: Sequelize.DataTypes.STRING, });
     
  },


};

