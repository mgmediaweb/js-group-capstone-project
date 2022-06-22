jest.mock('./comment.js');
const Counter = require('./__mocks__/counter.js');

const counter = new Counter();
const nullData = [];
const dataA = [
  { item_id: 88849, username: 'jon', comment: 'happy' },
  { item_id: 88849, username: 'jon', comment: 'happy' },
];
const item1 = { item_id: 88849, username: 'jon', comment: 'good' };

describe('The number of comments/ reservations for null data', () => {
  test('Null data', () => {
    expect(counter.showCounter(nullData)).toBeFalsy();
  });
});

describe('Show counter for true data for comments/reservations', () => {
  test('Data with 2 items', () => {
    expect(counter.showCounter(dataA)).toBe(2);
  });
});

describe('Show counter for counter +1 for comments/reservations', () => {
  // Arrange
  const dataB = [item1];
  // Act
  const newData = [...dataA, ...dataB];
  // Assert
  test('Data with 3 items', () => {
    expect(counter.showCounter(newData)).toBe(3);
  });
});
