// ************VARIABLES************

const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('.btn-search');
const burgerIcon = document.querySelector('.navbar-toggler span');
const burgerList = document.querySelector('.hidden-list');
const spanYear = document.querySelector('.current-year span');
const burgerLinks = document.querySelectorAll('.burger-nav-link');
const container = document.querySelector('#container');
const buttonMore = document.querySelector('.btn-more');

const API_KEY = '36233552-776e28d27d3c6ccbd0cd51246';
let page = 1;

// ************FUNCTIONS************

const showSearchInput = (e) => {
  c;
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

const loadImages = (page) => {
  fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=garden%20design&image_type=photo&per_page=20&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      createImageCards(data);
    });
};

const createImageCards = (data) => {
  let imagesLoaded = 0;

  for (let i = 0; i < data.hits.length; i++) {
    let div = document.createElement('div');
    div.className = 'grid-item';

    let img = document.createElement('img');
    img.src = data.hits[i].webformatURL;
    img.alt = data.hits[i].tags;
    img.onload = () => {
      imagesLoaded++;

      if (imagesLoaded === data.hits.length) {
        initMasonry();
      }
    };

    div.appendChild(img);
    container.appendChild(div);
  }
};

const initMasonry = () => {
  const masonry = new Masonry(container, {
    itemSelector: '.grid-item',
    gutter: 10,
  });
};

loadImages();

buttonMore.addEventListener('click', () => {
  console.log('first');
  page++;
  loadImages(page);
});

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
