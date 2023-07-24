"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'pves',
      [
        {
          nome: 'Akechi Mitsuhide',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'B',
          energy: 10,
          reputacao: 100,
          xp: 100,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Amakusa Shiro',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          energy: 10,
          reputacao: 100,
          xp: 100,
          ranking: 'C',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Date Masamune',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          energy: 10,
          reputacao: 100,
          xp: 100,
          ranking: 'C',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Minamoto no Yoshitsune',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'B',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Minamoto no Yoshiie',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'C',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Saigo Takamori',
          strength: 10,
          dexterity: 10,
          intelligence: 10,
          luck: 10,
          hp: 100,
          gold: 100,
          ranking: 'C',
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
