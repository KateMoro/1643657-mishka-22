const mainNavButton = document.querySelector(".main-nav__toggle");
const mainNavList = document.querySelector(".main-nav__list");
const mainNavSearch = document.querySelector(".main-nav__search");
const mainNavCart = document.querySelector(".main-nav__cart");

const weekProductButton = document.querySelector(".week-product__button");
const weekProductPopup = document.querySelector(".modal");
const closePopup = document.querySelector(".modal__close");

mainNavList.classList.add("main-nav__list--closed");
mainNavSearch.classList.add("main-nav__search--closed");
mainNavCart.classList.add("main-nav__cart--closed");

mainNavButton.onclick = function() {
  mainNavButton.classList.toggle("main-nav__toggle--opened");
  mainNavList.classList.toggle("main-nav__list--closed");
  mainNavSearch.classList.toggle("main-nav__search--closed");
  mainNavCart.classList.toggle("main-nav__cart--closed");
};

weekProductButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  weekProductPopup.classList.add("modal--show");
});

closePopup.onclick = function() {
  weekProductPopup.classList.remove("modal--show");
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (weekProductPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      weekProductPopup.classList.remove("modal--show");
    }
  }
});
