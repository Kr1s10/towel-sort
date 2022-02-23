
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.reduce( (acc, curr, i) => {
    return acc.concat( (i % 2) ? curr.reverse() : curr);
  }, []);
}
