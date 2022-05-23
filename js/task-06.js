const textInput = document.querySelector('#validation-input');
const lengthInput = document.querySelector('input[data-length="6"]');
const focusInput = Number(lengthInput.dataset.length);

textInput.addEventListener('blur', () => {
if (textInput.value.length === focusInput) {
textInput.classList.remove('invalid');
textInput.classList.add('valid');
} else {
textInput.classList.remove('valid');
textInput.classList.add('invalid');
};
})