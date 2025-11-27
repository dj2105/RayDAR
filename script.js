// Basic Interactivity for DAR Stones
document.querySelectorAll('.stone').forEach(stone => {
  stone.addEventListener('click', function() {
    this.style.transform = 'scale(1.1)';
    alert(`You clicked on ${this.textContent}. Testing its reaction...`);
    // Simulate a reaction for the demo
    this.style.transform = 'scale(1)';
  });
});

// The RayDAR Gameshow test
function startTest() {
  const result = Math.random() < 0.5 ? 'Success! The stone moved without contact.' : 'Failed. The stone did not move.';
  document.getElementById('testResult').textContent = result;
}

// Community Gallery (for feedback)
function viewGallery() {
  alert("Coming soon! View the community gallery of submitted media and feedback.");
}
