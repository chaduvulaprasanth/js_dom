function changecolor() {
    document.body.style.backgroundColor = "red";
}
document.body.addEventListener("click", changecolor);
function random() {
    var abc = `#${String(75275237456685 * Math.random()).slice(0,6)}`;
    document.body.style.backgroundColor = abc;
}
document.body.addEventListener("click", random);
    