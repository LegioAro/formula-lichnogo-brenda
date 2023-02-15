function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModal();
isModalClose();

const swiper = new Swiper('.slider-1', {
  slidesPerView: 3.5,
  breakpoints: {
    320: {
      slidesPerView: 1.1,

      spaceBetween: 0,
    },
    550: {
      slidesPerView: 1.5,
      allowTouchMove: true,
    },
    769: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      allowTouchMove: false,
    },
  },
});

const swiper2 = new Swiper('.slider-2', {
  slidesPerView: 3.5,
  breakpoints: {
    320: {
      slidesPerView: 1.1,

      spaceBetween: 0,
    },
    550: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

const swiper3 = new Swiper('.slider-3', {
  slidesPerView: 3.5,
  breakpoints: {
    320: {
      slidesPerView: 1.06,
      spaceBetween: 0,
    },

    550: { slidesPerView: 2, slidesPerView: 1.5 },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
const swiper4 = new Swiper('.slider-4', {
  slidesPerView: 3.5,
  breakpoints: {
    320: {
      slidesPerView: 1.14,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: { slidesPerView: 3.2, spaceBetween: 20 },

    900: { slidesPerView: 3.5, spaceBetween: 20 },
    1250: { slidesPerView: 5, spaceBetween: 10 },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

let swiper5;
let swiper6;

function initSliderModuls() {
  if (window.innerWidth <= 1000) {
    swiper5 = new Swiper('.slider-5', {
      slidesPerView: 3.5,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 13,
        },
        600: {
          slidesPerView: 1.25,
          spaceBetween: 13,
        },
        1000: {
          slidesPerView: 'auto',
          allowTouchMove: false,
        },
      },
    });
  } else if (
    window.innerWidth > 1000 &&
    document.querySelector('.slider-5').classList.contains('swiper-initialized')
  ) {
    swiper5.destroy(true, true);
  }
}
function initSliderDescriptions() {
  if (window.innerWidth <= 1000) {
    swiper5 = new Swiper('.slider-6', {
      slidesPerView: 3.5,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 13,
        },
        600: {
          slidesPerView: 1.25,
          spaceBetween: 13,
        },
        1000: {
          slidesPerView: 'auto',
          allowTouchMove: false,
        },
      },
    });
  } else if (
    window.innerWidth > 1000 &&
    document.querySelector('.slider-6').classList.contains('swiper-initialized')
  ) {
    swiper5.destroy(true, true);
  }
}
initSliderDescriptions();
initSliderModuls();

window.addEventListener('resize', function () {
  initSliderModuls();
  initSliderDescriptions();
});
