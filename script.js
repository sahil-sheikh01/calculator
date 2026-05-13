const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const AC = document.getElementById("AC");
const DE = document.getElementById("DE");
const equal = document.getElementById("equal");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

AC.addEventListener("click", () => {
    display.value = "";
});

DE.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

function calculate() {
    try {
        let expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/%/g, "/100");

        display.value = eval(expression);
        
    } catch {
        display.value = "Error"
    }
};

equal.addEventListener("click", calculate);

document.addEventListener("keydown", (e) => {

    let allowedKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "+", "-", "%", "."
    ];
    if (allowedKeys.includes(e.key)) {
        display.value += e.key;
    }
    if (e.key === "*") {
        display.value += "×";
    }
    if (e.key === "/") {
        display.value += "÷";
    }
    if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    if (e.key === "Escape") {
        display.value = "";
    }
    if (e.key === "Enter") {
        calculate();
    }
});