
const affichage_pre = document.querySelector(".affichage-1");
const affichage_sec = document.querySelector(".affichage-2");
const temp_results = document.querySelector(".resultas-temp");
const nums = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operation");
const egal = document.querySelector(".equal");
const clearC = document.querySelector(".clear");
const clearCE = document.querySelector(".last-entite-clear");
let nombre1 = "";
let nombre2 = "";
let result = null;
let derniereOperation = "";
let virgul = false;

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !virgul) {
      virgul = true;
    } else if (e.target.innerText === "." && virgul) {
      return;
    }
    nombre2 += e.target.innerText;
    affichage_sec.innerText = nombre2;
    // console.log();
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!nombre2) return;
    virgul = false;
    const operationName = e.target.innerText;
    if (nombre1 && nombre2 && derniereOperation) {
      mathoperation();
    } else {
      result = parseFloat(nombre2);
    }
    clearVar(operationName);
    derniereOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  nombre1 += nombre2 + " " + name + " ";
  affichage_pre.innerText = nombre1;
  affichage_sec.innerText = "";
  nombre2 = "";
  temp_results.innerText = result;
}

function mathoperation() {
  if (derniereOperation === "X") {
    result = parseFloat(result) * parseFloat(nombre2);
  } else if (derniereOperation === "+") {
    result = parseFloat(result) + parseFloat(nombre2);
  } else if (derniereOperation === "-") {
    result = parseFloat(result) - parseFloat(nombre2);
  } else if (derniereOperation === "/") {
    result = parseFloat(result) / parseFloat(nombre2);
  } else if (derniereOperation === "%") {
    result = parseFloat(result) % parseFloat(nombre2);
  }
}
// operation();

egal.addEventListener("click", () => {
  if (!nombre2 || !nombre1) return;
  virgul = false;
  mathoperation();
  clearVar();
  affichage_sec.innerText = result;
  temp_results.innerText = "";
  nombre2 = result;
  nombre1 = "";
});

clearC.addEventListener("click", () => {
  nombre1 = "";
  nombre2 = "";
  affichage_pre.innerText = "";
  affichage_sec.innerText = "";
  result = "";
  temp_results.innerText = "";
});

clearCE.addEventListener("click", () => {
  affichage_sec.innerText = "";
  nombre2 = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
    // console.log(e.key)
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickoperation(e.key);
  } else if (e.key === "*") {
    clickoperation("x");
    // console.log(e.key)
  } else if (e.key == "Enter" || e.key === "=") {
    clickequal();
  }
  // console.log(e.key)
});
function clickButtonEl(key) {
  nums.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickoperation(key) {
  operations.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickequal() {
  egal.click();
}
