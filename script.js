document.addEventListener("DOMContentLoaded", function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var downloadContainer = document.getElementById("download-container");

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    downloadContainer.innerHTML =
      '<a href="#" ><img src="images/appstore.png" alt="App Store"/></a>';
  } else if (/android/i.test(userAgent)) {
    downloadContainer.innerHTML =
      '<a href="#" class="google-play"><img src="images/googleplay.png" alt="Google Play"/></a>';
  } else {
    downloadContainer.innerHTML = `
            <a href="#"><img src="images/appstore.png" alt="App Store"/></a>
            <a href="#"><img src="images/googleplay.png" alt="Google Play"/></a>
        `;
  }
});
