'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Products', [
      {
        "name": "Café puro",
        "price": 5,
        "flavor": null,
        "complement": null,
        "type": "breakfast",
        "subType": "drinks",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Café com leite vegetal",
        "price": 7,
        "flavor": null,
        "complement": null,
        "type": "breakfast",
        "subType": "drinks",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Sanduiche natural",
        "price": 10,
        "flavor": "cenoura e azeitonas",
        "complement": null,
        "type": "breakfast",
        "subType": "breakfast",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Suco natural",
        "price": 7,
        "flavor": "laranja",
        "complement": null,
        "type": "breakfast",
        "subType": "drinks",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 10,
        "flavor": "beterraba e feijão",
        "complement": null,
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 10,
        "flavor": "shimeji e paris",
        "complement": null,
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 10,
        "flavor": "falafel",
        "complement": null,
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "beterraba e feijão",
        "complement": "queijo de castanhas",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "shimeji e paris",
        "complement": "queijo de castanhas",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "falafel",
        "complement": "queijo de castanhas",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "beterraba e feijão",
        "complement": "ovo vegetal",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "shimeji e paris",
        "complement": "ovo vegetal",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "falafel",
        "complement": "ovo vegetal",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 15,
        "flavor": "beterraba e feijão",
        "complement": null,
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 15,
        "flavor": "shimeji e paris",
        "complement": null,
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 15,
        "flavor": "falafel",
        "complement": null,
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "beterraba e feijão",
        "complement": "queijo de castanhas",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "shimeji e paris",
        "complement": "queijo de castanhas",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "falafel",
        "complement": "queijo de castanhas",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "beterraba e feijão",
        "complement": "ovo vegetal",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "shimeji e paris",
        "complement": "ovo vegetal",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "falafel",
        "complement": "ovo vegetal",
        "type": "all-day",
        "subType": "hamburguer",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Batata frita",
        "price": 5,
        "flavor": null,
        "complement": null,
        "type": "all-day",
        "subType": "side",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Anéis de cebola",
        "price": 5,
        "flavor": null,
        "complement": null,
        "type": "all-day",
        "subType": "side",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Água 500mL",
        "price": 5,
        "flavor": null,
        "complement": null,
        "type": "all-day",
        "subType": "drinks",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Água 750mL",
        "price": 7,
        "flavor": null,
        "complement": null,
        "type": "all-day",
        "subType": "drinks",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Refrigerante 500mL",
        "price": 5,
        "flavor": null,
        "complement": null,
        "type": "all-day",
        "subType": "drinks",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Refrigerante 750mL",
        "price": 7,
        "flavor": null,
        "complement": null,
        "type": "all-day",
        "subType": "drinks",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {}),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Products', null, {})
  }

};
