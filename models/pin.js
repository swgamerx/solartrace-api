export default (sequelize, DataTypes) => {
  const Pin = sequelize.define("Pin", {
    lat: DataTypes.FLOAT, // Latitude
    lng: DataTypes.FLOAT, // longitude
    created: DataTypes.DATE // date of creation
  });
  return Pin;
};
