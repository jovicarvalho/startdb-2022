let vidas = 6;
let chuteCorreto = ["_","_","_","_","_","_","_"];
let letrasChutadas = [];
let contador = 0;
let arrayPalavraSecreta = ["a","b","a","c","a","x","i"];

class Forca { 

 
  chutar(letra) {

    if (letra == "a"||  //if que faz o controle de vidas
        letra == "b"||
        letra == "c"||
        letra == "x"||
        letra == "i" ){ 
      vidas = vidas;
    } else if (letrasChutadas.includes(letra)){
      vidas = vidas;}
      else if(letra.length > 1 || letra.length < 1 ){
      vidas = vidas;}
      else {
      vidas = vidas -1; 
    }
    if (letra.length == 1 && letrasChutadas.includes(letra) == false ) { // if que faz o controle das letras Chutadas
      letrasChutadas[contador] = letra;
      contador++;
      
    }

   

    if (letra == "a"){
      chuteCorreto[0] = "a";
      chuteCorreto[2] = "a";
      chuteCorreto[4] = "a";

    }
    if (letra == "b"){
      chuteCorreto[1] = "b";
    }
    if (letra == "c"){
      chuteCorreto[3] = "c";
    }
    if (letra == "x"){
      chuteCorreto[5] = "x";
    }
    if (letra == "i"){
      chuteCorreto[6] = "i";
    }

  }


  buscarEstado() {
     if (vidas == 0) { // verifica se as vidas chegaram a zero
      return "perdeu"; 
    } 
    else if (JSON.stringify(chuteCorreto) == JSON.stringify(arrayPalavraSecreta)){ // transforma os arrays em string e faz comparação
      return "ganhou"; 
    }
    else {
      return "aguardando chute";
    } 

   }


     // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    
      return {
          letrasChutadas: letrasChutadas, // Deve conter todas as letras chutadas;
          vidas: vidas, // Quantidade de vidas restantes;
          palavra: chuteCorreto // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
