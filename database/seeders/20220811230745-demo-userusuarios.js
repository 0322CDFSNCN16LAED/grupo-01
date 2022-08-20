'use strict';

const {faker} = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkInsert('Usuarios', [{
          idUsuario : 12,
          nombre : faker.name.firstName(),
          apellido : faker.name.lastName(),  
          nacimiento : faker.date.birthdate(),
          email : "dani@hotmail.com",
          sexo : "M",
          contraseña : "danidani", 
          celular : faker.phone.number(), 
          imagen : faker.image.avatar(), 
          createdAt : new Date(),
          updateAt : new Date(),
         
     },
     {
      idUsuario : 11,
      nombre : faker.name.firstName(),
      apellido : faker.name.lastName(),  
      nacimiento : faker.date.birthdate(),
      email : "jose.labaqui@hotmail.com",
      sexo : "M",
      contraseña : "josejose", 
      celular : faker.phone.number(), 
      imagen : faker.image.avatar(), 
      createdAt : new Date(),
      updateAt : new Date(),
     
 }
   ]
     
     , {});
    
  },

  async down (queryInterface, Sequelize) {
   
     
     await queryInterface.bulkDelete('Usuarios', null, {});
     
  }
};
