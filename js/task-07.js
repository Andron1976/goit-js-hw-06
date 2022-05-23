const textChange = document.querySelector('#text');
const inputChange = document.querySelector('#font-size-control');

inputChange.addEventListener("input", event => {
textChange.style.fontSize = `${event.target.value}px`;
})