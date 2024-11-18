function checkObj(obj, checkProp) {
    // Only change code below this line
    let result = obj.hasOwnProperty(checkProp) 
    if(result){
      return obj[checkProp]
    }
    return "Not Found"
  
    // Only change code above this line
  }


  // Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0

for(let i = 0; i < myArr.length; i ++){
  total += myArr[i]
}
console.log(total)
