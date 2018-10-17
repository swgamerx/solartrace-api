export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Addresses", {
      id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      address1: {
        type: Sequelize.STRING
      },
      address2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.INTERGER
      },
      business: {
        type: Sequelize.INTERGER
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lng: {
        type: Sequelize.FLOAT
      },
      placeId: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Addresses");
  }
};
