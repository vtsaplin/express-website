// Get all the images on the page
const images = document.getElementsByTagName('img');

// Add event listeners to each image
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', highlightImage);
  images[i].addEventListener('mouseout', removeHighlight);
  images[i].addEventListener('click', showDialog);
}

// Function to highlight the image on mouseover
function highlightImage(event) {
  event.target.style.border = '2px solid red';
}

// Function to remove the highlight on mouseout
function removeHighlight(event) {
  event.target.style.border = 'none';
}

// Function to show a dialog with a form when an image is clicked
function showDialog(event) {
  const imageUrl = event.target.src;

  const dialog = document.createElement('dialog');
  const form = document.createElement('form');

  const label1 = document.createElement('label');
  const input1 = document.createElement('input');
  label1.textContent = 'Layout:';
  input1.type = 'text';

  const label2 = document.createElement('label');
  const input2 = document.createElement('input');
  label2.textContent = 'Prompt 1:';
  input2.type = 'text';

  const label3 = document.createElement('label');
  const input3 = document.createElement('input');
  label3.textContent = 'Prompt 2:';
  input3.type = 'text';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Apply';

  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(label3);
  form.appendChild(input3);
  form.appendChild(submitButton);

  dialog.appendChild(form);
  document.body.appendChild(dialog);

  // Apply CSS styles to the dialog
  dialog.style.padding = '20px';
  dialog.style.backgroundColor = '#f5f5f5';
  dialog.style.border = '1px solid #ccc';
  dialog.style.borderRadius = '4px';

  // Apply CSS styles to the form elements
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.gap = '10px';

  // Apply CSS styles to the labels
  const labels = form.querySelectorAll('label');
  for (let i = 0; i < labels.length; i++) {
    labels[i].style.fontWeight = 'bold';
  }

  dialog.showModal();

  dialog.addEventListener('click', closeDialog);
}

// Function to close the dialog
function closeDialog(event) {
  event.target.close();
}

// Create the overlay button
const overlayButton = document.createElement('button');
overlayButton.textContent = 'Apply';
overlayButton.style.position = 'fixed';
overlayButton.style.bottom = '10px';
overlayButton.style.left = '10px';
overlayButton.style.backgroundColor = 'green';
overlayButton.style.color = 'white';
overlayButton.style.border = 'none';
overlayButton.style.padding = '10px';
overlayButton.style.borderRadius = '4px';

document.body.appendChild(overlayButton);
