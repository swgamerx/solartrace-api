export default (sequelize, DataTypes) => {
  const Trace = sequelize.define("Trace", {
    pins: DataTypes.ARRAY(DataTypes.INTEGER), // Pins that make up a trace
    type: DataTypes.STRING, // what kind of trace is it (ground, roof)
    squareMeters: DataTypes.FLOAT // how big is the area traced
  });
  return Trace;
};
