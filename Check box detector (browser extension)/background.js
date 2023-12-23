// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Update extension state or perform actions based on the message
  console.log('Received message from content script:', message);
});
