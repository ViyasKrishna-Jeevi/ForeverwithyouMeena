function hideAllScreens() {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.add("hidden");

    });

}

function showSection(id) {

    hideAllScreens();

    const section = document.getElementById(id);

    if (!section) {

        console.error("Section not found:", id);

        return;

    }

    section.classList.remove("hidden");

}