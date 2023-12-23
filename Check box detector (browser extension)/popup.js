// popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Update the DOM of the popup page based on the message
  console.log('Received message in popup:', message);
  console.log(message.preCheckedBoxes);
  console.log('Full message object:', message);
  console.log('Value of precheckedboxes:', message.precheckedboxes);
  

  // Update the DOM elements in the popup page
  const displayAlert = document.getElementById('display-alert');
  displayAlert.innerHTML = message.preCheckedBoxes ? 'found' : 'NOT found';
});
