module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'equiped_sword_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_sword_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_helmet_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_helmet_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },

    );
    await queryInterface.addColumn(
      'users',
      'equiped_armor_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_armor_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_amulet_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_amulet_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_glove_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_glove_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
  },

  async down() { //
  },
};
