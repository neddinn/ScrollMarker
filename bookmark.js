var appName = "scrollMarker";

var linkHandler = function(e) {
  var url = e.linkUrl;
  savePosition();
  chrome.tabs.update({url: url});
};

var pageHandler = function(e) {
  savePosition();
};

var savePosition = function() {
  chrome.tabs.executeScript(null, {file: "save.js"});
};

chrome.contextMenus.create({
  "title": "Mark and open",
  "contexts": ["link"],
  "onclick" : linkHandler
});

chrome.contextMenus.create({
  "title": "Mark position",
  "contexts": ["page", "selection"],
  "onclick" : pageHandler
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {file: "scroll.js"});
});
