const validFormFieldInput = document.getElementById("validFormFieldInput");

if(validFormFieldInput){
    validFormFieldInput.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const crearTarea = document.getElementById("crearTarea");
        const crearDescripcion = document.getElementById("crearDescripcion");
        const prioridad = document.querySelectorAll('input[name="prioridad"]:checked');
        const devolver = document.getElementById("cancelar");
        const fechalimite = document.getElementById("fechaLimite");

        if(crearTarea.value.trim() === "" && crearDescripcion.value.trim() === "" && prioridad.length === 0 && fechalimite.value == ""){
            Swal.fire({
                title: "Los campos son obligatorios.",
                text: "Parece que faltan campos por completar.",
                icon: "error"
            });
            return;
        }

        if(crearTarea.value.trim() === ""){
            Swal.fire({
                title: "El titulo esta vacío.",
                text: "Debes agregar el título.",
                icon: "error"
            });
            return;
        }
    
        if(crearDescripcion.value.trim() === ""){
            Swal.fire({
                title: "La descripción esta vacía.",
                text: "Debes agregar una descripción.",
                icon: "error"
            });
            return;
        }
        
    
        if(prioridad.length === 0){
            Swal.fire({
                title: "Prioridad es obligatoria",
                text: "Debes seleccionar una prioridad.",
                icon: "error"
            });
            return;
        }
        
    
        if(fechalimite.value == ""){
            Swal.fire({
                title: "Fecha límite obligatoria.",
                text: "Debes seleccionar una fecha límite.",
                icon: "error"
            });
            return;
        }

        const hoy = new Date();
        const fechaActualizada = new Date(fechalimite.value);
        console.log("Fecha actualizada " + fechaActualizada);
        console.log("fecha limite " + fechalimite.value);
        
        
        if(fechaActualizada <= hoy){
            Swal.fire({
                title: "Fecha es obligatoria.",
                text: "Debes seleccionar una fecha posterior y hora actual",
                icon: "error"
            });
            return;
        }
    
        crearTarea.value = "";
        crearDescripcion.value = "";
        prioridad.forEach(prio => prio.checked = false);
        fechalimite.value = "";
    
        
        Swal.fire({
            title: "Tarea agregada",
            icon: "success"
        }).then(() => {
            devolver.click();
        })

    })
}