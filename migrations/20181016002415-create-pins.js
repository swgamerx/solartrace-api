export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pins", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lng: {
        type: Sequelize.FLOAT
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Traces");
  }
};
