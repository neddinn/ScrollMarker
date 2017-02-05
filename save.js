var appName = "scrollMarker";
(function() {
  var pathName = location.pathname;
  var posData = {};
  posData[pathName] = document.body.scrollTop;
  chrome.storage.local.set(posData);
})();
