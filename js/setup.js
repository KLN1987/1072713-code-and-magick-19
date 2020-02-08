'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

document.querySelector('.setup').classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

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
    coatColor: COLORS[getRandomElement(COLORS)],
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
document.querySelector('.setup-similar').classList.remove('hidden');


