export default (sequelize, DataTypes) => {
  const Business = sequelize.define("Business", {
    name: DataTypes.STRING
  });
  return Business;
};
