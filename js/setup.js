'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  var anotheWizards = {
    name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomElement(WIZARD_SURNAMES)],
    coatColor: COAT_COLOR[getRandomElement(COAT_COLOR)],
    eyesColor: EYES_COLORS[getRandomElement(EYES_COLORS)]
  };
  wizards.push(anotheWizards);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
wizards.forEach(function (j) {
  fragment.appendChild(renderWizard(j));
});

similarListElement.appendChild(fragment);

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var setupColorCoat = setupWizard.querySelector('.wizard-coat');
var setupColorEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupColorCoatInput = document.querySelector('input[name="coat-color"]');
var setupColorEyesInput = document.querySelector('input[name="eyes-color"]');
var setupFireballWrapInput = document.querySelector('input[name="fireball-color"]');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupColorCoat.addEventListener('click', function () {
  var randomColorCoat = COAT_COLOR[getRandomElement(COAT_COLOR)];
  setupColorCoat.style.fill = randomColorCoat;
  setupColorCoatInput.value = randomColorCoat;
});

setupColorEyes.addEventListener('click', function () {
  var randomColorEyes = EYES_COLORS[getRandomElement(EYES_COLORS)];
  setupColorEyes.style.fill = randomColorEyes;
  setupColorEyesInput.value = randomColorEyes;
});

setupFireballWrap.addEventListener('click', function () {
  var randomFireballColor = FIREBALL_COLOR[getRandomElement(FIREBALL_COLOR)];
  setupFireballWrap.style.backgroundColor = randomFireballColor;
  setupFireballWrapInput.value = randomFireballColor;
});
