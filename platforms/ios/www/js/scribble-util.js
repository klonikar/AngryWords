var doDraw = false;
var mainCanvas, canvasContext;
var xCoords = new Array();
var yCoords = new Array();
var colour = new Array();
var isMouseDownEvent = new Array();
var lineWidth = new Array();

//Attach the mouse event handlers to the canvas after the window loads
window.onload = function () {

    //Get canvas element
    mainCanvas = document.getElementById('mainCanvas');
    if (!mainCanvas) {
        alert('No canvas found !');
        return;
    }

    //Check for canvas support
    if (!mainCanvas.getContext) {
        alert('Sorry, your browser does not support the canvas element :(');
        return;
    }

    //Get canvas context
    canvasContext = mainCanvas.getContext('2d');

    //Attach the event handlers
    mainCanvas.addEventListener('mousemove', mainCanvas_mouseMove, false);
    mainCanvas.addEventListener('mousedown', mainCanvas_mouseDown, false);
    mainCanvas.addEventListener('mouseup', mainCanvas_mouseUp, false);

    mainCanvas.addEventListener('touchstart', mainCanvas_mouseDown, false);
    mainCanvas.addEventListener('touchmove', mainCanvas_mouseMove, false);
    mainCanvas.addEventListener('touchend', mainCanvas_mouseUp, false);
    btnClear_onClick();
}

function postButtonHandler() {
    var val = document.getElementById("correction").value;
    if(!val || val.length != 1) {
        alert("Enter only one character");
        return false;
    }
    var imageData = {pixels: getBoxes(), value: val};
    var imageDataStr = JSON.stringify(imageData);
    invokePostAPI("/v1/rest/trainDigits/", imageDataStr, true, function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("updateStatus").innerHTML = this.responseText;
        }
        else if(this.readyState == 4){
            document.getElementById("updateStatus").innerHTML = this.responseText;
            alert("Error in updating DB. please retry.");
        }
    });
    return false;
}

function postCorrectedAnswer(e) {
    var e = e || event;
    if(!e.which && e.keyCode)
        e.which = e.keyCode;
    if(e.which != 13)
        return;

    return postButtonHandler();
}

function drawGrid(gridColor) {
    // Draw grid 20x20
    var numBoxes = 20; 
    var boxHeight = mainCanvas.height/numBoxes, boxWidth = mainCanvas.width/numBoxes;
    var ss = canvasContext.strokeStyle, lw = canvasContext.lineWidth;
    //Stroke properties
    canvasContext.strokeStyle = gridColor;
    canvasContext.lineWidth = 1;
    canvasContext.lineCap = 'round';
    canvasContext.lineJoin = 'round';
    for (i = 0; i < numBoxes; i++) {

        canvasContext.beginPath();
        canvasContext.moveTo(0, i*boxHeight);
        canvasContext.lineTo(mainCanvas.width, i*boxHeight);
        canvasContext.closePath();
        canvasContext.stroke();
    }
    for (i = 0; i < numBoxes; i++) {

        canvasContext.beginPath();
        canvasContext.moveTo(i*boxWidth, 0);
        canvasContext.lineTo(i*boxWidth, mainCanvas.height);
        canvasContext.closePath();
        canvasContext.stroke();
    }
    canvasContext.strokeStyle = ss;
    canvasContext.lineWidth = lw;
}

//Start drawing when a mouse button is pressed
function mainCanvas_mouseDown(args) {
    var evt = args || event;
    var mainCanvasPosition = mainCanvas.getBoundingClientRect();
    var x = (isAndroidBrowser() ? (evt.targetTouches[0].pageX - mainCanvasPosition.left - window.scrollX) : evt.layerX);
    var y = (isAndroidBrowser() ? (evt.targetTouches[0].pageY - mainCanvasPosition.top - window.scrollY) : evt.layerY);
    xCoords.push(x);
    yCoords.push(y);
    colour.push(canvasContext.strokeStyle);
    lineWidth.push(canvasContext.lineWidth);
    isMouseDownEvent.push(true);
    doDraw = true;
    //alert("mouse down handler: " + evt.type);
}

//The event handler that does the actual drawing
function mainCanvas_mouseMove(args) {
    var evt = args || event;
    if (doDraw) {
        var mainCanvasPosition = mainCanvas.getBoundingClientRect();
        var x = (isAndroidBrowser() ? (evt.targetTouches[0].pageX - mainCanvasPosition.left - window.scrollX) : evt.layerX);
        var y = (isAndroidBrowser() ? (evt.targetTouches[0].pageY - mainCanvasPosition.top - window.scrollY) : evt.layerY);
        xCoords.push(x);
        yCoords.push(y);
        colour.push(canvasContext.strokeStyle);
        lineWidth.push(canvasContext.lineWidth);
        isMouseDownEvent.push(false);
        redraw(canvasContext);
        //evt.stopPropagation();
        evt.preventDefault();
    }
    //alert("mousemove handler: " + evt.type);
}

//Stop drawing when the mouse is released
function mainCanvas_mouseUp(args) {
    doDraw = false;
    //var evt = args || event;
    //alert("mouse up handler: " + evt.type);
}

//Do the actual drawing
function redraw(ctx) {
    for (i = 0; i < xCoords.length; i++) {

        ctx.beginPath();
        if (!i || isMouseDownEvent[i]) {
            ctx.moveTo(xCoords[i], yCoords[i]);
        }
        else {
            ctx.moveTo(xCoords[i - 1], yCoords[i - 1]);
        }

        ctx.lineTo(xCoords[i], yCoords[i]);

        ctx.closePath();

        //Stroke properties
        ctx.strokeStyle = colour[i];
        ctx.lineWidth = lineWidth[i];
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
    }

}

//Change the drawing colour
function ddlColour_onChange() {

    var ddlColour = document.getElementById('ddlColour');
    canvasContext.strokeStyle = ddlColour.options[ddlColour.selectedIndex].value;
}

//Change the line width
function ddlLineWidth_onChange() {

    var ddlLineWidth = document.getElementById('ddlLineWidth');
    canvasContext.lineWidth = ddlLineWidth.options[ddlLineWidth.selectedIndex].value;
}

//Clear canvas
function btnClear_onClick() {
    xCoords = new Array();
    yCoords = new Array();
    colour = new Array();
    isMouseDownEvent = new Array();
    lineWidth = new Array();

    mainCanvas.width = mainCanvas.width;
    drawGrid("#EEEEEE");

    ddlColour_onChange();
    ddlLineWidth_onChange();
}

function getBoxes() {
    var numBoxes = 20; 
    var boxHeight = mainCanvas.height/numBoxes, boxWidth = mainCanvas.width/numBoxes;
    var imgData = canvasContext.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
    var boxes = [];
    for (var i=0;i<imgData.data.length;i+=4)
    {
        var pixelIndex = i/4;
        var pixelX = parseInt(pixelIndex % mainCanvas.width), pixelY = parseInt(pixelIndex/mainCanvas.width);
        var boxX = parseInt(pixelX/boxWidth), boxY = parseInt(pixelY/boxHeight), boxIndex = (boxY*numBoxes) + boxX;
        var r = imgData.data[i];
        var g = imgData.data[i+1];
        var b = imgData.data[i+2];
        var a = imgData.data[i+3];
        //var p = (r << 24) | (g << 16) | (b << 8) | (a);
        var p = r|g|b|a; // take the pixel as non-zero if any color or alpha are non-zero.
        if(boxes[boxIndex] == undefined)
            boxes[boxIndex] = 0;
        boxes[boxIndex] += (p != 0 ? 0.01 : 0);
    }
    console.log(boxes);
    return boxes;
}
