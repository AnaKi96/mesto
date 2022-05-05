const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupExitButton = popup.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const popupFieldName = popup.querySelector('.popup__field_name');
const popupFieldDescription = popup.querySelector('.popup__field_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function popupToggle() {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {
    popupFieldName.value = profileName.textContent;
    popupFieldDescription.value = profileDescription.textContent;
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupFieldName.value;
  profileDescription.textContent = popupFieldDescription.value;
  popupToggle();
}

profileEditButton.addEventListener('click', popupToggle);
popupExitButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler); 