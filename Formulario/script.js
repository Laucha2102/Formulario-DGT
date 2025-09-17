const submitFunction = (event) => {
    event.prevetDefault() // Que se preventa la actualizacion de la web
    validarFormulario()
}

Document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha el envio del formulario 

function validarFormulario(){
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayuscula
        if(campo.value.length == ''){
            mostrarError (errorCampo, '¡Este campo es requerido!')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError (errorCampo, '¡Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })
}

const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none";
}