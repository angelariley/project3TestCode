const connection = require("./connection");
const { Item, Service } = connection.models;

const itemSeeds = require("./seedDataItems.json");
const serviceSeeds = require("./seedDataServices.json");

Item.destroy({ where: {} }).then(() => {
  return Item.bulkCreate(itemSeeds).then(() => {
    return Service.destroy({ where: {} })
      .then(() => {
        return Service.bulkCreate(serviceSeeds);
      })
      .then(() => {
        process.exit();
      });
  });
});
