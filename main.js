function showMessage() {
  alert('Hello from myMakan!');
}

function toggleDropdown() {
  const dropdown = document.getElementById('communityDropdown');
  dropdown.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      805: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1634: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // Modal toggle functionality
  const modalButtons = document.querySelectorAll('[data-modal-toggle]');
  modalButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      const modal = document.querySelector(`#modal-${index}`);
      modal.classList.toggle('hidden');
      event.stopPropagation();
    });
  });

  // Close modals when clicking outside
  document.addEventListener('click', (event) => {
    modalButtons.forEach((button, index) => {
      const modal = document.querySelector(`#modal-${index}`);
      if (modal && !modal.contains(event.target)) {
        modal.classList.add('hidden');
      }
    });
  });
});
