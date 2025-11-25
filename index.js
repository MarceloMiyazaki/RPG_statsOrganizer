function plus(){
    if(!isNaN(Number(document.getElementById("modValue").value))){
        if(document.getElementById("vid").checked){
        document.getElementById("vida").value = Number(document.getElementById("vida").value) + Number(document.getElementById("modValue").value)
        }
        else if(document.getElementById("man").checked){
            document.getElementById("mana").value = Number(document.getElementById("mana").value) + Number(document.getElementById("modValue").value)
        }
    }
    else{
        document.getElementById("modValue").value = "DIGITE UM NÚMERO ANTA!"
    }
}

function sub(){
    if(!isNaN(Number(document.getElementById("modValue").value))){
        if(document.getElementById("vid").checked){
        document.getElementById("vida").value = Number(document.getElementById("vida").value) - Number(document.getElementById("modValue").value)
        }
        else if(document.getElementById("man").checked){
            document.getElementById("mana").value = Number(document.getElementById("mana").value) - Number(document.getElementById("modValue").value)
        }
    }
    else{
        document.getElementById("modValue").value = "DIGITE UM NÚMERO ANTA!"
    }
}

function d4(){
    document.getElementById("resultado").textContent = "d4: " + (Math.floor(Math.random() * 4) + 1)
}

function d6(){
    document.getElementById("resultado").textContent = "d6: " + (Math.floor(Math.random() * 6) + 1)
}

function d8(){
    document.getElementById("resultado").textContent = "d8: " + (Math.floor(Math.random() * 8) + 1)
}

function d10(){
    document.getElementById("resultado").textContent = "d10: " + (Math.floor(Math.random() * 10) + 1)
}

function d12(){
    document.getElementById("resultado").textContent = "d12: " + (Math.floor(Math.random() * 12) + 1)
}

function d20(){
    document.getElementById("resultado").textContent = "d20: " + (Math.floor(Math.random() * 20) + 1)
}