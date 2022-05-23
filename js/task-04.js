// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const spanValue = document.querySelector('#value');
let counterValue = 0;

const plusButton = document.querySelector('button[data-action="increment"]');
console.log(plusButton);
const plusClick = () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
  };
plusButton.addEventListener("click", plusClick);

const minusButton = document.querySelector('button[data-action="decrement"]');
const minusClick = () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
};
minusButton.addEventListener("click", minusClick);
