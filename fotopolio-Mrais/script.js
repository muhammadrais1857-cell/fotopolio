document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  }));

  // Modal
  const btnContact = document.getElementById('btnContact');
  const modal = document.getElementById('modalContact');
  const closeModal = document.getElementById('closeModal');

  btnContact.addEventListener('click', () => modal.style.display = 'flex');
  closeModal.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });
});