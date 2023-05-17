// Add this JavaScript code to your existing index.js or create a new file if needed

// Retrieve the slider element
const slider = document.querySelector('.slider');

// Retrieve all the images inside the slider-container
const images = document.querySelectorAll('.slider img');

// Set the index of the currently displayed image
let currentImageIndex = 0;

// Function to change the image being displayed
function changeImage() {
  // Hide all images
  images.forEach(image => {
    image.style.display = 'none';
  });

  // Show the image at the current index
  images[currentImageIndex].style.display = 'block';

  // Increment the index
  currentImageIndex++;

  // If the index exceeds the number of images, reset it to 0
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Schedule the next image change after 3 seconds (adjust the time as needed)
  setTimeout(changeImage, 3000);
}

// Start the initial image change
changeImage();
