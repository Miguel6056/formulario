// Configurar la fecha automáticamente al cargar la página
window.onload = function () {
    const fecha = document.getElementById("fecha");
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, '0'); // Asegura que el día tenga dos dígitos
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Meses comienzan en 0, sumamos 1
    const año = hoy.getFullYear();

    fecha.value = `${dia}/${mes}/${año}`; // Formato DD/MM/AAAA
};

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

// Eliminar espacios en el campo Block-ID
function eliminarEspacios(input) {
    input.value = input.value.replace(/\s+/g, ''); // Elimina todos los espacios
}

// Controlar las preguntas adicionales según la respuesta de "Resultado de visita"
function controlarPreguntasAdicionales() {
    const resultado = document.getElementById("resultado").value;
    const preguntasAdicionales = document.getElementById("preguntasAdicionales");

    // Selecciona los campos adicionales
    const camposAdicionales = preguntasAdicionales.querySelectorAll("input, textarea, select");

    if (resultado === "Cerrada" || resultado === "Volver" || resultado === "E.Completa" || resultado === "E.Incompleta") {
        preguntasAdicionales.style.display = "block"; // Mostrar preguntas adicionales
        camposAdicionales.forEach(campo => {
            campo.setAttribute("required", true); // Hacer los campos obligatorios
        });
    } else {
        preguntasAdicionales.style.display = "none"; // Ocultar preguntas adicionales
        camposAdicionales.forEach(campo => {
            campo.removeAttribute("required"); // Quitar obligatoriedad
        });
    }
}

// Formatear el campo Manzana - Lote
function formatearManzanaLote(input) {
    input.value = input.value.replace(/\s+/g, '').toLowerCase(); // Elimina espacios y convierte a minúsculas
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