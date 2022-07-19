const fs = require('fs');
//const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//Lo de yargs fue cortado y pegado en su archivo independiente

//Imprimir la tabla del 5 por consola

console.clear();
//let base = 4;
/*
console.log("==================");
console.log(`  tabla del ${base}   `);
console.log("==================");
*/
/*
let salida = '';

for(let i = 1; i<=10 ; ++i)
{
    salida += `${base} * ${i} = ${base * i}\n`;
}*/

//console.log(salida);

/* forma clasica, hay una mas simple
fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    
    console.log(`Tabla-${base}.txt creada..!`);
});
*/
/*
fs.writeFileSync( `tabla-${base}.txt`, salida);

console.log(`Tabla-${base}.txt creada..!`); 
*/



/**Captando parametros desde linea de comandos */

//El problema de esto es que toma los argumejntos segun el orden que se este pasando y no valida nada

/*console.log(process.argv);
const [ ,,arg3 = 'base = 5'] = process.argv;
const [, base = 5] = arg3.split('=');


console.log(base);
*/


/**  AHora usando el package de Yargs  */

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.base);




crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


