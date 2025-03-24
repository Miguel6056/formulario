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

    // Seleccionar campos específicos
    const manzanaLote = document.getElementById("manzanaLote");
    const descripcionCasa = document.getElementById("descripcionCasa");
    const labelManzanaLote = document.querySelector("label[for='manzanaLote']");
    const labelDescripcionCasa = document.querySelector("label[for='descripcionCasa']");

    const otrosCamposAdicionales = preguntasAdicionales.querySelectorAll("#diaVisita, #hogares, #visitas");
    const otrosLabelsAdicionales = preguntasAdicionales.querySelectorAll("label[for='diaVisita'], label[for='hogares'], label[for='visitas']");

    // Condición para "Cerrada" y "Volver"
    if (resultado === "Cerrada" || resultado === "Volver") {
        preguntasAdicionales.style.display = "block"; // Mostrar la sección completa
        otrosCamposAdicionales.forEach(campo => {
            campo.style.display = "block"; // Mostrar campos adicionales
            campo.setAttribute("required", true); // Hacerlos obligatorios
        });
        otrosLabelsAdicionales.forEach(label => {
            label.style.display = "block"; // Mostrar etiquetas asociadas
        });
        manzanaLote.style.display = "none"; // Ocultar Manzana - Lote
        descripcionCasa.style.display = "none"; // Ocultar Descripción de la casa
        labelManzanaLote.style.display = "none"; // Ocultar etiqueta de Manzana - Lote
        labelDescripcionCasa.style.display = "none"; // Ocultar etiqueta de Descripción de la casa
        manzanaLote.removeAttribute("required");
        descripcionCasa.removeAttribute("required");
    } 
    // Condición para "E.Completa" y "E.Incompleta"
    else if (resultado === "E.Completa" || resultado === "E.Incompleta") {
        preguntasAdicionales.style.display = "block"; // Mostrar la sección
        otrosCamposAdicionales.forEach(campo => {
            campo.style.display = "none"; // Ocultar otros campos adicionales
            campo.removeAttribute("required"); // Quitar obligatoriedad de los otros campos
        });
        otrosLabelsAdicionales.forEach(label => {
            label.style.display = "none"; // Ocultar etiquetas asociadas a otros campos
        });
        manzanaLote.style.display = "block"; // Mostrar Manzana - Lote
        descripcionCasa.style.display = "block"; // Mostrar Descripción de la casa
        labelManzanaLote.style.display = "block"; // Mostrar etiqueta de Manzana - Lote
        labelDescripcionCasa.style.display = "block"; // Mostrar etiqueta de Descripción de la casa
        manzanaLote.setAttribute("required", true); // Hacer obligatorio Manzana - Lote
        descripcionCasa.setAttribute("required", true); // Hacer obligatorio Descripción de la casa
    } 
    // Ocultar todo si no cumple ninguna condición
    else {
        preguntasAdicionales.style.display = "none"; // Ocultar sección completa
        otrosCamposAdicionales.forEach(campo => {
            campo.style.display = "none"; // Ocultar otros campos
            campo.removeAttribute("required"); // Quitar obligatoriedad
        });
        otrosLabelsAdicionales.forEach(label => {
            label.style.display = "none"; // Ocultar etiquetas de otros campos
        });
        manzanaLote.style.display = "none"; // Ocultar Manzana - Lote
        descripcionCasa.style.display = "none"; // Ocultar Descripción de la casa
        labelManzanaLote.style.display = "none"; // Ocultar etiqueta de Manzana - Lote
        labelDescripcionCasa.style.display = "none"; // Ocultar etiqueta de Descripción de la casa
        manzanaLote.removeAttribute("required");
        descripcionCasa.removeAttribute("required");
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