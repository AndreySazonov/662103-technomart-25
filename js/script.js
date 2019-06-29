var mapInfoButton = document.querySelector('.map-info');
var mapModalWindow = document.querySelector('.modal-map');
var mapCloseButton = document.querySelector('.modal-close-map');
var writeUsButton = document.querySelector('.write-us-button');
var writeUsModal = document.querySelector('.modal-write-us');
var writeUsCloseButton = document.querySelector('.modal-close-write');
var buyButtons = document.querySelectorAll('.buy');
var addedModal = document.querySelector('.modal-added-to-cart');
var addedCloseButton = document.querySelector('.modal-close-buy');

if (mapInfoButton) {
  mapInfoButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModalWindow.classList.add('modal-map-active');
  })
}

if (mapCloseButton) {
  mapCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModalWindow.classList.remove('modal-map-active');
  })
}

if (writeUsButton) {
  writeUsButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUsModal.classList.add('modal-write-us-active');
  })
}

if (writeUsCloseButton) {
  writeUsCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal-write-us-active');
  })
}

if (buyButtons) {
  Array.prototype.forEach.call(buyButtons, function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      addedModal.classList.add('modal-added-to-cart-active');
    })
  })
}

if (addedCloseButton) {
  addedCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    addedModal.classList.remove('modal-added-to-cart-active');
  })
}
