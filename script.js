const headingEl = document.getElementById('heading');
const changeTextButton = document.getElementById('change-text-button');

function changeHeadingText() {
  headingEl.textContent = "Text Changed!";
}

// Attach event listeners
headingEl.addEventListener('click', changeHeadingText);
changeTextButton.addEventListener('click', changeHeadingText);
