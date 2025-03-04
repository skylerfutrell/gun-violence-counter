// Average gun-related incidents per minute
const incidentsPerMinute = 0.12; // Average incidents per minute
const incidentsPerSecond = incidentsPerMinute / 60; // Calculate incidents per second

// Initialize the incident count and progress variables
let incidentCount = 0;
let progress = 0; // Tracks progress from 0 to 1 between solid digits

// Create a new Audio object for the beep sound (using a relative path to your sound file)
const beepSound = new Audio('sounds\warning.wav'); // Change 'beep.mp3' to your actual file name if different

// Update the counter every 75ms (faster updates)
setInterval(() => {
  // Increment the progress by the incidents per second
  progress += incidentsPerSecond;
  
  // Log progress for debugging purposes
  console.log(`Progress: ${progress}`);
  
  // If progress exceeds 1, update the counter
  if (progress >= 1) {
    incidentCount += 1; // Increment the whole number
    progress = 0; // Reset progress to 0 for next cycle
  }

  // Update the visual elements
  document.getElementById('incidentCounter').textContent = incidentCount;
  document.getElementById('progressBar').style.width = (progress * 100) + '%'; // Adjust width of the progress bar

  // Flashing effect when the progress bar is 80% full
  const progressBar = document.getElementById('progressBar');
  if (progress >= 0.8) {
    progressBar.classList.add('nearing-full');  // Add flashing effect class
    document.body.classList.add('flashing'); // Flash background color
  } else {
    progressBar.classList.remove('nearing-full'); // Remove flashing effect if below 80%
    document.body.classList.remove('flashing'); // Remove flashing background
  }

  // When progress bar is full, make it flash red and reset
  if (progress === 0 && incidentCount > 0) {
    progressBar.classList.add('full');
    setTimeout(() => {
      progressBar.classList.remove('full');
    }, 500); // Keep full color for 500ms before resetting
  }

  // Play beep sound when the progress is nearing the next whole number (e.g., at 90% progress)
  if (progress >= 0.9) {
    beepSound.play(); // Play beep sound
  }

}, 50); // Update every 50ms for faster animation

// Display the initial incident count right away
document.getElementById('incidentCounter').textContent = incidentCount;
document.getElementById('progressBar').style.width = '0%';

