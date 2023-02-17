//

let item_1 = document.getElementById("item-1");
let item_2 = document.getElementById("item-2");
let item_3 = document.getElementById("item-3");

let big = document.getElementById("big");

item_1.onclick = active;
item_2.onclick = active;
item_3.onclick = active;

item_1.addEventListener("click", toggle);
item_2.addEventListener("click", toggle);
item_3.addEventListener("click", toggle);

function active() {
  item_1.classList.remove("active");
  item_2.classList.remove("active");
  item_3.classList.remove("active");
  this.classList.toggle("active");
}

function toggle() {
  let src = this.firstElementChild.firstElementChild.src;
  let text = this.lastElementChild.innerHTML;

  big.style.backgroundImage = `url(${src})`;
  big.firstElementChild.innerHTML = text;
}
