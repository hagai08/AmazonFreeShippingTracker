// Initialize butotn with users's prefered color
let openExtensionButton = document.getElementById("openExtension");

chrome.storage.sync.get("color", ({ color }) => {
  openExtensionButton.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
openExtensionButton.addEventListener("click", async () => {
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setPageBackgroundColor,
  // });
  var newURL = "file:///C:/Users/ccarmeli/ccd/AmazonFreeShippingTracker-2/table-01/index.html";
  chrome.tabs.create({ url: newURL });
});

// The body of this function will be execuetd as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
