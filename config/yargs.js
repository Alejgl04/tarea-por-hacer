const descripcion = {
    demand:true,
    alias:'-d',
    des:'Descripcion de la tarea'
};
const completado = {
   default:true,
    alias:'c',
    desc:'Marca como completada la tarea'
};

const argv = require('yargs')
    .command('crear','Crear un elemento de tarea por hacer', {
        descripcion
    })
    .command('actualizar','Actualizar un elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar','Elimina un elemento por hacer',{
       descripcion 
    })
    .help()
    .argv;

module.exports = {
    argv
}