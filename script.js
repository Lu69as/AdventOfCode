const inputField = document.querySelector("#inputFieldAOC");
const output = document.querySelector("#consoleOutput");


/* 🔔 -------------------------------------- 🎄 */
/* 🧑‍🎄 -> Day 1: Secret Entrance
/* 🎄 -------------------------------------- 🔔 */
function secretEntrance() {
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