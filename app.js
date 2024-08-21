const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
menu.addEventListener('click', mobileMenu);


// function showText(imageNum){
  // document.querySelectorAll('.project_blocks img').forEach(element =>{
  //   document.querySelector('.popup-image').style.display = 'block';
  //   document.querySelector('.popup-image img').src = image.getAttribute('src');
  // });

  
  
    // const textElements = document.querySelectorAll('.text-container p');
    // textElements.forEach(element => {
    //   element.classList.add('hidden');
    // });
    // const textElement = document.getElementById('text${imageNum}');
    // textElement.classList.remove('hidden');
    // console.log("hello");
// }

//Project section Pop-up Window
// document.querySelectorAll('.project_blocks img').forEach(image =>{
//   image.onclick = () =>{
//     document.querySelector('.popup-image').style.display = 'block';
//     document.querySelector('.popup-image img').src = image.getAttribute('src');
//   }
// });
document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
}



// Get references to the popup elements
const popup = document.querySelector('.popup-image');
const popupImage = popup.querySelector('img');
const textContainer = popup.querySelector('.text-container');

// Get references to the project blocks (images)
const projectBlocks = document.querySelectorAll('.project_blocks');

// Function to show the popup with the selected image and text
function showPopup(imageSrc, textId) {
  popupImage.src = imageSrc;
  
  // Hide all text elements
  const textElements = textContainer.querySelectorAll('p');
  textElements.forEach(element => {
    element.classList.add('hidden');
  });
  
  // Show the selected text
  const selectedText = document.getElementById(textId);
  selectedText.classList.remove('hidden');
  
  // Show the popup
  popup.style.display = 'block';
}

// Add click event listeners to each project block (image)
projectBlocks.forEach((block, index) => {
  block.addEventListener('click', () => {
    const imageSrc = block.querySelector('.project_img').src;
    const textId = `text${index + 1}`;
    showPopup(imageSrc, textId);
  });
});

//Plays the video when hovered with mouse
projectBlocks.forEach(block => {
  const video = block.querySelector('video');

  if(video){
    block.addEventListener("mouseenter", () => {
      video.play();
    });
    block.addEventListener("mouseleave", () =>{
      video.pause();
    });

  }
});

// // Close the popup when the close button (x) is clicked
// const closeButton = popup.querySelector('span');
// closeButton.addEventListener('click', () => {
//   popup.style.display = 'none';
// });
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
