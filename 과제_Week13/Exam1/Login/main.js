const form = document.querySelector(".login-form");
const idbox = document.getElementById("idbox");
const passwordbox = document.getElementById("passwordbox");
const message = document.querySelector(".message");
const loginbtn = document.querySelector(".login-btn");

let reg = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,20}$/;

idbox.addEventListener("input", stateHandler());

passwordbox.addEventListener("input", () => {
  if (!reg.test(passwordbox.value)) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  stateHandler();
});

loginbtn.addEventListener("click", () => {
  let userid = idbox.value;
  alert(`${userid}님 로그인을 축하드립니다.`);
});

function stateHandler() {
  if (idbox.value && passwordbox.value && reg.test(passwordbox.value)) {
    loginbtn.disabled = false;
    loginbtn.classList.add("active");
  } else {
    loginbtn.disabled = true;
    loginbtn.classList.remove("active");
  }
}
