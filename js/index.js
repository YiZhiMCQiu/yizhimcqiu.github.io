var homeLinkElements = document.getElementsByClassName("home-link");

function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

for (var i = 0;i < homeLinkElements.length;i++) {
    homeLinkElements[i].setAttribute("href", window.location.origin);
}
for (var i = 0;i < 100;i++) {
    var p = document.createElement("p");
    p.textContent = i;
    document.getElementById("body").appendChild(p);
}

if (isDarkMode()) {
    document.documentElement.style.setProperty("--background-filter", "saturate(0.2) brightness(20%)")
} else {
    document.documentElement.style.setProperty("--background-filter", "saturate(0.2) brightness(20%) invert(100%)")
    document.documentElement.style.setProperty("--font-color", "#051429")
}