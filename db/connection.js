const Sequelize = require('sequelize');
const sequelize = new Sequelize('marketplace', 'inclassuser', 'Hartford1810', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

const Item = sequelize.import('../models/Item');
const Service = sequelize.import('../models/Service');

sequelize.authenticate().then(() => {
  console.log('Connection to Database Marketplace');
});

module.exports = {
  Sequelize,
  sequelize,
  models: {
    Item,
    Service
  }
};
