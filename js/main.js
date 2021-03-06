$(document).ready(function () {
  const swiper = new Swiper(".hotel-slider", {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });
  const reviewsSlader = new Swiper(".reviews-slider", {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  // var hotelSlider = new Swiper(".hotel-slider", {
  //   loop: true,

  //   navigation: {
  //     nextEl: ".hotel-slider__button--next",
  //     prevEl: ".hotel-slider__button--prev",
  //   },
  //   effect: "coverflow",
  // });
  // var reviewSlider = new Swiper(".reviews-slider", {
  //   loop: true,

  //   navigation: {
  //     nextEl: ".reviews-slider__button--next",
  //     prevEl: ".reviews-slider__button--prev",
  //   },
  // });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //обработка формы
  $(".modal__form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name",
          minlength: "The name must not be shorter than 2 characters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Enter your phone",
          minlength: "Phone number must be have 11 number",
        },
      },
    });
  });
  $(".newsletter__form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
  $(".footer__form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name",
          minlength: "The name must not be shorter than 2 characters",
        },
        phone: {
          required: "Enter your phone",
          minlength: "Phone number must be have 11 number",
        },
      },
    });
  });
  AOS.init();
  $(function () {
    $("#booking-phone").mask("+7(999) 999-99-99");
  });
  $(function () {
    $("#footer-phone").mask("+7(999) 999-99-99");
  });
});
