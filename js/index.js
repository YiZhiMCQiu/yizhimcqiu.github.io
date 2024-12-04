var homeLinkElements = document.getElementsByClassName("home-link");

for (var i = 0;i < homeLinkElements.length;i++) {
    homeLinkElements[i].setAttribute("href", window.location.origin);
}
for (var i = 0;i < 100;i++) {
    var p = document.createElement("p");
    p.textContent = i;
    document.getElementById("body").appendChild(p);
}