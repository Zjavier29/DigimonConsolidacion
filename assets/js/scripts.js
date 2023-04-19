/*
function consultarDigimon(){
    alert('funciona');
}
*/

// como funcion flecha
const consultarDigimon = () => {

    // extraer el nombre proporcionado
    let nombreParaConsultar = document.getElementById('nombreProporcionado').value;
    
    // configuramos el endpoint a consultar concatenando el endpoint original con el nombre proporcionado
    let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/'+nombreParaConsultar;

    // la api de digimon entrega la información en formato array ('corchetes [] ')
    fetch(endpoint)
    .then(respuestaDigimon => respuestaDigimon.json() )
    .then(dataDigimon => {
        console.log(dataDigimon);
        console.log(dataDigimon[0].name);

        // proceso
        // extraer los datos para enviarlos a los respectivos elementos del DOM
        let nombreRecuperado = dataDigimon[0].name;
        let nivelRecuperado = dataDigimon[0].level;
        let imagenRecuperada = dataDigimon[0].img;

        // identificamos los respectivos elementos del dom, para cambiar sus propiedades mediante .innerHTML para texto, y .src para imagen
        let etiquetaNombre = document.getElementById('nombreDigimon');
        etiquetaNombre.innerHTML = nombreRecuperado;

        
        // identificamos los respectivos elementos del dom, para cambiar sus propiedades mediante .innerHTML para texto, y .src para imagen
        let etiquetaNivel = document.getElementById('nivelDigimon');
        etiquetaNivel.innerHTML = nivelRecuperado;

        // identificamos los respectivos elementos del dom, para cambiar sus propiedades mediante .innerHTML para texto, y .src para imagen
        let etiquetaImagen = document.getElementById('imagenDigimon');
        etiquetaImagen.src = imagenRecuperada;

     });


    // la api de pokemon entrega la información en formato object ('llaves {}')
     fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
     .then(respuestaPokemon => respuestaPokemon.json() )
     .then(dataPokemon => {
         console.log(dataPokemon);
         console.log(dataPokemon.name);
      });




};




// el siguiente metodo es invocado por listaCompleta.html
/*
function listaDigimon(){ }
*/

let listaDigimon = () => {

    let endpoint = 'https://digimon-api.vercel.app/api/digimon';
    fetch(endpoint)
    .then( respuesta => respuesta.json() )
    .then( data => {
            console.log(data);
            console.log(data.length);

            // ciclo para extraer los datos del digimon
            for(let i=0; i < data.length; i++){
                // instruccion para crear un nuevo parrafo desde js
                let unParrafo = document.createElement('p');
                // le agrego contenido al parrado, especificamente, el nombre del digimon
                unParrafo.innerHTML = data[i].name;
                unParrafo.className = "hijoDigimonText";
                // agregamos al body el parrafo que acabamos de crear y modificar
                // document.body.appendChild(unParrafo);


                // instruccion para crear una etiqueta img
                let unaImagen = document.createElement('img');
                // le agregamos contenido a la etiqueta img, especificamente, la ruta de la imagen del digimon
                unaImagen.src = data[i].img;
                unaImagen.className = "imagenDigimon";
                //agregamos al body la etiqueta de imagen que acabamos de crear
                // document.body.appendChild(unaImagen);
                unaImagen.setAttribute("onclick", `mostrarInfoDigimon("${data[i].name}","${data[i].level}","${data[i].img}")`);
                // instruccion para crear otro parrafo desde js
                let otroParrafo = document.createElement('p');
                // le agrego contenido al parrado, especificamente, el nivel del digimon
                otroParrafo.innerHTML = data[i].level; 
                otroParrafo.className = "hijoDigimonText";
                //agregamos al body la etiqueta de imagen que acabamos de crear
                // document.body.appendChild(otroParrafo);   


                // creamos una etiqueta a href que sirve para links
                let elLink = document.createElement('a');
                // por ahora el link no lleva a ningun lado
                elLink.href = '#';
                // el contenido del link es el nombre del digimon
                elLink.innerHTML = data[i].name;



                
                // creamos una horizontal rule desde js
                // let unaRegla = document.createElement('hr');
                // agregamos al body la etiqueta de horizontal rule
                // document.body.appendChild(unaRegla);


                // creamos el div que almacenara todo
                let unDiv = document.createElement('div');
                let unDivImg = document.createElement('div');
                // le asignamos al div el número de iteración como id
                unDiv.id = i;
                unDiv.className = "hijoDigimon";
                // agregamos al div recien creado tanto los parrafos, como la imagen y la regla 
                unDiv.appendChild(unParrafo);
                unDiv.appendChild(elLink);
                unDivImg.appendChild(unaImagen);
                unDiv.appendChild(unDivImg);
                unDiv.appendChild(otroParrafo);
                // unDiv.appendChild(unaRegla);

                // agregamos el div recien creado y todos sus elementos hijos al body
                // document.body.appendChild(unDiv);

                // agregamos el div recien creado al article del html
                // identificamos el article
                let elArticle = document.getElementById('contenedorPadre');
                // agregamos el div recien creado al article identificado
                elArticle.appendChild(unDiv);











                // LOGICA PARA LLENAR LA LISTA DESPLEGABLE CON LOS NOMBRES DE LOS DIGIMON
                let laLista = document.getElementById('laListaDigimon');
                // creamos options mediante JS
                let unOption = document.createElement('option');
                // le agregamos a la propiedad value del option el nombre del digimon
                unOption.value = data[i].name;
                // le agregamos al contenido del option el nombre del digimon
                unOption.innerHTML = data[i].name;
                // agregamos el option a la lista desplegable 
                laLista.appendChild(unOption);


            }


    })
    .catch( unError => {
        console.log(unError);
        alert('hay un error');

    } );

};



