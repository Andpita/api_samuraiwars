"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'pve',
      [
        {
          nome: 'Hatori Hanso',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'A',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Oda Nobunaga',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'A',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Tomoe Gozen',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'A',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Fofolete Banzai',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'A',
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
