var typed = new Typed(".typed", {
    strings: ["A DESIGNER.", "AN ANIMATOR.", "A PHOTOGRAPHER."],
    typeSpeed: 250,
    backSpace: 150,
    loop: true
});
var typed1 = new Typed(".typed1", {
    strings: ["MARKETING.", "BRANDING.", "PRINT DESIGN."],
    typeSpeed: 250,
    backSpace: 150,
    loop: true
})

reveal = (e) => {
    let el = document.getElementById(e);
    
    if (el.dataset.open === '0') {
        // el.style.scale = '1 1';
        el.style.display = "flex";
        el.dataset.open = '1';
    } else {
        // el.style.scale = '1 0';
        el.style.display = "none";
        el.dataset.open = '0';
    }
    
}