const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('****Tarea por hacer*******'.green);
            console.log(tarea.descripcion);
            console.log('****Estado: ', tarea.completado, '****'.green);
            console.log('**************************'.green);
        }
        break

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break

    case 'borrar':
        let eliminado = porHacer.eliminar(argv.descripcion);
        console.log(eliminado);
        break

    default:
        console.log('El comando ingresado no es reconocido');
}