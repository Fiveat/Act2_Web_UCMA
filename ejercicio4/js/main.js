// Variable global para controlar el estado del texto
let isTextVisible = false;

function toggleText() {
  // Obtenemos el elemento del texto adicional
  const additionalText = document.querySelector('.additional');
  // Obtenemos el enlace para cambiar su texto
  const toggleLink = document.querySelector('a[onclick="toggleText();"]');

  // Alternar la visibilidad del texto
  if (!isTextVisible) {
    // Mostrar texto
    additionalText.classList.remove('hidden');
    additionalText.classList.add('visible');
    toggleLink.textContent = 'Ocultar exceso de texto';
    isTextVisible = true;
  } else {
    // Ocultar texto
    additionalText.classList.remove('visible');
    additionalText.classList.add('hidden');
    toggleLink.textContent = 'Seguir leyendo';
    isTextVisible = false;
  }
}