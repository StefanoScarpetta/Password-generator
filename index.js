const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// A-Z da 0 a 25
// a-z da 26 a 51
// 0-9 da 52 a 61
// speciali 

const psw1 = document.getElementById("psw1")
const psw2 = document.getElementById("psw2")
const generate = document.getElementById("generate")
psw1.textContent = "Random Password"
psw2.textContent = "Random Password"

function randomChar() {
    let rand = Math.floor(Math.random()*characters.length)
    return characters[rand]
}

function password(psw) {
    psw.textContent = ""
    let gen = []
    for(i=0; i<15; i++) {
        gen[i] = randomChar()
        psw.textContent += gen[i]
    }
}

generate.addEventListener("click", function() {
    password(psw1)
    password(psw2)
})
