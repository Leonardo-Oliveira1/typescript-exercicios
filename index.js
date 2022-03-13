"use strict";
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const somar = document.getElementById("somar");
const sum = (a, b) => { return a + b; };
somar.addEventListener("click", function () {
    if (Number(valor1.value) > 0 && Number(valor2.value) > 0) {
        console.log("O resultado da soma é: " +
            sum(Number(valor1.value), Number(valor2.value)));
    }
    else {
        console.log("Preencha todos os campos");
    }
});
