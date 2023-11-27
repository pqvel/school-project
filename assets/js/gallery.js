const popupGallery = document.querySelector(".popup-gallery");
const popupGallerySlider = popupGallery.querySelector(".popup-gallery-swiper");
const popupGalleryItems = popupGallerySlider.querySelector(
  ".popup-gallery__items"
);
const galleryItems = [...document.querySelector(".gallery__photo").children];

galleryItems.forEach((item, i) => {
  const popupItem = item.cloneNode(true);
  popupItem.classList.add("popup-gallery__item", "swiper-slide");
  popupGalleryItems.appendChild(popupItem);
});

const gallerySwiper = new Swiper(popupGallerySlider, {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

galleryItems.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    popupGallery.classList.add("fadeIn");
    popupGallery.classList.remove("fadeOut");
    gallerySwiper.slideTo(i);
  });
});

document
  .querySelector(".popup-gallery-swiper__close")
  .addEventListener("click", () => {
    popupGallery.classList.remove("fadeIn");
    popupGallery.classList.add("fadeOut");
  });
popupGallery.addEventListener("click", (e) => {
  popupGallery.classList.remove("fadeIn");
  popupGallery.classList.add("fadeOut");
});

popupGallerySlider.addEventListener("click", (e) => e.stopPropagation());
