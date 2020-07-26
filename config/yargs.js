const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer',
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Descripción de la tarea por hacer como completado',
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento en consola', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar un elemento en consola', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}