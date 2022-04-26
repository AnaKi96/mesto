let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupExitButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let popupFieldName = popup.querySelector('.popup__field_name');
let popupFieldDescription = popup.querySelector('.popup__field_description');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');

let popupToggle = function() {
  popup.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', popupToggle);
popupExitButton.addEventListener('click', popupToggle);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupFieldName.value;
  profileDescription.textContent = popupFieldDescription.value;
  popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);