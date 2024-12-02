document.addEventListener('DOMContentLoaded', function() {
    const toggleLinks = document.querySelectorAll('.toggle-content');
    
    toggleLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Selecciona el elemento <p> anterior al enlace
        const content = this.previousElementSibling;
        
        // Verifica que el elemento existe y es un párrafo
        if (content && content.tagName.toLowerCase() === 'p') {
          if (content.style.display === 'none') {
            content.style.display = 'block';
            this.textContent = 'Ocultar contenidos';
          } else {
            content.style.display = 'none';
            this.textContent = 'Mostrar contenidos';
          }
        } else {
          console.warn('Elemento de contenido no encontrado o no es un párrafo.');
        }
      });
    });
  });
  