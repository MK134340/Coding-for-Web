let div1Visible = false;

function showDiv() {
  const div1 = document.getElementById("div1");

  if (!div1Visible) {
    div1.style.visibility = "visible";
    div1Visible = true;
  } else {
    div1.style.visibility = "hidden";
    div1Visible = false;
  }
}

let div2Visible = false;

function showDiv2() {
  const div2 = document.getElementById("div2");

  if (!div2Visible) {
    div2.style.visibility = "visible";
    div2Visible = true;
  } else {
    div2.style.visibility = "hidden";
    div2Visible = false;
  }
}

let divsVisible = false;

function showDivs() {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");

  if (!divsVisible) {
    div1.style.visibility = "visible";
    div2.style.visibility = "visible";
    divsVisible = true;
  } else {
    div1.style.visibility = "hidden";
    div2.style.visibility = "hidden";
    divsVisible = false;
  }
}
