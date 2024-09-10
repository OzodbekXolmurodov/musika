const heading = document.querySelector(".tatle");
const audeo = document.querySelector(".audeo");
const audeo2 = document.querySelector(".audeo-2");
const audeo3 = document.querySelector(".audeo-3");
console.log(audeo);
let offset = 0;
function inc() {
  if (offset === 1000) {
    audeo3.pause();
  }
  if (offset < 10) {
    offset++;
    audeo.play();
  } else if (offset < 100) {
    offset += 10;
    audeo.pause();
    audeo2.play();
  } else if (offset < 1000) {
    offset += 100;
    audeo2.pause();
    audeo3.play();
  } else {
    return null;
  }

  heading.innerHTML = offset;
}

function dec() {
  if (offset <= 0) {
    return null;
  }
  offset--;
  heading.innerHTML = offset;
}
