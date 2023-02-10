let stepSection = document.querySelectorAll(".right");
let stepNumber = document.querySelectorAll(".step-number");
let nextBtn = document.querySelector(".next-btn");
let backBtn = document.querySelector(".back-btn");
let planBox = document.querySelectorAll(".plan");
let pickBox = document.querySelectorAll(".pick");
let pickCheck = document.querySelectorAll(".pick input");

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
function main() {
  removeActivation();
  if (currentStep > stepNumber.length - 1) {
    stepNumber[stepNumber.length - 1].classList.add("active-step-number");
  } else {
    stepNumber[currentStep - 1].classList.add("active-step-number");
  }
  stepSection[currentStep - 1].classList.add("active-step");

  // confirm the excution of the back button function
  if (currentStep > 1 && currentStep <= stepsCount - 1) {
    backBtn.style.visibility = "visible";
    console.log(currentStep);
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

document.addEventListener("load", () => {});
