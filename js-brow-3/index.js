
// funcion para captura de informacion 
function captura() {
    var captuNombre = document.getElementById("taskInput1").value;
    var captuEmail = document.getElementById("taskInput2").value;

    if (captuNombre == "") {
        alert("Es obligatorio ingresar un nombre");
        document.getElementById("taskInput1").focus();
    } else if (captuEmail == "") {
        alert("Es obligatorio ingresar un correo electrónico");
        document.getElementById("taskInput2").focus();
    } else {
        console.log(captuNombre + " , " + captuEmail);
        //crear listado de elementos guardados
        var listItem = document.createElement("li");
        listItem.textContent = captuNombre + " - " + captuEmail;

        var taskList = document.getElementById("taskList");
        taskList.appendChild(listItem);

        document.getElementById("taskInput1").value = "";
        document.getElementById("taskInput2").value = "";
        document.getElementById("taskInput1").focus();
        
        
        var noDataMessage = document.getElementById("noDataMessage");

        if (taskList.childElementCount === 0) {
            noDataMessage.style.display = "block";
        } else {
            noDataMessage.style.display = "none";
        }
    }
}
// Obtener referencia al mensaje "Sin datos" con el boton
var deleteAllButton = document.getElementById("deleteAllButton");

// Agregar evento de escucha para el clic del botón "Eliminar lista"
deleteAllButton.addEventListener("click", function() {
    var taskList = document.getElementById("taskList");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Verificar si la lista está vacía y mostrar u ocultar el mensaje "Sin datos
    var noDataMessage = document.getElementById("noDataMessage");

    if (taskList.childElementCount === 0) {
        noDataMessage.style.display = "block";
    } else {
        noDataMessage.style.display = "none";
    }
});
