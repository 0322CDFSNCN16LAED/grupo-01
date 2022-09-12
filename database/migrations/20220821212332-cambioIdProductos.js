'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS=0;");
    await queryInterface.changeColumn("Productos", "idProducto", {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
    });
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS=1;");
  },
};