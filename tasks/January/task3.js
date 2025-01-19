// Task 3
// Description: Write a function that takes an array of nested arrays (of any depth), flattens it
// into a one-dimensional array, and removes all duplicates. You can assume the elements are
// either numbers or strings.
// Input data (example):
// const nested = [1, [2, 3, [3, 4]], [1, 5, [5, 6]]];

// Expected result:
// [1, 2, 3, 4, 5, 6]

const getFlatArray = (nestedArray) => {
  const flattenedData = nestedArray.flat(Infinity);

  return [...new Set(flattenedData)];
};
