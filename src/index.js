/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let a;
  let b;
  let c;
  let count = 0;
  for (let i = 0; i < preferences.length; i++){
    // increments/decrements by 1 because provided array is 1-indexed
    a = preferences[i];
    b = preferences[a - 1];
    c = preferences[b - 1];
    if (c == i + 1 && a != b && b != c && c != a){
      count++;
    }
  }
  // goes through every love triangle three times, so should divide by 3 to get the result
  return count / 3;
};
