function mostrarAviso(event) {
  event.preventDefault();
  const toastElement = document.getElementById('disponibilidadeToast');
  const toast = new bootstrap.Toast(toastElement, {
      delay: 2000
  });
  toast.show();
}