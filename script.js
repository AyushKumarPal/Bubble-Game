var timer = 3;
var score = 0;
var clickVal = 0;

function updateScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function getHit() {
    clickVal = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = clickVal;
}

function makeBubble() {
    var saveBubble = "";

    for (var i = 1; i <= 138; i++) {
        var num = Math.floor(Math.random() * 10)
        saveBubble += `<div class="bubble">${num}</div>`
    }

    document.querySelector('.bbottom').innerHTML = saveBubble;
}

function runTimer() {
    var rt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(rt);
            document.querySelector(".bbottom").innerHTML = `<h1>Game Over!</h1>`;
        }
    }, 1000)
}

document.querySelector(".bbottom")
    .addEventListener("click", function (dts) {
        var bubbleVal = Number(dts.target.textContent);
        if (bubbleVal === clickVal) {
            updateScore();
            getHit();
            makeBubble();
        }
    })

getHit();
runTimer();
makeBubble();
