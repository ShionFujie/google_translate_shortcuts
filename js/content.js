document.onkeydown = event => {
  if (location.pathname != "/") return;

  const { code, shiftKey } = event;
  if (shiftKey && code == "Digit1") {
    swapLanguages();
    event.preventDefault();
  }
};

function swapLanguages() {
  const b = document.querySelector(".swap");
  b.dispatchEvent(SimulatedMouseEvent('mouseover'));
  b.dispatchEvent(SimulatedMouseEvent('mousedown'));
  b.dispatchEvent(SimulatedMouseEvent('mouseup'));
  b.dispatchEvent(SimulatedMouseEvent('mouseout'));
}

function SimulatedMouseEvent(name) {
  const event = document.createEvent("MouseEvents")
  event.initEvent(name, true,false)
  return event
}
