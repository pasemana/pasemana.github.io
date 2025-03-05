document.addEventListener("DOMContentLoaded", function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var downloadContainer = document.getElementById("download-container");

  // Determine the language based on the HTML file
  var language = document.location.pathname.includes("en.html")
    ? "en"
    : document.location.pathname.includes("pt.html")
    ? "pt"
    : "unknown";

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    downloadContainer.innerHTML =
      '<a href="https://apps.apple.com/pt/app/yourappname/id6478970391" class="app-store"><img src="images/appstore.png" alt="App Store"/></a>';
  } else if (/android/i.test(userAgent)) {
    downloadContainer.innerHTML =
      '<a href="https://play.google.com/store/apps/details?id=com.pasemana.alentejo" class="google-play"><img src="images/googleplay.png" alt="Google Play"/></a>';
  } else {
    downloadContainer.innerHTML = `
            <a href="https://apps.apple.com/pt/app/yourappname/id6478970391" class="app-store"><img src="images/appstore.png" alt="App Store"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.pasemana.alentejo" class="google-play"><img src="images/googleplay.png" alt="Google Play"/></a>
        `;
  }

  // Event listeners for tracking
  document.querySelectorAll(".app-store").forEach((link) => {
    link.addEventListener("click", function () {
      // Send event to Google Analytics with language property
      ga("send", "event", "App Store", "open", {
        eventCategory: "App Store",
        eventAction: "open",
        eventLabel: "app_store_opened",
        language: language,
      });
    });
  });

  document.querySelectorAll(".google-play").forEach((link) => {
    link.addEventListener("click", function () {
      // Send event to Google Analytics with language property
      ga("send", "event", "Google Play", "open", {
        eventCategory: "Google Play",
        eventAction: "open",
        eventLabel: "google_play_opened",
        language: language,
      });
    });
  });
});
