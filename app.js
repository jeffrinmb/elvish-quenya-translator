'use strict';

const serverURL = 'https://api.funtranslations.com/translate/quenya.json';

const txtInput = document.querySelector('#txt-input');
const btnTranslate = document.querySelector('#btn-translate');
const divOutput = document.querySelector('#div-output');

const buildURL = text => serverURL + '?text=' + text;

const errorHandler = errorDetails => {
  console.log(
    'An Error Occured! Error Code:',
    errorDetails.code,
    'Error Message:',
    errorDetails.message
  );
  alert('An error has occured! Please try again after some time.');
};

const doFetch = text => {
  fetch(buildURL(text))
    .then(response => response.json())
    .then(json => {
      if (json.contents) {
        divOutput.innerText = json.contents.translated;
      } else if (json.error) {
        throw json.error;
      }
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener('click', () => {
  const inputText = txtInput.value;
  doFetch(inputText);
});
