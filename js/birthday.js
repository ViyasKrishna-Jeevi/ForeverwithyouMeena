// ==========================================
// BIRTHDAY GATE
// ==========================================

const beginJourneyButton = document.getElementById("beginJourney");

if (beginJourneyButton) {

    beginJourneyButton.addEventListener("click", () => {

        showSection("storySection");

        startStory();

    });

}