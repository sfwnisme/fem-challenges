"use strict";

// =====||||[IMPORTING]
import validation from "./extensions/validation.js";
validation();
// =====||||[IMPORTING]

let stepSection = document.querySelectorAll(".right");
let stepNumberContainer = document.querySelectorAll(".step");
let stepNumber = document.querySelectorAll(".step-number");
let nextBtn = document.querySelector(".next-btn");
let backBtn = document.querySelector(".back-btn");
let planBox = document.querySelectorAll(".plans .plan");
let pickBox = document.querySelectorAll(".pick");
let pickCheck = document.querySelectorAll(".pick input");
let change = document.querySelector("button.change");
let inputs = document.querySelectorAll("form input");

// Variables
let nam = document.querySelector("[name=username]");
console.log(nam);
let email = document.querySelector("[name=email]");
let phone = document.querySelector("[name=phone-number]");
let conf = false;
let arr = [];

// ====| step section
let currentStep = 1;
let stepsArray = Array.from(stepSection);
let stepsCount = Array.from(stepSection).length;

// ====| Display Functions
main();

// ====| Next Event
nextBtn.addEventListener("click", nextStep);
backBtn.addEventListener("click", backStep);
// change button
change.addEventListener("click", changePlan);
stepNumberContainer.forEach((step) => {
  // validator();

  step.addEventListener("click", stepNumberSwitch);
});

// ====| plans
planBox.forEach((plan) => {
  plan.addEventListener("click", (p) => {
    let all = p.currentTarget.parentElement.querySelectorAll(".active-plan");
    console.log(all);
    all.forEach((e) => e.classList.remove("active-plan"));
    p.currentTarget.classList.add("active-plan");
  });
});

// ====| picks
pickBox.forEach((pick) => {
  pick.addEventListener("click", (p) => {
    p.currentTarget.classList.toggle("active-pick");
    if (p.currentTarget.classList.contains("active-pick")) {
      p.currentTarget.querySelector("input").setAttribute("checked", "");
    } else {
      p.currentTarget.querySelector("input").removeAttribute("checked");
    }
  });
});

// ====|functions
function changePlan() {
  currentStep = 2;
  main();
}

function main() {
  // this function will remove the active classes from all elements
  // then the next process will add the active class to the targeted element
  removeActivation();
  // this condition will active the last step number [4] even we completed the [5] step
  if (currentStep >= stepNumber.length) {
    stepNumber[stepNumber.length - 1].classList.add("active-step-number");
  } else {
    stepNumber[currentStep - 1].classList.add("active-step-number");
  }
  stepSection[currentStep - 1].classList.add("active-step");

  // confirm the excution of the back button function
  if (currentStep > 1 && currentStep <= stepsCount - 1) {
    backBtn.style.visibility = "visible";
  } else {
    backBtn.style.visibility = "hidden";
  }
}

function removeActivation() {
  stepNumber.forEach((step) => {
    step.classList.remove("active-step-number");
  });
  stepSection.forEach((step) => {
    step.classList.remove("active-step");
  });
  if (currentStep == stepsCount - 1) {
    nextBtn.innerText = "Confirm";
  } else if (currentStep == stepsCount) {
    nextBtn.style.display = "none";
  }
}

// ====| next button function
function nextStep() {
  const value = (currentValue) => currentValue == "true";
  arr = [];
  inputs.forEach((input) => {
    arr.push(input.getAttribute("data-validation"));
  });
  if (arr.every(value)) {
    conf = true;
    if (currentStep <= stepsCount - 1) {
      currentStep++;
      main();
    } else {
      // if the currentStep larger than stepsCount stop the nextStep function
      return false;
    }
  } else {
    conf = false;
    validator();
  }
  // if (conf) {
  //   // validator();
  //   if (currentStep <= stepsCount - 1) {
  //     currentStep++;
  //     main();
  //   } else {
  //     // if the currentStep larger than stepsCount stop the nextStep function
  //     return false;
  //   }
  // } else {
  //   validator();
  //   // return false;
  // }
}
// ====| back button function
function backStep() {
  if (currentStep > 1) {
    currentStep--;
    // backBtn.style.visibility = "visible";
    main();
  } else {
    // if the currentStep larger than stepsCount stop the nextStep function
    return false;
  }
}

function stepNumberSwitch() {
  if (conf) {
    console.log(this.querySelector(".step-number").textContent);
    currentStep = this.querySelector(".step-number").textContent;
    main();
  }
}

/* =====[VALIDATOR]===== */

console.log(nextBtn);

// EVENTS

// FUNCTIONS
function validator() {
  let namValue = nam.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();
  console.log(namValue);
  // name
  if (namValue === "") {
    setError(nam, "your name is empty");
  } else {
    setSuccess(nam);
  }

  // email
  if (emailValue === "") {
    setError(email, "your email is empty");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "email format error");
  } else {
    setSuccess(email);
  }
  if (phoneValue === "") {
    setError(phone, "your number is empty");
  } else {
    setSuccess(phone);
  }
}

/////////// confirmation
// set error
let setError = (element, message) => {
  let inputWarning = element.previousElementSibling;
  let warningElement = inputWarning.querySelector(".warning");
  warningElement.textContent = message;
  warningElement.classList.add("active-warning");
  warningElement.classList.remove("disabled");
  element.setAttribute("data-validation", "false");
};

// set success
let setSuccess = (element) => {
  // conf = true;
  let inputWarning = element.parentElement;
  let warningElement = inputWarning.querySelector(".warning");
  warningElement.textContent = "";
  warningElement.classList.add("disabled");
  element.setAttribute("data-validation", "true");
};

// set email validation
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}

/////// confirm conf = true or false;
// const value = (currentValue) => currentValue == "true";

// let arr2 = [];
// nextBtn.addEventListener("click", (btn) => {
//   arr2 = [];
//   inputs.forEach((input) => {
//     arr2.push(input.getAttribute("data-validation"));
//   });
//   if (arr2.every(value)) {
//     conf = true;
//     // arr2 = [];
//   } else {
//     conf = false;
//     // arr2 = [];
//   }
//   console.log(arr2);
//   console.log(arr2.every(value));
// });
