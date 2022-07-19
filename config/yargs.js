const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option( 'l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Show table in console'
        })
        .option( 'h', {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Hasta que numero se multiplica'
        })
        .check( (argv, option) => {
            //console.log('yargs', argv)

            if( isNaN( argv.b ))
            {
                throw 'La base debe ser un numero...!'
            }
            return true;

        })
        .argv;


module.exports = argv;
