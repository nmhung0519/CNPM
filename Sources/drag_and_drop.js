// --------- Handlers for 'Dragged Element' ------------------
function dragstartHandler(evt) {
    evt.dataTransfer.setData("MyDraggedElementId", evt.target.id);
}

// dragging ...
function dragHandler(evt) {
    console.log("The p element is being dragged");
    evt.target.style.display = 'none';
}


// --------- Handlers for 'Drop Target' ------------------

function ondragenterHandler(evt)  {
    console.log("The p element enter drop-target");
    evt.target.style.background = 'yellow';
}

// When 'over' you can 'release mouse' to 'drop'.
function dragoverHandler(evt) {
    evt.preventDefault(); // Important!!
    console.log("The p element over drop-target");
    evt.target.style.background = 'green';
}

function ondragleaveHandler(evt) {
    evt.preventDefault();
    console.log("The p element leave drop-target");
    evt.target.style.background = "blue";
}
function dropHandler(evt) {
    evt.preventDefault(); // Important!!
    var elementId = evt.dataTransfer.getData("MyDraggedElementId");
    document.getElementById(elementId).style.top = "15px";
    document.getElementById(elementId).style.left = "1px";
    document.getElementById(elementId).draggable = false;
    evt.target.appendChild(document.getElementById(elementId));
    console.log("The p element was dropped");
}

function dragleaveHandler(evt) {
    evt.preventDefault();
    evt.target.style.background = "white";
}

function ondragendHandler(evt) {
    evt.target.style.display = 'block';
}
