function palindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log(cleanStr)
    let lastIndex = cleanStr.length-1
    console.log(lastIndex)
    for(let i = 0; i < cleanStr.length; i++){
        let fromEnd = cleanStr[lastIndex]  
        let fromStart = cleanStr[i]
        if(fromEnd !== fromStart){
            return false
        }
        lastIndex -= 1
    }
    return true;
  }
  
console.log(palindrome("1 eye for of 1 eye."))