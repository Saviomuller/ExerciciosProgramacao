
function imc (peso, altura) {
   return peso / (altura * altura);
}

function situacao (valor_imc) {
    if (valor_imc < 18.5) {
        return "Abaixo do peso";
    }
    else if (valor_imc < 25) {
        return "Peso ideal (parabéns)";
    }
    else if (valor_imc < 30) {
        return "Acima do peso";
    }
    else if (valor_imc < 35) {
        return "Obesidade grau I";
    }
    else if (valor_imc < 40) {
        return "Obesidade grau II";
    }
    else {
        return "Obesidade III(mórbida)";
    }
}