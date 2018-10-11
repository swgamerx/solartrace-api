export default (sequelize, DataTypes) => {
  const Pin = sequelize.define("Trace", {
    lat: DataTypes.NUMBER,
    lng: DataTypes.NUMBER
  });
};
