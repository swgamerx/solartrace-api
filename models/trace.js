import address from "../routes/address";

export default (sequelize, DataTypes) => {
  const Trace = sequelize.define("Trace", {
    type: DataTypes.STRING, // what kind of trace is it (ground, roof)
    squareMeters: DataTypes.FLOAT // how big is the area traced
  });
  Trace.associate = function(models) {
    Trace.belongsTo(models.Address); // what address it belongs to
    Trace.belongsTo(models.User); // which user created it
    Trace.hasMany(models.Pin); // which pins are part of the trace
  };
  return Trace;
};
