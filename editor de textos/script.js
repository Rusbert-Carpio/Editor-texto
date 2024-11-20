// script.js

// Abrir un archivo desde el sistema
function abrirArchivo() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt";

    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById("editor").value = e.target.result;
        };
        reader.readAsText(file);
    };

    input.click();
}

// Guardar el contenido del editor como un archivo
function guardarArchivo() {
    const contenido = document.getElementById("editor").value;
    const blob = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo.txt";
    enlace.click();
    URL.revokeObjectURL(url);
}