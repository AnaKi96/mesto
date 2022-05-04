const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupExitButton = popup.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const popupFieldName = popup.querySelector('.popup__field_name');
const popupFieldDescription = popup.querySelector('.popup__field_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function closePopup(popupExitButton) {
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  profileName.textContent = popupFieldName.value;
  profileDescription.textContent = popupFieldDescription.value;
  popup.classList.add('popup_opened');
})

popupExitButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  closePopup();
})

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupFieldName.value;
  profileDescription.textContent = popupFieldDescription.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);