  //! Números pares
    //* Minimo de 3 números 
    //* Máximo de 12 números 
    //* Média de 7 números 
    //? Pedir entre 5 e 8 números 
const numerosPares = [02, 04, 06, 08, 10, 12, 14, 16, 18, 20, 22, 24];

  //! Números impares
    //* Minimo de 2 números 
    //* Máximo de 13 números 
    //* Média de 8 números 
    //? Pedir entre 5 e 9 números 
const numerosImpares = [01, 03, 05, 07, 09, 11, 13, 15, 17, 19, 21, 23, 25];

  //! Números primos
    //* Minimo de 1 números 
    //* Máximo de 9 números 
    //* Média de 5 números 
    //? Pedir entre 3 e 7 números 
const numerosPrimos = [02, 03, 05, 07, 11, 13, 17, 19, 23];

  //! Números Fibonacci
    //* Minimo de 1 números 
    //* Máximo de 7 números 
    //* Média de 4 números 
    //? Pedir entre 3 e 6 números 
var fibonacci = [01, 02, 03, 05, 08, 13, 21];

  //! Jogo repetido
    //* Minimo de 5 números 
    //* Máximo de 14 números 
    //* Média de 9 números 
    //? Pedir entre 8 e 12 números 
    //TODO: Pegar ultimo jogo via API da lotofácil
const jogoRepetido = [03, 05, 06, 08, 11, 12, 13, 14, 15, 19, 21, 22, 23, 24, 25];

document.getElementById('button').addEventListener('click', ()=>{
  //TODO For(i = 0; i < x) | i++ dentro do ultimo if/function
  const quantSorteio = parseInt(document.getElementById("quantSorteio").value);
  let saida = document.getElementById('res');

  for(i = 1; i <= quantSorteio; ){
  //! Gerar array com 15 números aleatórios entre 1 e 25 
    let numeros = [];
      
    //? 15 representa a quantidade de elementos dentro do array 
    while (numeros.length < 15) {
      // TODO: Math.ceil(x) retorna o menor número inteiro >= a "x"
      // TODO: Math.radom() retorna um número pseudo-aleatório entre 0 e 1

      j = Math.ceil(Math.random() * 25); 
      //? 25 representa é o valor máximo que pode ser sortado, e 1 o minimo

      // TODO: indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array
        if (numeros.indexOf(j) == -1) {
            numeros.push(j)
          }
          //TODO: .sort() como o array em ordem crescente
          numeros.sort((a,b) => a - b)
        }   

        //! Comparar os valores  

      //TODO Primeira verificação, Jogo Repetido
  
    let checkRepeatgame = numeros.some(v=> jogoRepetido.includes(v)); // está ou não incluso
    var checkLengthRepeatgame = numeros.filter(a => jogoRepetido.includes(a)); 

    if((checkRepeatgame == true) && (checkLengthRepeatgame.length >= 8 && checkLengthRepeatgame.length <= 12)){
      //TODO Segunda verificação, Números Pares
      let checkPair = numeros.some(v=> numerosPares.includes(v));
      var checkLengthPair = numeros.filter(a => numerosPares.includes(a));


      if((checkPair == true) && (checkLengthPair.length >= 5 && checkLengthPair.length <= 8)){
        //TODO Terceira verificação, Números Ímpares
        let checkOdd = numeros.some(v=> numerosImpares.includes(v));
        var checkLengthOdd = numeros.filter(a => numerosImpares.includes(a));

      
        if((checkOdd == true) && (checkLengthOdd.length >= 5 && checkLengthOdd.length <= 9)){
          //TODO Quarta verificação, Números Primos
          let checkPrime = numeros.some(v=> numerosPrimos.includes(v));
          var checkLengthPrime = numeros.filter(a => numerosPrimos.includes(a));


          if((checkPrime == true) && (checkLengthPrime.length >= 3 && checkLengthPrime.length <= 7)){
            //TODO Quarta verificação, Números Fibonacci
            let checkFibonacci = numeros.some(v=> fibonacci.includes(v));
            var checkLengthFibonacci = numeros.filter(a => fibonacci.includes(a));


            if((checkFibonacci == true) && (checkLengthFibonacci.length >= 3 && checkLengthFibonacci.length <= 6)){
                //!  Mostrar na tela

                saida.innerHTML += 
                `
                <div>
                  <strong>${i}</strong>
                  <span>${numeros}</span>
                </div>
                `;
              i++;
          }
        }
      }
    }
  }
}

  document.getElementById('reset').addEventListener('click', () => {
    saida.innerHTML = " ";
  });
});