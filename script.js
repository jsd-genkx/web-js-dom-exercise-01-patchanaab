let greetWord = document.getElementById("heading");
let firstButton = document.getElementById("myBtn");
let secondButton = document.getElementById("myButton");
let bodySection = document.getElementById("myBody");

function changeText(){
    let elementH1 = document.getElementById("heading");
    elementH1.innerHTML = "Sawasdee World";
}

function resetPage(){
    window.location.reload()  ;
};

function changeCss(){
    greetWord.style.fontSize = "160px";
    greetWord.style.fontStyle = "italic";
    greetWord.style.fontWeight = "bold"
    greetWord.style.backgroundColor = "#FFC34E";
    greetWord.style.color ="#E71EB3";
    firstButton.style.backgroundColor = "#7A3FDC"
    firstButton.style.color = "#FF4582";
    firstButton.style.borderRadius = '1em';
    firstButton.style.padding = '2em';
    firstButton.style.width = '25%';
    secondButton.style.backgroundColor = "#7A3FDC"
    secondButton.style.color = "#FF4582";
    secondButton.style.borderRadius = '1em';
    secondButton.style.padding = '2em';
    secondButton.style.width = '25%';
    bodySection.style.backgroundColor = "#F9F871";

}

secondButton.addEventListener("click", () =>{
    changeCss()
});