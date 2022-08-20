'use strict';

const { v4 } = require("uuid")
const uuid = v4


const {faker} = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('TipoPago', [{
      idTipoPago : 1,
      nombre : "Tarjeta",
      createdAt : new Date(),
      updateAt : new Date(),
      },
      {
        idTipoPago : 2,
        nombre : "Debito",
        createdAt : new Date(),
        updateAt : new Date(),
        },
        {
          idTipoPago : 3,
          nombre : "Efectivo",
          createdAt : new Date(),
          updateAt : new Date(),
          }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('TipoPago', null, {});
     
  }
};
