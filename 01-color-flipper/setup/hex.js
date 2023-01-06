const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//example of hex color #F15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //console.log(document.body);

    //generate random Hex;
    let randomHex = '#';
    for (let i = 0; i < 6; i++) {
        randomHex += hex[getRandomNumber()];
    }

    //targets the entire body of the document
    document.body.style.backgroundColor = randomHex;

    //changes the text of the color class
    color.textContent = randomHex;
    document.getElementById("name").style.color = randomHex;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
