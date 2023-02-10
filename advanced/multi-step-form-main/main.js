let planBox = document.querySelectorAll(".plan");
let pickBox = document.querySelectorAll(".pick");
let pickCheck = document.querySelectorAll(".pick input");

console.log(planBox);

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
      p.currentTarget.querySelector("input").checked = true;
    } else {
      p.currentTarget.querySelector("input").checked = false;
    }
  });
});
pickCheck.forEach((check) => {
  check.addEventListener("click", (ch) => {
    // ch.currentTarget.removeAttribute("checked");
    // ch.currentTarget.checked = !ch.currentTarget.checked;
    console.log("rvemo");
    let confirm = ch.currentTarget.parentElement.parentElement;
    console.log(confirm);
    if (confirm.classList.contains("active-pick")) {
      ch.currentTarget.checked = !ch.currentTarget.checked;
    } else {
      ch.currentTarget.checked;
    }
  });
  // check.stopPropagation();
  // check.preventDefault();
});
