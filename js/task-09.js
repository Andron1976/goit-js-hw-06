function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorChangeBtn = document.querySelector('.change-color');
const colorTextSpan = document.querySelector('.color');
const colorChangeBody = document.querySelector('body');

colorChangeBtn.addEventListener("click", () => {
   colorChangeBody.style.backgroundColor = `${getRandomHexColor()}`;
   colorTextSpan.textContent = `${colorChangeBody.style.backgroundColor}`;
})