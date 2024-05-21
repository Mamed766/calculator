const form = document.querySelector(".myForm");

const inp1 = document.querySelector(".inp1");
const inp2 = document.querySelector(".inp2");
const result = document.querySelector(".result");

const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const multiple = document.querySelector(".multiple");
const divide = document.querySelector(".divide");

function resetForm() {
  inp1.value = "";
  inp2.value = "";
}

function validateInputs() {
  if (inp1.value === "" || inp2.value === "") {
    alert("INPUTLAR BOSDUR!!");
    return false;
  }
  return true;
}

increase.addEventListener("click", function () {
  if (validateInputs()) {
    const sum = Number(inp1.value) + Number(inp2.value);
    result.value = sum;
    resetForm();
  }
});

decrease.addEventListener("click", function () {
  if (validateInputs()) {
    const sum = Number(inp1.value) - Number(inp2.value);
    result.value = sum;
    resetForm();
  }
});

multiple.addEventListener("click", function () {
  if (validateInputs()) {
    const sum = Number(inp1.value) * Number(inp2.value);
    result.value = sum;
    resetForm();
  }
});

divide.addEventListener("click", function () {
  if (validateInputs()) {
    const sum = Number(inp1.value) / Number(inp2.value);
    result.value = sum;
    if (Number(inp2.value) === 0) {
      alert("0-a bolme yoxdu!");
      result.value = "0-a bolme yoxdu!";
    }
    resetForm();
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
