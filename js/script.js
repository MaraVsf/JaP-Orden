var personas=[];

function agregar(){
    var persona={};

    persona.nom = document.getElementById('nombre').value;
    persona.edad = document.getElementById('edad').value;
    persona.puntos = document.getElementById('puntos').value;

    personas.push(persona);

   // alert("Ingresaste el nombre: " + nom + "al array");
    document.getElementById('nombre').value="";
    document.getElementById('edad').value=0;
    document.getElementById('puntos').value=0;

    mostrar(personas);
}

// Realice algunas modificaciones para que la tabla fuera más legibleds
function mostrar(personas){        
    var tabla = "<table border =1> <th style='padding: 15px;'> Nombre </th> <th style='padding: 12px;'> Edad </th> <th style='padding: 12px;'> Puntos </th> <th style='padding: 12px;'> Borrar </th>";

    for (i=0; i<personas.length; i++){
        tabla+="<tr><td align='center'>" + personas[i].nom + "</td><td align='center'>"+ personas[i].edad+ "</td><td align='center'>"+ personas[i].puntos+"</td><td align='center'><img src='./img/borrar.gif' alt='borrar' width=30 onclick='borrarLinea(" + i + ")' style='cursor: pointer;'></td></tr>";
    }

    tabla+="</table>";
    
    // Si la lista esta vacia, se borra la lista
    if (personas.length === 0) {
        document.getElementById('lista').innerHTML = '';
    } else {
        document.getElementById('lista').innerHTML=tabla;
    }

}

// Función para eliminar una línea específica según el índice
function borrarLinea(index) {
    personas.splice(index, 1);
    mostrar(personas);
}

//Ordena la lista y la muestra ordenada
function ordenar(){ //Ordenar por puntos y en forma ASCENDENTE
    personas.sort(function(a,b){ //función de comparación
        if (a.puntos > b.puntos) {
            return 1;
        }
        if (a.puntos < b.puntos) {
            return -1;
        }
        // Son iguales
        return 0;
    }); 
    mostrar(personas);
}

function borrar(){
    //indexOf me devuelve la posición del elemento en el array
    //splice remueve el elemento indicado. 
   
    let nom = document.getElementById('nombre').value; //Tomo el nombre
    let pos = personas.findIndex(dato=> dato.nom.toLowerCase().trim() === nom.toLowerCase()); //lo busco en el arreglo
    
    if (pos === -1 ){
        alert("No encontré nada.")
    } else{
        alert("Voy a borrar a " + personas[pos].nom)
        personas.splice(pos,1);  // pum! lo borro
        mostrar(personas);
    }
}

document.addEventListener('DOMContentLoaded', ()=> {

    document.getElementById('agregar').addEventListener('click', ()=>{
        agregar();
    })

    document.getElementById('ordenar').addEventListener('click', ()=>{
        ordenar();
    })

    document.getElementById('borrar').addEventListener('click', ()=>{
        borrar();
    })
})