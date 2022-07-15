import { Wrapper } from '../modelos/wrapper';

export async function mostarmenuClientes(w: Wrapper){

    let opcion: string;

    do{
        console.clear();
        console.log('MENU CLIENTES');
        console.log('--------------');
        console.log('1. Insertar cliente');
        console.log('2. Insertar clientes masivamente');
        console.log('3. Mostrar clientes');
        console.log('4. Monstrar cliente por identificador');
        console.log('5. Modificar cliente');
        console.log('6. Eliminar cliente por identificador');
        console.log('7. Atrás <--vuelve al menu principal');

        opcion = await w.rlp.questionAsync('¿Que opcion deseas?\n');

        console.clear();

        //opcion 1 --> Insertar cliente
        if(opcion === '1'){
            await bancoClientes.insertarCliente();
            await w.rlp.questionAsync('');
        }
        // Opción 2 --> Insertar clientes de forma masiva
        if(opcion === '2') {
            await w.rlp.questionAsync('');
        }
  
        // Opción 3 --> Mostrar clientes 
        else if(opcion === '3') {
            await w.rlp.questionAsync('');
        }
    
        // Opción 4 --> Modificar cliente
        else if(opcion === '4') {
            await w.rlp.questionAsync('');
        }
    
        else if(opcion === '5') {
            await w.rlp.questionAsync('');
        }
    
        // Opción 6 --> Eliminar todos los clientes
        else if(opcion === '6') {
            await w.rlp.questionAsync('');
        } 
        
    } while (opcion !=='7');
}


