'use strict';

const { v4 } = require("uuid")
const uuid = v4


const {faker} = require("@faker-js/faker");


module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Factura', [{
    idFactura: 1,
         
    idUsuario : 12,
   
    total : faker.commerce.price(),
  
    descripcion :faker.commerce.productDescription(), 
  
    direccionEntrega : faker.address.streetAddress(),
    
    fecha :new Date (),
    
    numeroFactura : 8,
    
    banco : "Santander",
    
    cuota : 3,
    
    
    idTipoPago : 1,
    createdAt : new Date(),
      updateAt : new Date(),
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Factura', null, {});
    
  }
};
