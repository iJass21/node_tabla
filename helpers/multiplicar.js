
const { rejects } = require('assert');//Para exportar, junto con el module sport
const fs = require('fs');
const colors = require('colors');

/**Primera opcion para transformarlo en promesa */

/*
const crearArchivo = (base = 5) => {

    return new Promise( (resolve, rejects) => {

        console.log("==================");
        console.log(`  tabla del ${base}   `);
        console.log("==================");
    
        let salida = '';
    
        for(let i = 1; i<=10 ; ++i)
        {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
    
        console.log(salida);
    
        fs.writeFileSync( `tabla-${base}.txt`, salida);
    
        resolve(`Tabla-${base}.txt`); 

    })
}*/

/**Segunda forma */

const crearArchivo = async(base = 5, l=false, h = 10) => {

    try {

    
        let salida = '';
        let consola = '';
    
        for(let i = 1; i<=h ; ++i)
        {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${ 'x'.green} ${i} ${ '='.magenta} ${base * i}\n`;
        }
        
        if(l){
            console.log("==================".green);
            console.log(`  tabla del ${base}   `.rainbow);
            console.log("==================".green);
            console.log(consola);
        }                    

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return (`Tabla-${base}.txt`.cyan); 
    } catch (err) {
        throw error;
    }
}



/* Para exportar alguna funcion */

module.exports = {
    crearArchivo
}