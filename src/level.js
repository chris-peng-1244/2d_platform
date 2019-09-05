'use strict';

const Vec = require('./vector');
const Player = require('./player');
const Coin = require('./coin');
const Lava = require('./lava');
const levelChars = {
  '.': 'empty',
  '#': 'wall',
  '+': 'lava',
  '@': Player,
  'o': Coin,
  '=': Lava,
  '|': Lava,
  'v': Lava 
};

class Level {
  constructor(plan) {
    const rows = plan.trim().split("\n").map(line => [...line]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch];
        if (typeof type == 'string') return type;
        this.startActors.push(type.create(new Vec(x, y), ch));
        return "empty";
      });
    });
  }
}

module.exports = Level;