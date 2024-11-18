const boxsEl = document.querySelector('.card');
const IS_HIDDEN = 'js-hidden';

boxsEl.addEventListener('click', hiddenBox);

function hiddenBox(event) {
  event.target.classList.contains('card__list')
    ? event.target.classList.add(IS_HIDDEN)
    : event.target;
}
