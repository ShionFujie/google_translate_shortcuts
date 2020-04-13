document.onkeydown = ({ code }) => {
  if (location.pathname != "/") return;
  console.log(code);
};
