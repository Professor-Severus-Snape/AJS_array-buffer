import Character from '../../js/task-1/Character';

test('testing of character creation without parameters', () => {
  expect(() => new Character()).toThrowError();
});

test('testing of character creation with invalid name parameter (not a string)', () => {
  expect(() => new Character(123)).toThrowError();
});

test('testing of character creation with invalid name parameter (length < 2)', () => {
  expect(() => new Character('л')).toThrowError();
});

test('testing of character creation with invalid name parameter (length > 10)', () => {
  expect(() => new Character('лучник_лучник')).toThrowError();
});

test('testing of character creation with invalid type parameter', () => {
  expect(() => new Character('не лучник', 'Not a Bowman')).toThrowError();
});

// ---------- сеттеры и геттеры: ----------
test('testing of setter/getter (distance)', () => {
  const character = new Character('персонаж', 'Daemon');
  character.distance = 2;
  expect(character.distance).toBe(2);
});

test('testing of setter/getter (stoned)', () => {
  const character = new Character('персонаж', 'Daemon');
  character.stoned = true;
  expect(character.stoned).toBe(true);
});

test('testing of setter/getter (attack)', () => {
  const character = new Character('персонаж', 'Daemon');
  character.distance = 2;
  character.attack = 100;
  expect(character.attack).toBe(90);
});

test('testing of setter/getter (attack) with stoned character', () => {
  const character = new Character('персонаж', 'Daemon');
  character.distance = 2;
  character.stoned = true;
  character.attack = 100;
  expect(character.attack).toBe(85);
});
