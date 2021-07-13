// make an array of 1 to "number"

export const makeAnArrayOfNumberFromOneToThis = (number) => {
  const result = [];
  for (let i = 1; i <= number; i++) {
    result.push(i);
  }
  return result;
};

// TODO: implement these later on

// divide and a by b then round up
export const calcPages = (totalRepositories, repositoriesPerPage) => {
  const result = Math.ceil(totalRepositories / repositoriesPerPage);
  return result;
};

// a multiply b
export const multiplyAbyB = (a, b) => {
  const result = a * b;
  return result;
};

// subtract a and b

export const subtractAbyB = (a, b) => {
  const result = a - b;
  return result;
};

// slice array from index a to b

export const sliceArrayFromAtoB = (a, b, arrayToSlice) => {
  const result = arrayToSlice.slice(a, b);
  return result;
};
