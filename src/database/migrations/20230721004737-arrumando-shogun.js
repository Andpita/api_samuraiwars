module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'shoguns',
      'equiped_sword',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_helmet',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_armor',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_amulet',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_glove',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_sword_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_sword_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_helmet_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_helmet_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },

    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_armor_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_armor_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_amulet_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_amulet_atr2',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
      'equiped_glove_atr1',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'shoguns',
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
