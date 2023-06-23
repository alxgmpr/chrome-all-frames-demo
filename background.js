chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(`got message from content.js within ${request.location}`);
});

console.log('hi from background.js, im listening for messages from content.js')