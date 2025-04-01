

function loadComponents(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(id).innerHTML = data;
        }).catch(error => console.error('Error loading component:', error));
}

// LOAD COMPONENTS

document.addEventListener("DOMContentLoaded", function () {
    loadComponents(".navbar", "./components/header.html");
    loadComponents("footer", "./components/footer.html");
    loadComponents(".projectsNav", "./components/projectsNav.html");
    loadComponents(".content", "./components/homePage.html");
});
