let btn = document.getElementById("btn-footer");
console.log(btn);
let scrollTop = () => {
  window.scrollTo(0, 0);
};

btn.addEventListener("click", scrollTop);
