const tIngresado = document.querySelector(".inputTexto");
const tResultado = document.querySelector(".resulTexto");



function btonEncriptar(){
	const textoEncriptado = encriptar(tIngresado.value);
	tResultado.innerText = textoEncriptado;
} 

function btonDesencriptar(){
	const textoDesencriptar = desencriptar(tIngresado.value);
	tResultado.innerText = textoDesencriptar;
}

function encriptar(texto){
	let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	texto = texto.toLowerCase();
	for(i=0; i<matrizCod.length; i++){
		if(texto.includes(matrizCod[i][0])){
			texto = texto.replaceAll((matrizCod[i][0]),(matrizCod[i][1]));
		}
	}

	return texto;
}

function desencriptar(texto){
	let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	texto = texto.toLowerCase();
	for(i=0; i<matrizCod.length; i++){
		if(texto.includes(matrizCod[i][1])){
			texto = texto.replaceAll((matrizCod[i][1]),(matrizCod[i][0]));
		}
	}

	return texto;	
}