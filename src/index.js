
// You should implement your task here.

module.exports = function towelSort (matrix) {
  for (let k in matrix) {
    k % 2 != 0 ? matrix[k].reverse() : matrix[k]
    console.log(matrix[k])
}
let result = []
for (let i in matrix) {
    result.push(...matrix[i])
}
  return result;
}
