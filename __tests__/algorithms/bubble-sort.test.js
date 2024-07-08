import bubbleSort from '../../algorithms/bubble-sort.js'

describe('Test bubbleSort', () => {
  it('sorting numbers without duplicates', () => {
    const unsortedColl = [5, 2, 8, 1, 9, -1, -10];
    const sortedColl = bubbleSort(unsortedColl);
    expect(sortedColl).toEqual([-10, -1, 1, 2, 5, 8, 9]);
  });

  it('sorting an empty array', () => {
    const emptyColl = [];
    const sortedColl = bubbleSort(emptyColl);
    expect(sortedColl).toEqual([]);
  });

  it('duplicate sorting', () => {
    const unsortedColl = [5, 2, 8, 1, 99, 9, -1, -10, 5, 5];
    const sortedColl = bubbleSort(unsortedColl);
    expect(sortedColl).toEqual([-10, -1, 1, 2, 5, 5, 5, 8, 9, 99]);
  });

  it('negative sorting', () => {
    const unsortedColl = [-11, -5, -3, -9, -2, -3, -1, -7];
    const sortedColl = bubbleSort(unsortedColl);
    expect(sortedColl).toEqual([-11, -9, -7, -5, -3, -3, -2, -1]);
  });
});