export default (sequelize, DataTypes) => {
  const Pin = sequelize.define("Pin", {
    lat: DataTypes.FLOAT, // Latitude
    lng: DataTypes.FLOAT, // longitude
    created: DataTypes.DATE // date of creation
  });
  Pin.associate = function(models) {
    Pin.belongsTo(models.Trace); // which trace does it belong to
  };
  return Pin;
};
