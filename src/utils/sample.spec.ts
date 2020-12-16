import { plural } from './stringUtils';

test('singular', () => {
  expect(plural(1, 'hour')).toBe('hour');
});

test('plural', () => {
  expect(plural(0, 'hour')).toBe('hours');
  expect(plural(2, 'hour')).toBe('hours');
  expect(plural(100, 'hour')).toBe('hours');
});

test('custom plural', () => {
  expect(plural(0, 'mouse', 'mice')).toBe('mice');
  expect(plural(2, 'mouse', 'mice')).toBe('mice');
  expect(plural(100, 'mouse', 'mice')).toBe('mice');
});
