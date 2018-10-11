export default (sequelize, DataType) => {
  const Trace = sequelize.define("Trace", {
    pins: DataTypes.ARRAY,
    type: DataTypes.STRING,
    squareMeters: DataType.NUMBER
  });
  return Trace;
};
