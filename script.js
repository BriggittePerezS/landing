const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const enviarBtn = document.getElementById('enviarBtn');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombreInput = document.getElementById('nombre').value.trim();
  const correoInput = document.getElementById('correo').value.trim();
  const mensajeInput = document.getElementById('mensaje').value.trim();

  if (nombreInput === '' || correoInput === '' || mensajeInput === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Simula envío
  enviarBtn.classList.add('bg-green-500');
  enviarBtn.textContent = 'Enviado ✅';
  formMessage.classList.remove('hidden');

  form.reset();

  setTimeout(() => {
    enviarBtn.classList.remove('bg-green-500');
    enviarBtn.textContent = 'Enviar';
    formMessage.classList.add('hidden');
  }, 3000);
});
