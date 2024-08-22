const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
menu.addEventListener('click', mobileMenu);

///
document.querySelector('.popup-window span').onclick = () =>{
  document.querySelector('.popup-window').style.display = 'none';
}

// // Get references to the popup elements
// const popup = document.querySelector('.popup-window');
// const popupImage = popup.querySelector('img');
// const textContainer = popup.querySelector('.text-container');

// // Get references to the project blocks (images)
// const projectBlocks = document.querySelectorAll('.project_blocks');

// // Function to show the popup with the selected image and text
// function showPopup(imageSrc, textId) {
//   popupImage.src = imageSrc;
  
//   // Hide all text elements
//   const textElements = textContainer.querySelectorAll('p');
//   textElements.forEach(element => {
//     element.classList.add('hidden');
//   });
  
//   // Show the selected text
//   const selectedText = document.getElementById(textId);
//   selectedText.classList.remove('hidden');
  
//   // Show the popup
//   popup.style.display = 'block';
// }

// // Add click event listeners to each project block (image)
// projectBlocks.forEach((block, index) => {
//   block.addEventListener('click', () => {
//     const imageSrc = block.querySelector('.project_img').src;
//     const textId = `text${index + 1}`;
//     showPopup(imageSrc, textId);
//   });
// });

// Get references to the popup elements
const popup = document.querySelector('.popup-window');
const popupImage = popup.querySelector('img');
const textContainer = popup.querySelector('.text-container');

// Get references to the project blocks (images)
const projectBlocks = document.querySelectorAll('.project_blocks');

// Function to show the popup with the selected image and text
function showPopup(imageSrc, textId) {
  popupImage.src = imageSrc;
  
  // Hide all text elements
  const textSlides = textContainer.querySelectorAll('.text-slides1');
  textSlides.forEach(slide => {
    slide.style.display= 'none';
  });
  
  // Show the selected text
  const selectedText = document.getElementById(textId);
  selectedText.style.display = 'block';
  
  // Show the popup
  popup.style.display = 'block';

  currentSlideIndex = 0;
  showTextSlide(currentSlideIndex);
}

// Add click event listeners to each project block (image)
projectBlocks.forEach((block, index) => {
  block.addEventListener('click', () => {
    const imageSrc = block.querySelector('.project_img').src;
    const textId = `text${index + 1}`;
    showPopup(imageSrc, textId);
  });
});

// Slideshow logic for text slides within the popup
let currentSlideIndex = 0;

function showTextSlide(n) {
    const textSlides = textContainer.querySelectorAll('.text-slides1');
    if (n >= textSlides.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = textSlides.length - 1;
    } else {
        currentSlideIndex = n;
    }

    // Hide all slides and display the current one
    textSlides.forEach(slide => {
        slide.style.display = 'none';
    });
    textSlides[currentSlideIndex].style.display = 'block';
}

// Event listeners for previous and next buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    showTextSlide(currentSlideIndex - 1);
});

nextButton.addEventListener('click', () => {
    showTextSlide(currentSlideIndex + 1);
});
///
// let slideIndex = 1;
// let currentBlockIndex = 0; // Track the currently active project block

// // Function to show the correct slide in the popup window
// function showSlides(n, blockIndex) {
//     const slides = document.querySelectorAll(`.text-slides:nth-child(${blockIndex + 1}) .hidden`);
//     if (n > slides.length) { slideIndex = 1; }
//     if (n < 1) { slideIndex = slides.length; }
//     slides.forEach(slide => slide.style.display = "none");
//     slides[slideIndex - 1].style.display = "block";
// }

// // Function to navigate through slides
// function plusSlides(n) {
//     showSlides(slideIndex += n, currentBlockIndex);
// }

// // Function to show the popup window with the correct content
// function showPopup(imageSrc, blockIndex) {
//     popupImage.src = imageSrc;
//     currentBlockIndex = blockIndex;
//     slideIndex = 1; // Reset slide index for each project

//     // Show the first slide of the current project block
//     showSlides(slideIndex, currentBlockIndex);

//     // Display the popup window
//     popup.style.display = 'block';
// }

// // Attach click event listeners to each project block
// projectBlocks.forEach((block, index) => {
//     block.addEventListener('click', () => {
//         const imageSrc = block.querySelector('.project_img').src;
//         showPopup(imageSrc, index);
//     });
// });

// // Close the popup window when the close button (x) is clicked
// const closeButton = popup.querySelector('span');
// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none';
// });



// Plays the video when hovered with mouse
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
// let slideIndex = [1,1];
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }
