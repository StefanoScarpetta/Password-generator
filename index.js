const AZarray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z"];
const azarray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z"]
const _09array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let definitivi = []

const psw1 = document.getElementById("psw1")
const psw2 = document.getElementById("psw2")
const generate = document.getElementById("generate")
const copied = document.getElementById("copied")
const reset = document.getElementById("reset")
const add = document.getElementById("add")
const special = document.getElementById("special")
const AZ = document.getElementById("AZ")
const az = document.getElementById("az")
const _09 = document.getElementById("09")
const char = document.getElementById("char")
const descrizione = document.getElementById("descrizione")
const myRange = document.getElementById("myRange")
psw1.textContent = "Random Password"
psw2.textContent = "Random Password"

function AZCheck() {
    if (AZ.checked == true) {
        definitivi = definitivi.concat(AZarray);
    } else {
        elimina(AZarray)
    }
}

function azCheck() {
    if (az.checked == true) {
        definitivi = definitivi.concat(azarray);
    } else {
        elimina(azarray)
    }
}

function _09Check() {
    if (_09.checked == true) {
        definitivi = definitivi.concat(_09array);
    } else {
        elimina(_09array)
    }
}

function elimina(array) {
    for(let i=0; i<definitivi.length; i++) {
        for(let y=0; y<array.length; y++) {
            if (definitivi[i] == array[y]) {
                definitivi.splice(i, 1)
            }
        }
    }
}

function noSpecial() {
    for(let i=0; i<definitivi.length; i++) {
        for(let y=0; y<AZarray.length; y++) {
            if (definitivi[i] != AZarray[y] || definitivi[i] != azarray[y] || definitivi[i] != _09array[y]) {
                definitivi.splice(i, 1)
            }
        }
    }
}

function checkSpecial(char) {
    let check = "a"
    for(let i=0; i<definitivi.length; i++) {
        if (definitivi[i] == char) {
            check = "b"
        }
    }
    return check
}

function SpecialCheck() {
    if (special.checked == true) {
        char.style.display = "inline-block";
        add.style.display = "inline-block";
        descrizione.style.display = "inline-block";
        descrizione.style.marginBottom = "-20px";
    } else {
        char.style.display = "none";
        add.style.display = "none";
        descrizione.style.display = "none";
        noSpecial();
    }
}

function randomChar() {
    let rand = Math.floor(Math.random()*definitivi.length)
    return definitivi[rand]
}

function password(psw) {
    psw.textContent = ""
    let gen = []
    for(i=0; i<myRange.value; i++) {
        gen[i] = randomChar()
        if(gen[i] == null) {
            psw.textContent = "Seleziona un gruppo di caratteri"
            break
        }
        psw.textContent += gen[i]
    }
}

add.addEventListener("click", function() {
    if (char.value.length == 1 && checkSpecial(char.value) == "a") {
        definitivi.push(char.value)
        char.value = ''
    }
})

generate.addEventListener("click", function() {
    password(psw1)
    password(psw2)
    copied.innerText = ""
})

psw1.addEventListener("click", function() {
    window.getSelection().selectAllChildren(psw1);
    document.execCommand('copy')
    copied.innerText = "Copied!"
})

psw2.addEventListener("click", function() {
    window.getSelection().selectAllChildren(psw2);
    document.execCommand('copy')
    copied.innerText = "Copied!"
})

reset.addEventListener("click", function() {
    location.reload()
})
