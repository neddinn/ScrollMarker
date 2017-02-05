var appName = "scrollMarker";
(function() {
  var pathName = location.pathname;
  chrome.storage.local.get(pathName, function(data) {
    if(data) {
      var pos = data[pathName];
      window.scrollTo(0, pos);
    }
  });
})();
