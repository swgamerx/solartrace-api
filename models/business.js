export default (sequelize, DataTypes) => {
  const Business = sequelize.define("Business", {
    name: DataTypes.STRING
  });
  Business.associate = function(models) {
    Business.hasMany(models.Address); // all the addresses for the business
  };
  return Business;
};
