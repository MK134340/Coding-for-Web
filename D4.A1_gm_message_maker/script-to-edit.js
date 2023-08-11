// Your JavaScript goes here
// ... (previous code) ...

function chooseImage() {
  let choice = document.getElementById("choice").value;
  let displayimgcon = document.getElementById("selectedImage");
  displayimgcon.src = choice;
}

function outputText() {
  var primaryTitle = document.getElementById("primaryTitle").value;
  var secondaryTitle = document.getElementById("secondaryTitle").value;

  var text1 = document.getElementById("text-1");
  var text2 = document.getElementById("text-2");

  text1.textContent = primaryTitle;
  text2.textContent = secondaryTitle;
}

function changeFont() {
  var fontFamily = document.querySelector(
    'input[name="fontFamily"]:checked'
  ).value;
  var text1 = document.getElementById("text-1");
  var text2 = document.getElementById("text-2");

  text1.style.fontFamily = fontFamily;
  text2.style.fontFamily = fontFamily;
}

function changeFontColor() {
  var fontColor = document.getElementById("fontColor").value;
  var text1 = document.getElementById("text-1");
  var text2 = document.getElementById("text-2");

  text1.style.color = fontColor;
  text2.style.color = fontColor;
}

function changeFontSize() {
  var fontSize = document.getElementById("fontSize").value + "px";
  var text1 = document.getElementById("text-1");
  var text2 = document.getElementById("text-2");

  text1.style.fontSize = fontSize;
  text2.style.fontSize = fontSize;

  document.getElementById("fontSizeValue").textContent = fontSize;
}

function changeTextStroke() {
  var textStroke = document.getElementById("textStroke").value + "px";
  var text1 = document.getElementById("text-1");
  var text2 = document.getElementById("text-2");

  text1.style.webkitTextStrokeWidth = textStroke;
  text2.style.webkitTextStrokeWidth = textStroke;
}

function saveImage() {
  // Use a library like html2canvas to capture the content of the output-canvas
  // and save it as an image.
}

// ... (rest of the code) ...
