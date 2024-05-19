import Magician from '../../js/task-1/characterHeirs/Magician';

test('testing of magician creation without type parameter', () => {
  const result = new Magician('маг1');
  expect(result).toEqual({ name: 'маг1', type: 'Magician' });
});

test('testing of magician creation with type parameter', () => {
  const result = new Magician('маг2', 'Magician');
  expect(result).toEqual({ name: 'маг2', type: 'Magician' });
});
