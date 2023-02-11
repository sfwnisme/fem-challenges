"use strict";

let stepSection = document.querySelectorAll(".right");
let stepNumberContainer = document.querySelectorAll(".step");
let stepNumber = document.querySelectorAll(".step-number");
let nextBtn = document.querySelector(".next-btn");
let backBtn = document.querySelector(".back-btn");
let planBox = document.querySelectorAll(".plans .plan");
let pickBox = document.querySelectorAll(".pick");
let pickCheck = document.querySelectorAll(".pick input");
let change = document.querySelector("button.change");

console.log(backBtn);

// ====| step section
let currentStep = 1;
let stepsArray = Array.from(stepSection);
let stepsCount = Array.from(stepSection).length;
console.log(stepsArray);

// ====| Display Functions
main();

// ====| Next Event
nextBtn.addEventListener("click", nextStep);
backBtn.addEventListener("click", backStep);
// change button
change.addEventListener("click", changePlan);
stepNumberContainer.forEach((step) => {
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
  if (currentStep <= stepsCount - 1) {
    currentStep++;
    main();
  } else {
    // if the currentStep larger than stepsCount stop the nextStep function
    return false;
  }
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
  console.log(this.querySelector('.step-number').textContent);
  currentStep = this.querySelector('.step-number').textContent;
  main();
}
