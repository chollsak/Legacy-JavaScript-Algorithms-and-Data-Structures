function rot13(str) {
    let decodeStr = ''
    const base = 65
    for(let i = 0; i < str.length; i++){
        let letterASC = str[i].charCodeAt(0)

        if(letterASC <= 90 && letterASC >= 65){
            letterASC = ((letterASC - base + 13) % 26) + base
            decodeStr += String.fromCharCode(letterASC)
        }else{
            decodeStr += str[i]
        }
    }

    return decodeStr;
}
  
console.log(rot13("NE.W")) //ARJ