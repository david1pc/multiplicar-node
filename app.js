const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs')

let comando = argv._[0].toLowerCase()

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(msj => console.log(msj))
            .catch(err => console.log(err))
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log(`No se reconoce el comando '${comando}' introducido`)
        break
}