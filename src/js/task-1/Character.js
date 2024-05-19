export default class Character {
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
    this.currentDistance = intValue;
  }

  get distance() {
    return this.currentDistance;
  }

  set stoned(booleanValue) {
    this.isStoned = booleanValue;
  }

  get stoned() {
    return this.isStoned;
  }

  set attack(intValue) {
    this.currentAttack = intValue;
  }

  get attack() {
    // линейный расчёт атаки текущего игрока:
    let resultAttack = (1 - (this.distance - 1) * 0.1) * this.currentAttack;

    if (this.isStoned) {
      // логарифмический расчёт атаки текущего игрока с учётом дурмана:
      resultAttack -= Math.log2(this.distance) * 5;
    }

    return Math.floor(resultAttack);
  }
}
