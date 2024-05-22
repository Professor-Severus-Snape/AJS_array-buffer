export default class Character {
  #distance = null;

  #stoned = null;

  #attack = null;

  constructor(name, type) {
    if (!name || typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка в параметре name');
    }

    const types = ['Daemon', 'Magician'];

    if (!types.some((item) => item === type)) {
      throw new Error('Ошибка в параметре type');
    }

    this.name = name;
    this.type = type;
  }

  set distance(intValue) {
    this.#distance = intValue;
  }

  get distance() {
    return this.#distance;
  }

  set stoned(booleanValue) {
    this.#stoned = booleanValue;
  }

  get stoned() {
    return this.#stoned;
  }

  set attack(intValue) {
    this.#attack = intValue;
  }

  get attack() {
    // линейный расчёт атаки текущего игрока:
    let resultAttack = (1 - (this.distance - 1) * 0.1) * this.#attack;

    if (this.stoned) {
      // логарифмический расчёт атаки текущего игрока с учётом дурмана:
      resultAttack -= Math.log2(this.distance) * 5;
    }

    return Math.floor(resultAttack);
  }
}
