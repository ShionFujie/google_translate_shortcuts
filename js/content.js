document.onkeydown = event => {
  if (location.pathname != "/") return;

  const { code, shiftKey } = event;
  if (code == "Digit1" && shiftKey) {
    swapLanguages();
    event.preventDefault();
  } else if (code == "Slash" && !shiftKey) {
    focusCapitalInput();
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

function focusCapitalInput() {
  document.getElementById("source").focus();
}

function SimulatedMouseEvent(type) {
  return new MouseEvent(type, { bubbles: true, cancelable: false });
}
