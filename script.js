// Seleccionamos el formulario y el mensaje
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtenemos valores
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación simple
    if(nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor completa todos los campos.');
        return;
    }

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(correo)) {
        alert('Ingresa un correo válido.');
        return;
    }

    // Si todo está bien
    formMessage.classList.remove('hidden');
    formMessage.textContent = '¡Tu mensaje ha sido enviado con éxito!';

    // Limpiar formulario
    form.reset();
});
