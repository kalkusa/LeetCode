let solution = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let searchedValue = target - nums[i];
    if (map.has(searchedValue)) {
      return [map.get(searchedValue), i];
    }
    map.set(nums[i], i);
  }
};

module.exports = solution;
