/*gundam box*/
const gundam = document.getElementById('gundam');
gundam.addEventListener('mouseenter', () => {
  console.log('mouse enter');
  gundam.src = "GIF/gundam.gif";
});
gundam.addEventListener('mouseleave', () => {
  gundam.src = "images/gundam.png";
});

/*lightleft box*/
const lightleft = document.getElementById('lightleft');
lightleft.addEventListener('mouseenter', () => {
  lightleft.src = "GIF/lightleft.gif";
});
lightleft.addEventListener('mouseleave', () => {
  lightleft.src = "images/lightleft.png";
});

/*lightright box*/
const lightright = document.getElementById('lightright');
lightright.addEventListener('mouseenter', () => {
  lightright.src = "GIF/lightright.gif";
});
lightright.addEventListener('mouseleave', () => {
  lightright.src = "images/lightright.png";
});

/*glass box*/
const glass = document.getElementById('glass');
glass.addEventListener('mouseenter', () => {
  glasst.src = "GIF/glass.gif";
});
glass.addEventListener('mouseleave', () => {
  glass.src = "images/glass.png";
});

const navLinks = document.querySelectorAll('.link');

let objectClicked;

function scrollSection(section) {

  document.querySelector(`#section-3 .${objectClicked}`).classList.addClass('show');
  window.scroll({
    top: document.getElementById(section).offsetTop,
    behavior: 'smooth' 
  });
}

navLinks.forEach(function(element) {
  element.addEventListener('click', function(e) {
    e.preventDefault();
  
    objectClicked = this.classList[0];
    console.log(objectClicked);
    let target = this.dataset.link;
  
    scrollSection(target);
  });
});