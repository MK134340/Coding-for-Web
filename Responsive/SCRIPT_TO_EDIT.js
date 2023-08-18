function showDiv() {
  let thing = document.getElementById("box");

  if (thing.style.display !== "none") {
    thing.style.visibility = "block";
  } else {
    thing.style.visibility = "none";
  }
}
