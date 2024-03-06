document.addEventListener("DOMContentLoaded", function() {
    let botonInicio = document.getElementById("inicioboton");
    let checkbox = document.getElementById("check");
    const inputUser = document.getElementById("user");
    const inputPass = document.getElementById("pass");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            inputPass.type = "text";
        } else {
            inputPass.type = "password";
        }
    });

    botonInicio.addEventListener("click", function(e) {
        e.preventDefault(); 

        const usuario = inputUser.value;
        const contraseña = inputPass.value;

        if (usuario === "" || contraseña === "") 
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Contraseña es incorrecta",
                
              });
        } 
        else if (usuario === "admin" && contraseña === "1234") 
        {
           
            window.location.href = "empleados.html";
        } 
        else if(usuario === 'empleado' && contraseña === 'empleado')
        {
            window.location.href = 'alumnos.html'
        }
       
    });
});