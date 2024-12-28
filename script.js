
let btn = document.querySelector(".btn");
let color = document.querySelector(".color");
let backgroundColor = document.querySelector(".wrapper");

window.onload = () => {
    action();
};

function action() {
    let newColor = hexColor();
    color.innerText = newColor; 
    backgroundColor.style.backgroundColor = newColor; 

    navigator.clipboard.writeText(newColor)
        .then(() => {
            console.log(`Copied to clipboard: ${newColor}`);
        })
        .catch(err => {
            console.error("Failed to copy to clipboard", err);
        });
}
// Generate a random hex color
let hexColor = function () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

