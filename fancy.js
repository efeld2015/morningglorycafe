var backToTopButton = document.querySelector(".back-to-top");
var scrollToBottomButton = document.querySelector(".scroll-to-bottom");
var showOnPx = 100;

var goToTop = function () {
  window.scrollTo(0, 0);
};

var goToBottom = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

var hiddenClassAssign = function () {
  if (window.scrollY > showOnPx) {
    backToTopButton.classList.remove("hidden");
    scrollToBottomButton.classList.add("hidden");
  } else {
    scrollToBottomButton.classList.remove("hidden");
    backToTopButton.classList.add("hidden");
  }
};

document.addEventListener("scroll", hiddenClassAssign);
scrollToBottomButton.addEventListener("click", goToBottom);
backToTopButton.addEventListener("click", goToTop);
