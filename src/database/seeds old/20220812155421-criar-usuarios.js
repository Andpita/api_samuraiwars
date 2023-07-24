const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Generic1',
          email: 'generic1@generic.com',
          password_hash: await bcryptjs.hash('wgjxocc8', 8),
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          energy: 100,
          gold: 100,
          level: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Generic2',
          email: 'generic2@generic.com',
          password_hash: await bcryptjs.hash('wgjxocc8', 8),
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          energy: 100,
          gold: 100,
          level: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Generic3',
          email: 'generic3@generic.com',
          password_hash: await bcryptjs.hash('wgjxocc8', 8),
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          energy: 100,
          gold: 100,
          level: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Pita',
          email: 'andpita47@gmail.com',
          password_hash: await bcryptjs.hash('wgjxocc8', 8),
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          energy: 100,
          gold: 100,
          level: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
