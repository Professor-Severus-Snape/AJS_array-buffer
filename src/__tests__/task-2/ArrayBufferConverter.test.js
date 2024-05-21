import ArrayBufferConverter from '../../js/task-2/ArrayBufferConverter';
import getBuffer from '../../js/task-2/getBuffer';

test('testing class ArrayBufferConverter and function getBuffer', () => {
  const str = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  expect(converter.toString()).toBe(str);
});
