let names = ["ahmad","omar","eman","rawan","rami","feras","ghadeer","eyad","mohammad","zaid","nisreen","basem"]

var smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let myRandomIndex = Math.floor(Math.random()*smallLetters.length);
let Generatedletter = smallLetters[myRandomIndex];

console.log(Generatedletter)

function checkTheName() {
 for (let i = 0; i < names.length ; i++) {
    console.log(i)
    if (names[i][0] == Generatedletter) {

        console.log(`${i} this name ${names[i]} is starting with the letter ${Generatedletter}`)
        
    }
    
 }

}
checkTheName();
