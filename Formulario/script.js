const submitFunction = (event) => {
    event.preventDefault(); // Prevenir actualización
    validarFormulario();
};

document.getElementById('formulario').addEventListener('submit', submitFunction);

function validarFormulario() {
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        
        if (campo.value.length === 0) {
            mostrarError(errorCampo, '¡Este campo es requerido!');
            validacionCorrecta = false;
        } else if (campo.value.length < 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    const email= document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@{^\s@}+\.{^\s@}+$/.test(email.value)){
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un correo electronico valido!')
    }

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
};

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
};
