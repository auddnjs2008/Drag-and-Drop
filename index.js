let dragged;
const item = document.querySelectorAll("#draggable");

function init() {
  item.forEach(function (i) {
    i.addEventListener("drag", function (event) {});
    i.addEventListener("dragstart", function (event) {
      dragged = event.target;
      event.target.style.opacity = 0.5;
    });

    i.addEventListener("dragend", function (event) {
      event.target.style.opacity = "";
    });

    i.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    i.addEventListener("dragenter", function (event) {
      if (event.target.className === " dropzone") {
        event.target.style.background = "purple";
      }
    });

    i.addEventListener("dragleave", function (evemt) {
      if ((event.target.className = "dropzone")) {
        event.target.style.background = "";
      }
    });
  });
}

init();
