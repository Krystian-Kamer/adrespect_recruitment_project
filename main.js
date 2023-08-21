// ************VARIABLES************

const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('.btn-search');
const burgerIcon = document.querySelector('.navbar-toggler span');
const burgerList = document.querySelector('.hidden-list');
const spanYear = document.querySelector('.current-year span');
const burgerLinks = document.querySelectorAll('.burger-nav-link');

// ************FUNCTIONS************

const showSearchInput = (e) => {
  e.preventDefault();
  if (searchInput.classList.contains('d-none')) {
    searchInput.classList.remove('d-none');
    searchInput.classList.add('d-flex');
  } else if (searchInput.classList.contains('d-flex')) {
    searchInput.classList.remove('d-flex');
    searchInput.classList.add('d-none');
  }
  searchInput.value = '';
};

const handleItemList = () => {
  if (burgerIcon.classList.contains('navbar-toggler-icon')) {
    burgerIcon.classList.remove('navbar-toggler-icon');
    burgerIcon.classList.add('btn-close');
    burgerList.classList.remove('d-none');
    burgerList.classList.add('d-flex');
  } else if (burgerIcon.classList.contains('btn-close')) {
    closeBurgerList();
  }
};

const closeBurgerList = () => {
  burgerIcon.classList.remove('btn-close');
  burgerIcon.classList.add('navbar-toggler-icon');
  burgerList.classList.remove('d-flex');
  burgerList.classList.add('d-none');
};

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  spanYear.textContent = ` ${currentYear} `;
};
getCurrentYear();

// ************LISTENERS************

searchBtn.addEventListener('click', showSearchInput);
burgerIcon.addEventListener('click', handleItemList);
burgerLinks.forEach((burgerLink) => {
  burgerLink.addEventListener('click', closeBurgerList);
});
