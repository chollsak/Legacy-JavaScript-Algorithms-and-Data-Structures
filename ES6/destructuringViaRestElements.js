function removeFirstTwo(list) {
    const [a, b, ...arr] = list
    console.log(a, b)
    console.log(arr)
    return arr;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
  const sourceWithoutFirstTwo = removeFirstTwo(source);