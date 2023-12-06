// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  // Function to set the background color with a smooth transition
function setRandomBackgroundColor() {
    const body = document.body;
    const currentColor = window.getComputedStyle(body).backgroundColor;
    const newColor = getRandomColor();

    body.style.transition = 'background-color 1s';
    body.style.backgroundColor = newColor;

    // Reset transition property after the animation is complete
    setTimeout(() => {body.style.transition = '';}, 1000);
}

  // Change the background color every 3 seconds
  setInterval(setRandomBackgroundColor, 3000);

  // Initial background color
  function toggleBackgroundTransitionMode(){
    setRandomBackgroundColor();
  }
