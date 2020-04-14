function emulateMouseDownUpAt(elem) {
  elem.dispatchEvent(SimulatedMouseEvent("mouseover"));
  elem.dispatchEvent(SimulatedMouseEvent("mousedown"));
  elem.dispatchEvent(SimulatedMouseEvent("mouseup"));
  elem.dispatchEvent(SimulatedMouseEvent("mouseout"));
}

function SimulatedMouseEvent(type) {
  return new MouseEvent(type, { bubbles: true, cancelable: false });
}