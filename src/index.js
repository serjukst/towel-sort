
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
 return matrix.join(',').split(',');
}