export default (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    business: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    placeId: DataTypes.STRING,
    country: DataTypes.STRING
  });
  return Address;
};
