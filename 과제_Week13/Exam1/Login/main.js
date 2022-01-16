const form = document.querySelector(".login-form");
const idbox = document.getElementById("idbox");
const passwordbox = document.getElementById("passwordbox");
const message = document.querySelector(".message");
const loginbtn = document.querySelector(".login-btn");

idbox.addEventListener("input", stateHandler());

passwordbox.addEventListener("input", () => {
  let reg = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,20}$/.test(passwordbox.value);
  stateHandler();

  if (!reg) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

loginbtn.addEventListener("click", () => {
  let userid = idbox.value;
  alert(`${userid}님 로그인을 축하드립니다.`);
});

function stateHandler() {
  if (!(idbox.value && passwordbox.value)) {
    loginbtn.disabled = true;
    loginbtn.classList.remove("active");
  } else {
    loginbtn.disabled = false;
    loginbtn.classList.add("active");
  }
}
