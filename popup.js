document.getElementById("theButton").addEventListener("click", () => {
  window.postMessage(
      {type : "FROM_PAGE", text : "Hello from the webpage!"}, "*");
}, false);

console.log('popup.js')