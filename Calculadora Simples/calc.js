function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;    
}
function dividir(a, b) {
    if (b == 0) {
        alert("Divisão por Zero!");
    }
    return a / b;
}
function exponencial(a, b) {
    return (a ** b);
}
function executar() {
	const a = parseFloat(document.getElementById("v1").value);
	const b = parseFloat(document.getElementById("v2").value);
	let oper = document.getElementById("oper").selectedIndex;
	
	let resultado = (oper == 0) ? somar(a,b):
					(oper == 1) ? subtrair(a,b):
					(oper == 2) ? multiplicar(a,b):
					(oper == 3) ? dividir(a,b):
					exponencial(a,b);

	document.getElementById("resp").innerHTML = `O resultado da Operação é ${resultado}`;
}