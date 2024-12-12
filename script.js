// Select all elements with the class "element"
const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
  element.addEventListener('click', () => {
    // Find the tooltip inside the clicked element
    const tooltip = element.querySelector('.tooltip');

    // Hide all tooltips except the one clicked
    document.querySelectorAll('.tooltip').forEach((t) => {
      if (t !== tooltip) t.classList.remove('visible');
    });

    // Toggle visibility of the tooltip
    tooltip.classList.toggle('visible');
  });
});

// Optional: Close tooltips when clicking outside any element
document.addEventListener('click', (event) => {
  if (!event.target.closest('.element')) {
    document.querySelectorAll('.tooltip').forEach((tooltip) => {
      tooltip.classList.remove('visible');
    });
  }
});
