module.exports = (sequelize, DataTypes) => {
  return sequelize.define("service", {
    type: DataTypes.STRING,
    details: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    availability: DataTypes.STRING,
    location: DataTypes.STRING
  });
};
