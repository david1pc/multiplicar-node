const options = {
    base: {
        alias: 'b',
        demandOption: true
    },
    limite: {
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Lista tabla de multiplicar', options)
    .command('crear', 'Crear archivo de tabla de multiplicar', options)
    .default('limite', 10)
    .argv


module.exports = argv