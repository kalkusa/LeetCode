let solution = (nums) => {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[pointer] = nums[i];
      pointer = pointer + 1;
    }
  }

  for (i = pointer; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

module.exports = solution;
