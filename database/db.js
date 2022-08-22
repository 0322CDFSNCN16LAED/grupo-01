const fs = require("fs");
const path = require("path");
const { debugPort } = require("process");

const productsFilePath = path.join(__dirname, "./db-products.json");
const usersFilePath = path.join(__dirname, "./db-users.json");

module.exports = {
    getAll: function () {
        return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    },
    getAllUsers: function () {
        return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    },
    getOne: function(id) {
        return this.getAll().find(product => product.id == id )
    },
    getOneUser: function(id) {
        return this.getAllUsers().find(user => user.id == id )
    },
    creacionId : function () {
        return this.getAll()[this.getAll().length - 1].id + 1
        
    },
    creacionIdUser : function () {
        return this.getAllUsers()[this.getAllUsers().length - 1].id + 1
    },
    writeAndSave : function (elementToWirteAndSave) {
        const writed = JSON.stringify(elementToWirteAndSave, null, 4);
        fs.writeFileSync(productsFilePath, writed);
    } ,
    writeAndSaveUser : function (elementToWirteAndSave) {
        const writeUser = JSON.stringify(elementToWirteAndSave, null, 4);
        fs.writeFileSync(usersFilePath, writeUser);
    } 

};