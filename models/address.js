<<<<<<< HEAD
export default (sequelize, DataTypes) => {
    const Address = sequelize.define('Address',{
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
}
=======
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
>>>>>>> abdecda39aba25f5960de86d3cd20f41d7259ffd
