// Initialize butotn with users's prefered color
let openExtensionButton = document.getElementById("openExtension");
let url1 = null;


// When the button is clicked, inject setPageBackgroundColor into current page
openExtensionButton.addEventListener("click", async () => {
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setPageBackgroundColor,
  // });
  var newURL = "table-01/index.html";
  chrome.tabs.create({ url: newURL }, function(tab1) {
    chrome.tabs.executeScript(tab1.id, {
      code: `localStorage.setItem("Dvir", "Coral");`
    });
  });
});

let addItemButton=document.getElementById("addItem");

addItemButton.addEventListener(
  "click", async () => {
    
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      var url1 = tabs[0].url;
      var title= tabs[0].title;

    console.log(url1);
    console.log(title);
    fetch(url1).then((response) => response.text()).then((text) => console.log(text));
    chrome.tabs.create({ url:  url1 });
  });});
  

