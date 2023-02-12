const rollDiceButton = document.getElementById("roll-dice");
const result = document.getElementById("result");
const dice = document.getElementById("dice");
const dots = document.querySelectorAll(".dot");
let obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
}
let count = 0
rollDiceButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    count ++
    if (randomNumber == 1) {
        obj[1] ++
    } else if (randomNumber == 2) {
        obj[2] ++
    } else if (randomNumber == 3) {
        obj[3] ++
    } else if (randomNumber == 4) {
        obj[4] ++
    } else if (randomNumber == 5) {
        obj[5] ++
    } else if(randomNumber == 6) {
        obj[6] ++
    }
    result.innerHTML = randomNumber;
    for (let i = 0; i < 6; i++) {
        if (i < randomNumber) {
            dots[i].style.display = "block";
        } else {
            dots[i].style.display = "none";
        }
    }
    console.log(obj);
    console.log(count);
});

