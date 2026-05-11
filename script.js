let calc = [];
let screen = "";

function showHistory(value) {
    let display = document.getElementById("input");

    if (value === "AC") {
        screen = "";
        calc = [];
    }
    else if (value === "BACK") {
        screen = screen.slice(0, -1);
    }
    else if (value === "=") {
        try {
            let formattedScreen = screen.replace(/X/g, "*").replace(/Ã·/g, "/");
            let result = eval(formattedScreen);
            calc.push(screen + " = " + result);
            screen = result.toString();
        } catch (e) {
            screen = "Error";
        }
    }
    else {
        let lastChar = screen.slice(-1); 
        const operators = ["+", "-", "X", "Ã·", "."]; 
        if (operators.includes(value) && value === lastChar) {
            return; 
        }
        
        screen += value;
    }

    console.log(calc);
    display.innerText = screen;
}
