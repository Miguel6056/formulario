// Mostrar el campo "Otros" en la primera pregunta
function mostrarCampoOtros() {
    const encuestador = document.getElementById("encuestador").value;
    const campoOtros = document.getElementById("campoOtros");

    if (encuestador === "Otros") {
        campoOtros.style.display = "block"; // Mostrar el campo de texto para "Otros"
    } else {
        campoOtros.style.display = "none"; // Ocultar el campo de texto
    }
}

// Controlar las preguntas adicionales según la respuesta de "Resultado de visita"
function controlarPreguntasAdicionales() {
    const resultado = document.getElementById("resultado").value;
    const preguntasAdicionales = document.getElementById("preguntasAdicionales");

    if (resultado === "Cerrada" || resultado === "Volver" || resultado === "E.Completa" || resultado === "E.Incompleta" || resultado === "FSP") {
        preguntasAdicionales.style.display = "block"; // Mostrar preguntas adicionales
    } else {
        preguntasAdicionales.style.display = "none"; // Ocultar preguntas adicionales
    }
}

// Validar el formulario antes de enviarlo
function validarFormulario() {
    const grupo = document.getElementById("grupo").value;

    if (grupo < 1 || grupo > 10) {
        alert("Por favor, ingrese un valor válido para Grupo (entre 1 y 10).");
        return false; // Evitar el envío del formulario
    }

    return true; // Permitir el envío si todo está correcto
}