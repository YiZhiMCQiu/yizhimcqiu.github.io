var homeLinkElements = document.getElementsByClassName("home-link");

for (var i = 0;i < homeLinkElements.length;i++) {
    homeLinkElements[i].setAttribute("href", window.location.origin);
}