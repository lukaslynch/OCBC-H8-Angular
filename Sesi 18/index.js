function removeSpaces(text){
    return text.split(" ").join('')
}

function reverseText(text){
    return text.split('').reverse().join('')
}

function updateVowels(text){
   const mapper = {
      a: 'b', i: 'j', u: 'v',e: 'f', o: 'p', 
      A: 'B', I: 'J', U: 'V',E: 'F', O: 'P'
    }
    
   return text.replace(/[aiueo]/gi, match => mapper[match])
}

var password = 'dmitri w'
var noSpaces = removeSpaces(password)
var reversed = reverseText(noSpaces)
var encryptedPassword = updateVowels(reversed)

console.log(encryptedPassword)