// changecolor function to change the background color by clicking on body
function changecolor() {
    document.body.style.backgroundColor = "red";
}
// addeventlistner on body which takes changecolor function 
document.body.addEventListener("click", changecolor);

// function random is to generate random colors for background
function random() {
    var abc = `#${String(75275237456685 * Math.random()).slice(0,6)}`;
    document.body.style.backgroundColor = abc;
}
// addeventlistner "click" on body which takes random function 
document.body.addEventListener("click", random);
    