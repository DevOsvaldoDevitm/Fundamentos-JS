const empleados = [
    {
        id: 1,
        nombre: 'Osvaldo'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Pedro'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id, callback ) =>{
    const empleado = empleados.find( e => e.id === id) 

    if (empleado){
        
        callback (null, empleado);
    
    }else{
        callback (`Empleado con id ${id} no existe`);
    }


}

getEmpleado(3, (err, empleado)=>{

    if (err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado en existencia');
    console.log(empleado);
})

// console.log (getEmpleado (4) );