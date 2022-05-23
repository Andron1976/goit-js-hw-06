
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const freeCell = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map((el) => {
  const createEl = document.createElement('li');
  createEl.className = 'item';
  createEl.textContent = el;

  return createEl;
})

freeCell.append(...ingredientsEl);
console.log(ingredientsEl);