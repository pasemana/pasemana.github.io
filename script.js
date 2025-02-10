document.addEventListener("DOMContentLoaded", function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var downloadContainer = document.getElementById("download-container");

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    downloadContainer.innerHTML =
      '<a href="https://apps.apple.com/pt/app/yourappname/id6478970391" ><img src="images/appstore.png" alt="App Store"/></a>';
  } else if (/android/i.test(userAgent)) {
    downloadContainer.innerHTML =
      '<a href="https://play.google.com/store/apps/details?id=com.pasemana.alentejo" class="google-play"><img src="images/googleplay.png" alt="Google Play"/></a>';
  } else {
    downloadContainer.innerHTML = `
            <a href="https://apps.apple.com/pt/app/yourappname/id6478970391"><img src="images/appstore.png" alt="App Store"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.pasemana.alentejo"><img src="images/googleplay.png" alt="Google Play"/></a>
        `;
  }
});
