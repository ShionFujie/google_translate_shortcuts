document.onkeydown = event => {
  if (location.pathname != "/") return;

  const { code, shiftKey } = event;
  if (code == "Digit1" && shiftKey) {
    swapLanguages();
    event.preventDefault();
  } else if (code == "Slash" && !shiftKey) {
    focusCapitalInput();
    event.preventDefault();
  } else if (code == "Digit2" && shiftKey) {
    listen();
    event.preventDefault();
  }
};

function swapLanguages() {
  emulateMouseDownUpAt(document.querySelector(".swap"));
}

function focusCapitalInput() {
  document.getElementById("source").focus();
}

function listen() {
  emulateMouseDownUpAt(document.querySelector('[aria-label="Listen"]'));
}
