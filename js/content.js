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
  } else if (code == "Digit3" && shiftKey) {
    listenResult()
    event.preventDefault()
  }
};

function swapLanguages() {
  emulateMouseDownUpAt(document.querySelector(".swap"));
}

function focusCapitalInput() {
  document.getElementById("source").focus();
}

function listen() {
  emulateMouseDownUpAt(document.querySelector('.input [aria-label="Listen"]'));
}

function listenResult() {
  emulateMouseDownUpAt(document.querySelector('.results-container [aria-label="Listen"]'));
}
