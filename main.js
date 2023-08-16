// ************VARIABLES************

const offerList = document.querySelector('.offer-list');
const offerItems = document.querySelectorAll('.offer-item');

// ************FUNCTIONS************

const showOffers = () => {
  offerItems.forEach((offerItem) => {
    offerItem.classList.toggle('offer-item-active');
  });
};

// ************LISTENERS************

offerList.addEventListener('click', showOffers);
