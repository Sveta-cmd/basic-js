const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  for (let a = 0; a < matrix.length; a++) {
    for (let b = 0; b < matrix[a].length; b++) {
      if (matrix[a][b] == "^^") {
        cats++;
      }
    }
  }
  if (cats === 0) {
    return 0;
  } else {
    return cats;
  }
};
