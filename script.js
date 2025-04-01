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

    // Selección de campos específicos
    const manzanaLote = document.getElementById("manzanaLote");
    const descripcionCasa = document.getElementById("descripcionCasa");
    const labelManzanaLote = document.querySelector("label[for='manzanaLote']");
    const labelDescripcionCasa = document.querySelector("label[for='descripcionCasa']");
    const diaVisita = document.getElementById("diaVisita");
    const labelDiaVisita = document.querySelector("label[for='diaVisita']");
    const observaciones = document.getElementById("observaciones");
    const labelObservaciones = document.querySelector("label[for='observaciones']");

    // Mostrar Observaciones siempre
    observaciones.style.display = "block"; // Mantener visible el campo de Observaciones
    labelObservaciones.style.display = "block"; // Mantener visible la etiqueta de Observaciones

    const otrosCamposAdicionales = preguntasAdicionales.querySelectorAll("#descripcionCasa, #hogares, #visitas");
    const otrosLabelsAdicionales = preguntasAdicionales.querySelectorAll("label[for='descripcionCasa'], label[for='hogares'], label[for='visitas']");

    // 📌 Si la respuesta es "Volver"
    if (resultado === "Volver") {
        preguntasAdicionales.style.display = "block"; // Mostrar la sección de preguntas adicionales
        otrosCamposAdicionales.forEach(campo => campo.style.display = "block"); // Mostrar otros campos adicionales
        otrosLabelsAdicionales.forEach(label => label.style.display = "block"); // Mostrar etiquetas de otros campos
        diaVisita.style.display = "block"; // Mostrar Día de Visita
        labelDiaVisita.style.display = "block"; // Mostrar etiqueta de Día de Visita
        diaVisita.setAttribute("required", true); // Hacer obligatorio Día de Visita
    } 
    // 📌 Si la respuesta es "Cerrada"
    else if (resultado === "Cerrada") {
        preguntasAdicionales.style.display = "block"; // Mostrar la sección de preguntas adicionales
        diaVisita.style.display = "none"; // Ocultar Día de Visita
        labelDiaVisita.style.display = "none"; // Ocultar etiqueta de Día de Visita
        diaVisita.removeAttribute("required"); // Quitar obligatoriedad de Día de Visita
    } 
    // 📌 Si la respuesta es "E.Completa" o "E.Incompleta"
    else if (resultado === "E.Completa" || resultado === "E.Incompleta") {
        preguntasAdicionales.style.display = "block"; // Mostrar la sección de preguntas adicionales
        manzanaLote.style.display = "block"; // Mostrar Manzana - Lote
        descripcionCasa.style.display = "block"; // Mostrar Descripción de la casa
        labelManzanaLote.style.display = "block"; // Mostrar etiqueta de Manzana - Lote
        labelDescripcionCasa.style.display = "block"; // Mostrar etiqueta de Descripción de la casa
        manzanaLote.setAttribute("required", true); // Hacer obligatorio Manzana - Lote
        descripcionCasa.setAttribute("required", true); // Hacer obligatorio Descripción de la casa
        diaVisita.style.display = "none"; // Ocultar Día de Visita
        labelDiaVisita.style.display = "none"; // Ocultar etiqueta de Día de Visita
        diaVisita.removeAttribute("required"); // Quitar obligatoriedad de Día de Visita
    } 
    // 📌 Si la respuesta es "FSP"
    else if (resultado === "FSP") {
        preguntasAdicionales.style.display = "block"; // Mostrar la sección de preguntas adicionales
        manzanaLote.style.display = "block"; // Mostrar Manzana - Lote
        labelManzanaLote.style.display = "block"; // Mostrar etiqueta de Manzana - Lote
        manzanaLote.setAttribute("required", true); // Hacer obligatorio Manzana - Lote
        descripcionCasa.style.display = "none"; // Ocultar Descripción de la casa
        labelDescripcionCasa.style.display = "none"; // Ocultar etiqueta de Descripción de la casa
        descripcionCasa.removeAttribute("required"); // Quitar obligatoriedad de Descripción de la casa
        diaVisita.style.display = "none"; // Ocultar Día de Visita
        labelDiaVisita.style.display = "none"; // Ocultar etiqueta de Día de Visita
        diaVisita.removeAttribute("required"); // Quitar obligatoriedad de Día de Visita
    } 
    // 📌 Si es "Deshabitado", "Renuente" u otro valor
    else {
        preguntasAdicionales.style.display = "none"; // Ocultar la sección de preguntas adicionales
        otrosCamposAdicionales.forEach(campo => campo.style.display = "none"); // Ocultar otros campos adicionales
        otrosLabelsAdicionales.forEach(label => label.style.display = "none"); // Ocultar etiquetas de otros campos
        manzanaLote.style.display = "none"; // Ocultar Manzana - Lote
        labelManzanaLote.style.display = "none"; // Ocultar etiqueta de Manzana - Lote
        manzanaLote.removeAttribute("required"); // Quitar obligatoriedad de Manzana - Lote
        descripcionCasa.style.display = "none"; // Ocultar Descripción de la casa
        labelDescripcionCasa.style.display = "none"; // Ocultar etiqueta de Descripción de la casa
        descripcionCasa.removeAttribute("required"); // Quitar obligatoriedad de Descripción de la casa
        diaVisita.style.display = "none"; // Ocultar Día de Visita
        labelDiaVisita.style.display = "none"; // Ocultar etiqueta de Día de Visita
        diaVisita.removeAttribute("required"); // Quitar obligatoriedad de Día de Visita

        // Asegurar que Observaciones siempre se vea
        preguntasAdicionales.style.display = "block"; 
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