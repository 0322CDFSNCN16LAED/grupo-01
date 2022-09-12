'use strict';

const { v4 } = require("uuid")
const uuid = v4


const {faker} = require("@faker-js/faker");


module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     
     
     await queryInterface.bulkInsert('Vendedor', [{
      idVendedor : uuid(),
      tipoVendedor : "Jefe",
        
        idUsuario: 12,
        createdAt : new Date(),
      updateAt : new Date(),
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     

    await queryInterface.bulkDelete('Vendedor', null, {});
    
  }
};
