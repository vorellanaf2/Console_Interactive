import colors  from 'colors';
import { inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostarListadoChecklist} from './helpers/inquirer.js';
import {guardarDb,leerDB} from './helpers/guardarArchivo.js'
import {Tareas} from './models/tareas.js';



const main = async() =>{
    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();
if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB)
}
    do{
        // esta funcion imprime menu
        opt = await inquirerMenu();

        //switch para opciones de menu
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc)
            break;
        
            case'2':

            tareas.listadoCompleto();
            break;
            case'3':

            tareas.listarPendientesCompletadas(true);
            break;
            case '4':
            tareas.listarPendientesCompletadas(false);
            break;
            case '5':
                const ids = await mostarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            case '6':
                //borrar
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !=='0') {
                    const ok = await confirmar('¿Estas seguro?')
                    if (ok ){
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada')
                    } 
                }

            break;
        }

        guardarDb(tareas.listadoArr)


        await pause();


    }while(opt !=='0');


}

main();