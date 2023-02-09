function calculate() {

    let height;

    document.getElementById("height").value > 2.00 ? height = (document.getElementById("height").value) / 100 : height = (document.getElementById("height").value);

    // if (document.getElementById("height").value > 2.00) {
    //     height = (document.getElementById("height").value) / 100;
    // } else {
    //     height = (document.getElementById("height").value);
    // }

    const mass = document.getElementById("mass").value;

    const imc = mass / height ** 2;
    let text = "";
    if (imc < 18.5) {
        text = `Seu IMC é ${Math.trunc(imc)}, você está magro.`;
    } else if (imc < 24.9) {
        text = `Seu IMC é ${Math.trunc(imc)}, você está normal.`;
    } else if (imc < 29.9) {
        text = `Seu IMC é ${Math.trunc(imc)}, você está com sobrepeso.`;
    } else if (imc < 39.9) {
        text = `Seu IMC é ${Math.trunc(imc)}, você está com obesidade.`;
    } else if (imc > 39.9) {
        text = `Seu IMC é ${Math.trunc(imc)}, você está com obesidade mórbida.`;
    }

    document.getElementById("text_area").innerText = text;
}