'use strict';


const { v4 } = require("uuid")
const uuid = v4


const {faker} = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkInsert('Productos', [{
      idProducto: uuid(), 
      nombre : faker.commerce.productName(), 
      precio : faker.commerce.price(),
      descripcion : faker.commerce.productDescription(), 
      descuento : 10,
      idReemplaza : 1,
      presentacion : "8 unidades",
      relevancia : "ninguna", 
      imagen : faker.image.food(), 
      stockFisico : 10, 
      stockVirtual : 10, 
      vidasQueSalva : 2, 
      ltsH2oAhorrada : 2, 
      kgCo2Ahorrado : 2, 
      createdAt : new Date(),
      updateAt : new Date(),
     
 },{
   idProducto: uuid(), 
   nombre : faker.commerce.productName(), 
   precio : faker.commerce.price(),
   descripcion : faker.commerce.productDescription(), 
   descuento : 10,
   idReemplaza : 2,
   presentacion : "4 unidades",
   relevancia : "oferta", 
   imagen : faker.image.food(), 
   stockFisico : 5, 
   stockVirtual : 5, 
   vidasQueSalva : 5, 
   ltsH2oAhorrada : 5, 
   kgCo2Ahorrado : 5, 
   createdAt : new Date(),
   updateAt : new Date(),
  
},
{
   idProducto: uuid(), 
   nombre : faker.commerce.productName(), 
   precio : faker.commerce.price(),
   descripcion : faker.commerce.productDescription(), 
   descuento : 10,
   idReemplaza : 3,
   presentacion : "Kilos",
   relevancia : "vendidos", 
   imagen : faker.image.food(), 
   stockFisico : 4, 
   stockVirtual : 5, 
   vidasQueSalva : 5, 
   ltsH2oAhorrada : 5, 
   kgCo2Ahorrado : 5, 
   createdAt : new Date(),
   updateAt : new Date(),
  
}], {});
    
},

  async down (queryInterface, Sequelize) {
   
     
     await queryInterface.bulkDelete('Productos', null, {});
     
  }
};
