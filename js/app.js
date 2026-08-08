// ==========================================
// APP START
// ==========================================

window.addEventListener("load", () => {

    if (typeof startEffects === "function") {

        startEffects();

    }

    if (typeof startLoading === "function") {

        startLoading();

    }

});

