document.addEventListener("DOMContentLoaded", function() {
    // Array de textos que se mostrarán en la animación
    const textos = ["¡Hi, and welcome! :)", "¡Hola, y bienvenido! :)"];
  
    // Obtener el párrafo
    const parrafo = document.getElementById("miParrafo");
  
    // Función para cambiar el texto de manera cíclica
    function cambiarTexto() {
      let indice = textos.indexOf(parrafo.textContent);
      indice = (indice + 1) % textos.length;
      parrafo.textContent = textos[indice];
    }
  
    // Configurar la animación para que cambie el texto cada cierto tiempo
    setInterval(cambiarTexto, 4000); // Cambia el texto cada 4 segundos (ajusta según tus necesidades)
  });

  document.getElementById('openPdfButton').addEventListener('click', function() {
    window.open('./w.pdf', '_blank');
  });
