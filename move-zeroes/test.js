const solution = require("./solution");

test("example", () => {
  expect(solution([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
});

test("example2", () => {
  expect(solution([0, 0, 0, 3, 12])).toStrictEqual([3, 12, 0, 0, 0]);
});

test("example3", () => {
  expect(solution([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});
