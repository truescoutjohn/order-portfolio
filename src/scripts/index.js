import '../index.scss';

function clickBurgerHandler() {
  [...document.querySelectorAll('.burger__line')].forEach(span => {
    span.classList.toggle('active');
  });
  document.querySelector('.burger-menu').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active');
}

function deactivateBurgerMenu() {
  document.querySelector('.burger-menu').classList.remove('active');
  document.querySelector('.burger').classList.remove('active');
  [...document.querySelectorAll('.burger__line')].forEach(span => {
    span.classList.remove('active');
  });
  document.querySelector('.overlay').classList.remove('active');
}

function clickOverlayHandler(event) {
  event.target.classList.remove('active');
  deactivateBurgerMenu();
}

function clickLinkHandler() {
  deactivateBurgerMenu();
}

function playVideoHandler(event) {
  event.target.play();
}

function stopVideoHandler(event) {
  event.target.pause();
}

function scrollOnAnchor(event) {
  event.preventDefault();

  const blockID = event.target.getAttribute('href').slice(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function init() {
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('mouseover', playVideoHandler));
  videos.forEach(video => video.addEventListener('mouseout', stopVideoHandler));
  document.querySelector('.burger').addEventListener('click', clickBurgerHandler);
  document.querySelector('.overlay').addEventListener('click', clickOverlayHandler);
  [...document.querySelectorAll('.burger-menu__link')].forEach(element =>
    element.addEventListener('click', clickLinkHandler),
  );

  [...document.querySelectorAll('a[href*="#"]')].forEach(anchor => {
    anchor.addEventListener('click', scrollOnAnchor);
  });
}

document.addEventListener('DOMContentLoaded', init);
