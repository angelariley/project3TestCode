module.exports = (sequelize, DataTypes) => {
  return sequelize.define('item', {
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    seller: DataTypes.STRING,
    location: DataTypes.STRING
  });
};
