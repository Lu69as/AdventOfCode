const inputField = document.querySelector("#inputFieldAOC");
const output = document.querySelector("#consoleOutput");


/* 🔔 -------------------------------------- 🎄 */
/* 🧑‍🎄 -> Day 1: Secret Entrance - Part 1
/* 🎄 -------------------------------------- 🔔 */
function secretEntrancePart1() {
    let input = inputField.value
    let lockPos = 50;
    let passWord = 0;
    let changes = input.split("\n");

    changes.forEach(c => {
        let change = c.slice(1) - 0;
        console.log(lockPos + " " + c)
        if (c.charAt() == "L") lockPos = lockPos - change;
        else if (c.charAt() == "R") lockPos = lockPos + change;
        
        while (lockPos > 99) lockPos = lockPos - 100
        while (lockPos < 0) lockPos = 100 + lockPos;
        if (lockPos == 0) passWord++;
    });

    output.innerText = passWord;
}


/* 🔔 -------------------------------------- 🎄 */
/* 🧑‍🎄 -> Day 1: Secret Entrance - Part 2
/* 🎄 -------------------------------------- 🔔 */
function rotateNum(num, input) {
    let change = input.slice(1) - 0;
    let dir = input.charAt()

    if (dir == "L") num = num - change;
    else if (dir == "R") num = num + change;
    return(num);
}

function secretEntrancePart2() {
    console.clear();
    let input = inputField.value
    let lockPos = 50, passWord = 0;
    let changes = input.split("\n");

    changes.forEach(c => {
        let change = c.slice(1) - 0;
        let NumUp = c.charAt() == "R";
        
        for (let i = 0; i < change; i++) {
            if (NumUp) lockPos++;
            else lockPos--;

            if (lockPos > 99) {
                lockPos = 0;
                passWord++;
            }
            else if (lockPos < 0) lockPos = 99;
            else if (lockPos == 0) passWord ++;
        }
        console.log(lockPos + " " + c)
    });

    output.innerText = passWord;
}