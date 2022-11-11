//Back to top button//
const backToTopButton = document.querySelector(".back-to-top"); //Returns the first element that is a descendent of node that matches selector. Node=element//
const scrollToBottomButton = document.querySelector(".scroll-to-bottom");
const showOnPx = 100;

const goToTop = function () {
  window.scrollTo(0, 0);
};

//Scroll to bottom button//
const goToBottom = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

const hiddenClassAssign = function () {
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

