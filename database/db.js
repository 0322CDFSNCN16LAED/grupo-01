const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./db-products.json");

module.exports = {
    getAll: function () {
        return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    },
    getOne: function(id) {
        return this.getAll().find(product => product.id == id )
    },
    creacionId : function () {
        return this.getAll()[this.getAll().length - 1].id + 1
    },
    writeAndSave : function (elementToWirteAndSave) {
        const writed = JSON.stringify(elementToWirteAndSave, null, 4);
        fs.writeFileSync(productsFilePath, writed);
    } 

};