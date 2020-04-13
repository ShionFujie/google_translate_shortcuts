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

  const mouseoverE = document.createEvent("MouseEvents");
  mouseoverE.initEvent("mouseover", true, false);
  b.dispatchEvent(mouseoverE);

  const mousedonwE = document.createEvent("MouseEvents");
  mousedonwE.initEvent("mousedown", true, false);
  b.dispatchEvent(mousedonwE);

  const mouseupE = document.createEvent("MouseEvents");
  mouseupE.initEvent("mouseup", true, false);
  b.dispatchEvent(mouseupE);

  const mouseoutE = document.createEvent("MouseEvents");
  mouseoutE.initEvent("mouseout", true, false);
  b.dispatchEvent(mouseoutE);
}
