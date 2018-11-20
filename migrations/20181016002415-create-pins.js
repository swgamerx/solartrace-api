/**
 * Pins
 */
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
      },
      TraceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Trace",
          key: "id"
        }
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Traces");
  }
};
