const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const slow = document.querySelector("#slow");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && slow.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (slow === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      slow.checked = false;
    }
  }
}
