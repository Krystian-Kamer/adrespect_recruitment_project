// ************VARIABLES************
const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('.btn-search');

// ************FUNCTIONS************




const showSearchInput = (e) => {
  e.preventDefault()
  if (searchInput.classList.contains('d-none')) {
    searchInput.classList.remove('d-none');
    searchInput.classList.add('d-flex');
  } else if (searchInput.classList.contains('d-flex')) {
    searchInput.classList.remove('d-flex');
    searchInput.classList.add('d-none');
  }
  searchInput.value = '';
};

// ************LISTENERS************

searchBtn.addEventListener('click', showSearchInput);
