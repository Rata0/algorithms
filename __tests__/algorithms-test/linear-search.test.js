import linearSearch from "../../algorithms/linear-search.js";

const numbers = [42, 17, 98, 6, 29, 83, 51, 24, 71, 13, 60, 92, 35, 8, 44];
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

describe('Test linearSearch', () => {
  it('number array tests', () => {
    expect(linearSearch(numbers, 44)).toEqual(14);
    expect(linearSearch(numbers, 42)).toEqual(0);
    expect(linearSearch(numbers, 6)).toEqual(3);
    expect(linearSearch(numbers, 71)).toEqual(8);
  });

  it('word array tests', () => {
    expect(linearSearch(words, "apple")).toEqual(0);
    expect(linearSearch(words, "lemon")).toEqual(9);
    expect(linearSearch(words, "fig")).toEqual(5);
    expect(linearSearch(words, "date")).toEqual(3);
  });

  it('negative tests', () => {
    expect(linearSearch(numbers, 1)).toEqual(-1);
    expect(linearSearch(numbers, 100)).toEqual(-1);
    expect(linearSearch(numbers, "dog")).toEqual(-1);
    expect(linearSearch(numbers, "cat")).toEqual(-1);
  });
});
