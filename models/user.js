export default (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: DataTypes.STRING
    });
    User.associate = function(models){
        User.hasMany(models.Address); // Addresses user has created
        User.hasMany(models.Trace); // Traces user has created
    }
    return User;
};