let ocultarDivs = ()=>{
    losDivs = document.getElementsByTagName('div');

    //recorremos los divs y los ocultamos
    for (let i =0; i < losDivs.length; i++){
        // alteramos la propiedad display de todos los divs a none
        losDivs[i].style.display = 'none';

    }

    // hacemos visible el div al que le enviamos el id, al que le hice click
    losDivs[elid].style.display = 'block';
}
let mostrarInfoDigimon = (nombre,nivel,source)=>{
    let contenedorPadre = document.getElementById('contenedorDigimon');
    divAnterior = document.getElementById('digimon');
    if(!divAnterior){

    }else{
        //Quitamos Div anterior
        contenedorPadre.removeChild(divAnterior);
    }
    
    let unDiv = document.createElement('div');
    let unDivImg = document.createElement('div');
    let unaImagen = document.createElement('img');
    // let unParrafo = document.createElement('p');
    // le agrego contenido al parrado, especificamente, el nombre del digimon
    // unParrafo.innerHTML = nombre;
    // le agregamos contenido a la etiqueta img, especificamente, la ruta de la imagen del digimon
    unaImagen.src = source;
    //agregamos al body la etiqueta de imagen que acabamos de crear
    // document.body.appendChild(unaImagen);
    // instruccion para crear otro parrafo desde js
    let otroParrafo = document.createElement('p');
    // le agrego contenido al parrado, especificamente, el nivel del digimon
    otroParrafo.innerHTML = nivel;  
    // le asignamos al div el número de iteración como id
    unDiv.id = "digimon";
    // unDiv.className = "hijoDigimon";
    // agregamos al div recien creado tanto los parrafos, como la imagen y la regla 
    // unDiv.appendChild(unParrafo);
    // unDiv.appendChild(elLink);
    unDivImg.appendChild(unaImagen);
    unDiv.appendChild(unDivImg);
    unDiv.appendChild(otroParrafo);
   
    // agregamos el div recien creado al article identificado
    contenedorPadre.appendChild(unDiv);
    // let modal = document.getElementById('');
    // $('#').modal('show');
    // const modal = document.getElementById("");
    // modal.style.display = "block";
    let titulo = document.getElementById('nombreDigimon');
    titulo.innerHTML = nombre;
    const myModal = new bootstrap.Modal(document.getElementById('modalInfoDigimon'))
myModal.show()
}