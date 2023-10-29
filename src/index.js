import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createMarkupCat } from './js/markup';
import debounce from 'lodash.debounce';

const catInfo = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');
const errorMessage = document.querySelector('.error');
const loaderMessage = document.querySelector('.loader');
const loaderIcon = document.querySelector('.loader-icon');

const DEBOUNCE_DELAY = 300;

breedSelect.addEventListener('change', debounce(onInputSearch, DEBOUNCE_DELAY));

fetchBreeds()
  .then(array => {
    breedSelect.innerHTML = '<option value= "" selected disabled>Choose your cat</option> ';
    breedSelect.classList.toggle('is-hidden');
    loaderMessage.classList.add('is-hidden');
    loaderIcon.classList.add('is-hidden');
    return (breedSelect.innerHTML += createMarkup(array.data));
  })
  .catch(fetchError);

function onInputSearch(e) {
  e.preventDefault();

  catInfo.classList.add('is-hidden');
  load();

  const catID = e.target.value;

  fetchCatByBreed(catID)
    .then(obj => {
      catInfo.innerHTML = createMarkupCat(obj.data);
    })
    .then(() => fetchSuccess())
    .catch(fetchError);
};

function fetchError() {
  loaderMessage.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');
  loaderIcon.classList.add('is-hidden');
  errorMessage.classList.remove('is-hidden');
}
function fetchSuccess() {
  Notify.success('Success!', '');
  errorMessage.classList.add('is-hidden');

  catInfo.classList.remove('is-hidden');
  loaderMessage.classList.add('is-hidden');
  console.log('stop loading');
}
function load() {
  console.log('loading...');
  errorMessage.classList.add('is-hidden');
  loaderMessage.classList.remove('is-hidden');
}