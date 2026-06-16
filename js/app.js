document.addEventListener("DOMContentLoaded", () => {
    const tablaNoticias = document.getElementById("tablaCuerpo");
    if (tablaNoticias) {
        const noticiasData = [
            { id: 101, titulo: "Vulnerabilidad en Servidores Bedrock", categoria: "Seguridad", detalle: "Se ha detectado el error 'Guardian'. Se recomienda actualizar los binarios del servidor dedicado." },
            { id: 102, titulo: "Moodle como plataforma de estudio y aprendizaje en el mundo de software libre", categoria: "Educación", detalle: "El sitio para obtener apoyo, hacer preguntas y contribuir a la plataforma de aprendizaje de código abierto" },
            { id: 103, titulo: "Debian actualiza dependencias build-essential", categoria: "Linux", detalle: "Los paquetes requeridos para compilación desde el código fuente han sido parcheados." }
        ];
        noticiasData.forEach(noticia => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td class="fw-bold">${noticia.id}</td>
                <td>${noticia.titulo}</td>
                <td><span class="badge bg-secondary">${noticia.categoria}</span></td>
                <td><button class="btn btn-sm btn-outline-primary btn-ver-mas" data-id="${noticia.id}">Detalles</button></td>
            `;
            tablaNoticias.appendChild(fila);
        });
        const botonesVerMas = document.querySelectorAll('.btn-ver-mas');
        botonesVerMas.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const idSeleccionado = parseInt(e.target.getAttribute('data-id'));
                const noticiaSeleccionada = noticiasData.find(n => n.id === idSeleccionado);
                
                if(noticiaSeleccionada) {
                    document.getElementById('modalTitulo').innerText = noticiaSeleccionada.titulo;
                    document.getElementById('modalContenido').innerText = noticiaSeleccionada.detalle;
                    
                    const modalInstancia = new bootstrap.Modal(document.getElementById('infoModal'));
                    modalInstancia.show();
                }
            });
        });
    }
    const formContacto = document.getElementById("formContacto");
    if (formContacto) {
        formContacto.addEventListener("submit", function(event) {
            event.preventDefault();            
            const emailInput = document.getElementById("email");
            const mensajeInput = document.getElementById("mensaje");
            let esValido = true;
            if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
                emailInput.classList.add("is-invalid");
                esValido = false;
            } else {
                emailInput.classList.remove("is-invalid");
                emailInput.classList.add("is-valid");
            }

            if (mensajeInput.value.trim() === "") {
                mensajeInput.classList.add("is-invalid");
                esValido = false;
            } else {
                mensajeInput.classList.remove("is-invalid");
                mensajeInput.classList.add("is-valid");
            }
            if (esValido) {
                const alerta = document.getElementById("alertaExito");
                alerta.classList.remove("d-none");
                formContacto.reset();
                setTimeout(() => {
                    emailInput.classList.remove("is-valid");
                    mensajeInput.classList.remove("is-valid");
                    alerta.classList.add("d-none");
                }, 4000);
            }
        });
    }
});