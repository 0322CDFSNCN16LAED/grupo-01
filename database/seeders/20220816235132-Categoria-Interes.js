'use strict';

const { v4 } = require("uuid")
const uuid = v4


const {faker} = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    
    
     await queryInterface.bulkInsert('CategoriaInteres', [{

      idCategoriaInteres : uuid(),
      nombre : "Hamburguesas",
      createdAt : new Date(),
      updateAt : new Date(),


     },
     {

      idCategoriaInteres : uuid(),
      nombre : "Chorizos",
      createdAt : new Date(),
      updateAt : new Date(),
     },], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     
     
     
     await queryInterface.bulkDelete('CategoriaInteres', null, {});
     
  }
};
