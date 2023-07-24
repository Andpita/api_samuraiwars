"use strict";module.exports = {
  async up() {
    //
  },

  async down(queryInterface) { //
    await queryInterface.removeColumn('users', 'victoriapvp');
  },
};
