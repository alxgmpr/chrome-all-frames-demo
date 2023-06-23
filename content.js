console.log(`hi from content.js running at ${window.location.href}`, document.body)

chrome.runtime.sendMessage({location: window.location.href, hello: 'from content.js'})