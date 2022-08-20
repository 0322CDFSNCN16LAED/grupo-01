'use strict';

const { v4 } = require("uuid");
const uuid = v4;
const {faker} = require("@faker-js/faker");



module.exports = {
  async up (queryInterface, Sequelize) {
    

    
     
     await queryInterface.bulkInsert('Reemplaza', [{
      idReemplaza : 1,
      nombre : "Pollo",
      createdAt : new Date(),
      updateAt : new Date(),
      },
      {
         idReemplaza : 2,
         nombre : "Vacuno",
         createdAt : new Date(),
         updateAt : new Date(),
      },
      
      {
         idReemplaza : 3,
         nombre : "Pescado",
         createdAt : new Date(),
         updateAt : new Date(),
      },
      
      {
         idReemplaza : 4,
         nombre : "Cerdo",
         createdAt : new Date(),
         updateAt : new Date(),
      }
   ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    
    
     
     await queryInterface.bulkDelete('Reemplaza', null, {});
     
  }
};
