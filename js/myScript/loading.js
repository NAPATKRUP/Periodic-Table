function loaingFunction() {
  setTimeout(function() {
      document.getElementById("loading").style.display = "none"
      document.getElementById("page").style.display = "block"
  }, 1500);
}