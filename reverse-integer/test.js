const solution = require("./solution");

test("example", () => {
  expect(solution(123)).toBe(321);
});

test("example2", () => {
  expect(solution(-123)).toBe(-321);
});

test("example3", () => {
  expect(solution(120)).toBe(21);
});

test("example4", () => {
  expect(solution(901000)).toBe(109);
});

test("example5", () => {
  expect(solution(1534236469)).toBe(0);
});
