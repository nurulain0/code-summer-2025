let display = document.getElementById("display");
const beep = document.getElementById("beepSound");

function playBeep() {
  beep.currentTime = 0;
  beep.play();
}

function press(value) {
  playBeep();
  display.value += value;
}

function clearDisplay() {
  playBeep();
  display.value = "";
}

function calculate() {
  playBeep();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "ERROR";
  }
}
