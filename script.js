function modalClose(name) {
    const modal = document.getElementById(name);
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
}

function modalOpen(name) {
    const modal = document.getElementById(name);
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";
}