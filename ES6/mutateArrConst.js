const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  for(let i = 0; i < s.length-1; i++){
    let temp = s.shift()
    s.push(temp)
  }

  console.log(s)

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();