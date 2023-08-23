const { read } = require('fs');
const { resolve } = require('path');

const mostrarMenu=()=>{
    return new Promise(resolve =>{
        console.clear();
        console.log('========================'.green);
        console.log('  SELECCION UNA OPCION    '.green);
        console.log('========================\n'.green);
    
        console.log(`${'1.'.green}Crear Tareas`);
        console.log(`${'2.'.green}Listar Tareas`);
        console.log(`${'3.'.green}Listar Tareas completadas`);
        console.log(`${'4.'.green}Listar Tareas pendientes`);
        console.log(`${'5.'.green}Completar tareas`);
        console.log(`${'6.'.green}Borrar tareas`);
        console.log(`${'0.'.green}Salir \n`);


        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Seleccione una opcion: `, (opt)=> {
            readline.close();
            resolve(opt);
        })

    
    
    });
};    
    

    
const pause = ()=>{

    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt)=> {
            readline.close();
            resolve();
        })
    });
    
};


module.exports = {
    mostrarMenu,
    pause
}