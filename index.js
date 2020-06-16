function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.currentTarget.style.backgroundColor = "yellow";
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const elDraggable = document.getElementById(id);
  const elDropzone = event.target;

  elDropzone.appendChild(elDraggable);

  event.dataTransfer.clearData();
}
