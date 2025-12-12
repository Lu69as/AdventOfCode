const inputField = document.querySelector("#inputFieldAOC");
const output = document.querySelector("#consoleOutput");


/* 🔔 -------------------------------------- 🎄 */
{ let name = "Day 1: Secret Entrance - Part 1"; /* 🧑‍🎄
/* 🎄 -------------------------------------- 🔔 */
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `<span>${name}</span>`;
    newBtn.addEventListener("click", () => {
        let input = inputField.value
        let lockPos = 50;
        let password = 0;
        let changes = input.split("\n");

        changes.forEach(c => {
            let change = c.slice(1) - 0;
            if (c.charAt() == "L") lockPos = lockPos - change;
            else if (c.charAt() == "R") lockPos = lockPos + change;
            
            while (lockPos > 99) lockPos = lockPos - 100
            while (lockPos < 0) lockPos = 100 + lockPos;
            if (lockPos == 0) password++;
        });

        output.innerText = password;
    })
    document.querySelector(".btns").append(newBtn);
}

/* 🔔 -------------------------------------- 🎄 */
{ let name = "Day 1: Secret Entrance - Part 2"; /* 🧑‍🎄
/* 🎄 -------------------------------------- 🔔 */
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `<span>${name}</span>`;
    newBtn.addEventListener("click", () => {
        let input = inputField.value
        let lockPos = 50, password = 0;
        let changes = input.split("\n");

        changes.forEach(c => {
            let change = c.slice(1) - 0;
            let NumUp = c.charAt() == "R";
            
            for (let i = 0; i < change; i++) {
                if (NumUp) lockPos++;
                else lockPos--;

                if (lockPos > 99) {
                    lockPos = 0;
                    password++;
                }
                else if (lockPos < 0) lockPos = 99;
                else if (lockPos == 0) password++;
            }
        });

        output.innerText = password;
    })
    document.querySelector(".btns").append(newBtn);
}


/* 🔔 -------------------------------------- 🎄 */
{ let name = "Day 2: Gift shop - Part 1"; /* 🧑‍🎄
/* 🎄 -------------------------------------- 🔔 */
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `<span>${name}</span>`;
    newBtn.addEventListener("click", () => {
        let rangesArr = inputField.value.split(",");
        let invalidIds = [], password = 0;

        rangesArr.forEach(range => {
            let ranges = range.split("-");
            for (let curr = ranges[0]-0; curr <= ranges[1]; curr++) {
                currStr = curr.toString();
                if (currStr.slice(0, currStr.length / 2) == currStr.slice(currStr.length / 2))
                    invalidIds.push(curr);
            }
        })

        invalidIds.forEach((id) => password += id);
        output.innerText = password;
    })
    document.querySelector(".btns").append(newBtn);
}

/* 🔔 -------------------------------------- 🎄 */
{ let name = "Day 2: Gift shop - Part 2"; /* 🧑‍🎄
/* 🎄 -------------------------------------- 🔔 */
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `<span>${name}</span>`;
    newBtn.addEventListener("click", () => {
        let rangesArr = inputField.value.split(",");
        let invalidIds = [], password = 0;

        rangesArr.forEach(range => {
            let ranges = range.split("-");
            currLoop:
            for (let curr = ranges[0]-0; curr <= ranges[1]; curr++) {
                let currStr = curr.toString();
                let len = currStr.length;
                for (let div = len - 1; div > 0; div--) {
                    if (Math.floor(len / div) == len / div) {
                        let equalParts = true, lastStr = currStr.slice(0, div);
                        let ourputTemp = lastStr + " - ";
                        for (let i = div; i < len; i = i + div) {
                            ourputTemp += currStr.slice(i, i + div) + " - ";
                            if (lastStr == currStr.slice(i, i + div)) {
                                lastStr = currStr.slice(i, i + div);
                            }
                            else {
                                equalParts = false;
                                i = len;
                            }
                        }
                        if (equalParts) {
                            invalidIds.push(curr)
                            continue currLoop;
                        }
                    }
                }
            }
        })

        invalidIds.forEach((id) => password += id);
        output.innerText = password;
    })
    document.querySelector(".btns").append(newBtn);
}




// Final code for Advent colors :)
{
    let adventClrs = ["#165B33", "#a01d3f", "#b98e4e", "#ab0b80", "#F8B229"];
    let clrIndex = 0;

    document.querySelectorAll(".btns button").forEach((e) => {
        e.style.color = adventClrs[clrIndex];
        clrIndex++;
        if (clrIndex >= adventClrs.length) clrIndex = 0;
    })
}