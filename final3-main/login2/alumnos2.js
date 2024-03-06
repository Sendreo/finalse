let selectedRow = null;

// Evento DOMContentLoaded para asegurarte de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Cargar datos desde localStorage al cargar la página
    loadDataFromLocalStorage();

    document.querySelector("#student-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const rollNo = document.querySelector("#rollNo").value;
        const cuil = document.querySelector("#cuil").value;
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;

        if (firstName === "" || lastName === "" || rollNo === "" || cuil === "" || email === "" || telefono === "") {
            showAlert("Falta por rellenar algunos campos", "danger");
        } else {
            if (selectedRow === null) {
                // Agregar nueva fila
                addRowToTable(firstName, lastName, rollNo, cuil, email, telefono);
                showAlert("Alumno agregado", "success");
            } else {
                // Editar fila existente
                editRow(selectedRow, firstName, lastName, rollNo, cuil, email, telefono);
                showAlert("Editaste la información", "info");
                selectedRow = null; // Resetear la fila seleccionada después de editar
            }

            clearFields();
            saveDataToLocalStorage(); // Guardar en localStorage después de cada operación
        }
    });

    document.querySelector("#student-list").addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("edit")) {
            selectedRow = target.parentElement.parentElement;
            fillFormWithRowData(selectedRow);
        } else if (target.classList.contains("delete")) {
            deleteRow(target.parentElement.parentElement);
            showAlert("Eliminaste la información", "danger");
            saveDataToLocalStorage(); // Guardar en localStorage después de eliminar
        }
    });

    document.querySelector("#clearLocalStorage").addEventListener("click", function () {
        clearLocalStorage();
        clearTable();
        showAlert("Se eliminaron todos los datos", "info");
    });
});

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => div.remove(), 4000);
}

function saveDataToLocalStorage() {
    const studentList = [];
    const rows = document.querySelectorAll("#student-list tr");

    rows.forEach((row) => {
        const student = {
            firstName: row.children[0].textContent,
            lastName: row.children[1].textContent,
            rollNo: row.children[2].textContent,
            cuil: row.children[3].textContent,
            email: row.children[4].textContent,
            telefono: row.children[5].textContent,
        };

        studentList.push(student);
    });

    localStorage.setItem("studentList", JSON.stringify(studentList));
}

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("studentList");

    if (storedData) {
        const studentList = JSON.parse(storedData);

        studentList.forEach((student) => {
            addRowToTable(student.firstName, student.lastName, student.rollNo, student.cuil, student.email, student.telefono);
        });
    }
}

function clearLocalStorage() {
    localStorage.removeItem("studentList");
}

function clearTable() {
    const list = document.querySelector("#student-list");
    list.innerHTML = "";
}

function addRowToTable(firstName, lastName, rollNo, cuil, email, telefono) {
    const list = document.querySelector("#student-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNo}</td>
        <td>${cuil}</td>
        <td>${email}</td>
        <td>${telefono}</td>
        <td>
            <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
            <a href="#" class="btn btn-danger btn-sm delete">borrar</a>
           
        </td>
    `;

    list.appendChild(row);
}

function fillFormWithRowData(row) {
    document.querySelector("#firstName").value = row.children[0].textContent;
    document.querySelector("#lastName").value = row.children[1].textContent;
    document.querySelector("#rollNo").value = row.children[2].textContent;
    document.querySelector("#cuil").value = row.children[3].textContent;
    document.querySelector("#email").value = row.children[4].textContent;
    document.querySelector("#telefono").value = row.children[5].textContent;
}

function editRow(row, firstName, lastName, rollNo, cuil, email, telefono) {
    row.children[0].textContent = firstName;
    row.children[1].textContent = lastName;
    row.children[2].textContent = rollNo;
    row.children[3].textContent = cuil;
    row.children[4].textContent = email;
    row.children[5].textContent = telefono;
}

function deleteRow(row) {
    row.remove();
    
}

function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#cuil").value = "";
    document.querySelector("#rollNo").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#telefono").value = "";
}



document.addEventListener('DOMContentLoaded', function () {
    // Muestra la alerta al cargar la página
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Iniciaste sesion correctamente',
      icon: 'success',
      confirmButtonText: 'Entendido'
    });
  });



    // Espera a que el documento esté completamente cargado
    document.addEventListener('DOMContentLoaded', function () {
        // Obtiene el botón por su ID
        var botonCerrar = document.getElementById('botoncerrar');
    
        // Agrega un evento de clic al botón
        botonCerrar.addEventListener('click', function () {
          // Muestra una alerta de confirmación
          Swal.fire({
            title: '¿Estás seguro?',
            text: 'Cerrar sesión eliminará tu sesión actual.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            // Redirige a otro HTML si se confirma la acción
            if (result.isConfirmed) {
              window.location.href = 'login2.html';
            }
          });
        });
      });
      var botonvolver= document.getElementById("volver");

      botonvolver.addEventListener("click", function(){
      
      window.location.href= "empleados.html";
      
      
      
      
      
      });