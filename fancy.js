//querySelectors for form input elements//
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const eventAddress = document.querySelector("#address");
const city = document.querySelector("#city");
const homeState = document.querySelector("#home-state");
const zipCode = document.querySelector("#zip-code");

//querySelector for form//
const orderForm = document.querySelector("#order-form");
//Back to top button//
const backToTopButton = document.querySelector(".back-to-top"); //Returns the first element that is a descendent of node that matches selector. Node=element//
const scrollToBottomButton = document.querySelector(".scroll-to-bottom");
const showOnPx = 100;

function goToTop() {
  window.scrollTo(0, 0);
};


//Scroll to bottom button//
function goToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
};

function hiddenClassAssign() {
  if (window.scrollY > showOnPx) {
    backToTopButton.classList.remove("hidden");
    scrollToBottomButton.classList.add("hidden");
  } else {
    scrollToBottomButton.classList.remove("hidden");
    backToTopButton.classList.add("hidden");
  }
};

// TODO: let user know if their form was submitted
// TODO: clear data after submission :)

async function submit(event) {
  // prevent page reload
  event.preventDefault()

  // gather form values and create a new object
  const formInfo = {
    name: firstName.value + ' ' + lastName.value,
    email: email.value,
    phone: phone.value,
    address: eventAddress.value + ' ' + city.value + ', ' + homeState.value + ', ' + zipCode.value,
  };

  console.log(formInfo)

  // window.alert('message') --> adds a pop-up message

  

  // fetch request to formsubmit server. POST form data for their server to send an email.
  // try {
  //   const response = await fetch(
  //     "https://formsubmit.co/ajax/efeld2015@gmail.com",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(formInfo),
  //     }
  //   );
  //   console.log(response);
  //   // catch any errors and log error data
  // } catch (error) {
  //   console.log(error);
  // }
};

//event listeners//
document.addEventListener("scroll", hiddenClassAssign);
scrollToBottomButton.addEventListener("click", goToBottom);
backToTopButton.addEventListener("click", goToTop);
orderForm.addEventListener("submit", submit);