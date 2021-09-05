'use strict';

const serverURL = 'https://api.funtranslations.com/translate/quenya.json';

const txtInput = document.querySelector('#txt-input');
const btnTranslate = document.querySelector('#btn-translate');
const divOutput = document.querySelector('#div-output');

const buildURL = text => serverURL + '?text=' + text;

const errorHandler = error => {
  console.log('An Error Occured! Error:', error);
  alert('An error has occured! Please try again after some time.');
};

const doFetch = text => {
  fetch(buildURL(text))
    .then(response => response.json())
    .then(json => {
      divOutput.innerText = json.contents.translated;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener('click', () => {
  const inputText = txtInput.value;
  doFetch(inputText);
});
