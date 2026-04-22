const slider = document.querySelector('.slider-range');
const after = document.querySelector('.after');

if (slider) {
  slider.addEventListener('input', (e) => {
    after.style.width = e.target.value + "%";
  });
}
