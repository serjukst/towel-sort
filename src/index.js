
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];

  for (let i = 0; i < matrix.length; i++) {

   if (i % 2) {
     
     matrix[i].sort(function (a, b) {
       return a + b;
     });
   }
  }

    let res = matrix.join(',').split(',');
    
    for (let j = 0; j < res.length; j++) {
        res[j] = parseInt(res[j]);
    }

    return res;
}