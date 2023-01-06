const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //console.log(document.body);

    //get random number between 0 and 3;
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);

    //targets the entire body of the document
    document.body.style.backgroundColor = colors[randomNumber];

    //changes the text of the color class
    color.textContent = colors[randomNumber];
    document.getElementById("name").style.color = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}