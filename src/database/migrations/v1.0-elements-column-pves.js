module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'pves',
      'fire_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'pves',
      'water_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'pves',
      'earth_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'pves',
      'air_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('pves');
  },
};
