'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
     queryInterface.changeColumn('Usuarios', "contraseña" , 
     {  type: Sequelize.DataTypes.STRING, });
     
  },


};
