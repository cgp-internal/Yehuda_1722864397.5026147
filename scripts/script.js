// Add event listeners to demo buttons
document.querySelectorAll('.demo-button').forEach(button => {
  button.addEventListener('click', () => {
    // Toggle animation classes on click
    button.classList.toggle('animate');
  });
});

// Add event listeners to animation duration sliders
document.querySelectorAll('.duration-slider').forEach(slider => {
  slider.addEventListener('input', () => {
    // Update animation duration on input change
    const duration = slider.value + 's';
    document.querySelectorAll('.animated-element').forEach(element => {
      element.style.animationDuration = duration;
    });
  });
});

// Add event listeners to animation delay sliders
document.querySelectorAll('.delay-slider').forEach(slider => {
  slider.addEventListener('input', () => {
    // Update animation delay on input change
    const delay = slider.value + 's';
    document.querySelectorAll('.animated-element').forEach(element => {
      element.style.animationDelay = delay;
    });
  });
});

// Add event listeners to animation iteration count sliders
document.querySelectorAll('.iteration-slider').forEach(slider => {
  slider.addEventListener('input', () => {
    // Update animation iteration count on input change
    const iterationCount = slider.value;
    document.querySelectorAll('.animated-element').forEach(element => {
      element.style.animationIterationCount = iterationCount;
    });
  });
});

// Add event listeners to animation fill mode toggles
document.querySelectorAll('.fill-mode-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    // Toggle animation fill mode on click
    document.querySelectorAll('.animated-element').forEach(element => {
      element.style.animationFillMode = element.style.animationFillMode === 'forwards' ? 'backwards' : 'forwards';
    });
  });
});