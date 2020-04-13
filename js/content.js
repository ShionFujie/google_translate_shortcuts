document.onkeydown = event => {
  if (location.pathname != "/") return;

  const { code, shiftKey } = event;
  if (shiftKey && code == "Digit1") {
    swapLanguages();
    event.preventDefault();
  }
};

function swapLanguages() {
  const swapButton = document.querySelector(".swap");
  swapButton.dispatchEvent(SimulatedMouseEvent("mouseover"));
  swapButton.dispatchEvent(SimulatedMouseEvent("mousedown"));
  swapButton.dispatchEvent(SimulatedMouseEvent("mouseup"));
  swapButton.dispatchEvent(SimulatedMouseEvent("mouseout"));
}

function SimulatedMouseEvent(name) {
  const event = document.createEvent("MouseEvents");
  event.initEvent(name, true, false);
  return event;
}
