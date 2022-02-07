// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (let clave in objeto) {
    var a = [];
    a.push(clave);
    a.push(objeto[clave]);
    matriz.push(a);
    
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var claves = [];
  var valores = [];
  var resultado = {};

  var noexiste = function (v) {
    if (claves.indexOf(v) == -1)
      return true;
  }

  var contar = function (item) {
    var cantidad=0;
    for (i=0; i < string.length; i++){
      if (string.charAt(i)===item) {
        cantidad++;
      }
    }
    return cantidad;    
  }

  for (j=0; j < string.length; j++) {
    if (noexiste(string.charAt(j))) {
      claves.push(string.charAt(j));
      valores.push(contar(string.charAt(j)));
    }
  }
  for (i=0; i < claves.length; i++ ) {
    resultado[claves[i]] = valores[i];
  }
  return (resultado);

}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = '';
  var minus = '';
  for (i=0; i< s.length; i++) {
    if (s.charAt(i).toLowerCase() === s.charAt(i)) {
      minus=minus+(s.charAt(i))
    } else {
      mayus=mayus+(s.charAt(i));
    }
  }
 return(mayus + minus)
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var desde = 0;
  var espejo = '';

  var hacermirror = function (d,h) {
    for (j=h-1; j >= d; j--) {
      espejo = espejo + str.charAt(j);
    }
    desde = h+1;
  };
  
  for (i=0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      hacermirror(desde, i);
      espejo = espejo + ' ';
    }
  }
  hacermirror(desde,str.length);
  return (espejo);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cadena = '';
  
  cadena = numero.toString(10);
  
  for (i=0; i <= cadena.length; i++) {
    if (cadena.charAt(i) !== cadena.charAt(cadena.length-(i+1))) {
      return ("No es capicua")
    }
    return ("Es capicua")
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  modificada = '';
  for (i=0; i<cadena.length; i++) {
    if (cadena.charAt(i) !== 'a' && 
      cadena.charAt(i) !== 'b' &&
      cadena.charAt(i) !== 'c' ) {
        modificada = modificada + cadena.charAt(i);
      }
  }
  return modificada;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrayl = [];
  var arrayo = arr;
  // genero el arreglo de longitudes
  for (i=0; i<arr.length; i++ ) {
    arrayl.push(arr[i].length);
  }
  //Ordeno segun longitudes
  for (i=1; i < arrayl.length; i++) {
    for (j=i-1; j>=0; j--) {
      if (arrayl[j+1] < arrayl[j]) {
        templ=arrayl[j];
        tempo=arrayo[j];
        arrayl[j]=arrayl[j+1];
        arrayo[j]=arrayo[j+1];
        arrayl[j+1]=templ;
        arrayo[j+1]=tempo;
      }
    }
  }
  return (arrayo);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arr_ppal = arreglo2;
  arr_sec = arreglo1;
  nuevo = [];
  if (arreglo1.length > arreglo2.length) {
    arr_ppal=arreglo1;
    arr_sec=arreglo2;
  }
  //Recorro el arreglo ppal y comparo con los elementosdel secundario
  for (i=0; i < arr_ppal.length; i++) {
    for (j=0; j < arr_sec.length; j++) {
      if (arr_ppal[i]===arr_sec[j]) {
        nuevo.push(arr_ppal[i]);
      }
    }
  }
  return (nuevo);

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

