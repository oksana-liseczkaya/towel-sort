module.exports = function towelSort (matrix) {
  if (!matrix){return [];}
  let array=[];
  for(let i=0; i<matrix.length; i++){
      if(i%2==0)
      {
          array.push(matrix[i]);
      }else{
          array.push(matrix[i].reverse());
      }
  }
  return array.flat();
}


