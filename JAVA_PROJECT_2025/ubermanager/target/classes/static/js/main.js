console.log("UberManager frontend loaded");

// Example: alert when form is submitted
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".ride-form");
    if(form){
        form.addEventListener("submit", (e) => {
            alert("Ride requested successfully!");
        });
    }
});
