const submit = document.querySelector("button");
const cart = document.querySelector(".cart");
const items = document.querySelector(".items");
const alarm = document.querySelector(".alarm-screen");
const button = document.createElement("button");
button.innerText = "Close";

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);

  if (event.target.parentNode === document.querySelector(".items"))
    event.currentTarget.style.backgroundColor = "yellow";
  else {
    event.currentTarget.style.backgroundColor = "#2ecc71";
  }
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const elDraggable = document.getElementById(id);
  const elDropzone = event.target;

  if (elDropzone === cart || elDropzone === items)
    elDropzone.appendChild(elDraggable);

  event.dataTransfer.clearData();
}

function handleSubmit() {
  const icons = cart.querySelectorAll(".item");
  alarm.classList.remove("hidden");

  icons.forEach(function (i) {
    if (i.id === "apple") {
      const apple = document.createElement("div");
      apple.innerText =
        "Apple: Do you like Iphone? but this is not Iphons'logo!!";
      alarm.appendChild(apple);
    } else if (i.id === "money") {
      const money = document.createElement("div");
      money.innerText =
        "Money: First, you should try to find  what is your goal. and do it steadily. then you will get much money";
      alarm.appendChild(money);
    } else if (i.id === "house") {
      const house = document.createElement("div");
      house.innerText = "House: House is very expensive";
      alarm.appendChild(house);
    } else {
      const icecream = document.createElement("div");
      icecream.innerText = "Ice cream: It's very delicious";
      alarm.appendChild(icecream);
    }
  });

  alarm.appendChild(button);
}

function handleCancle() {
  while (alarm.hasChildNodes()) {
    alarm.removeChild(alarm.firstChild);
  }
  alarm.classList.add("hidden");
}

function init() {
  submit.addEventListener("click", handleSubmit);
  button.addEventListener("click", handleCancle);
}

init();
