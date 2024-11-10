let displayBar = document.getElementById("displayBar");
let buttons = document.querySelectorAll("#calc button");
let deleteButton = document.getElementById("delete");

let input = "";
//displays the input that is clicked into the display bar
buttons.forEach((button) => {
if (button !== deleteButton) {
    button.addEventListener("click", () => {
    const value = button.innerText;
    // is the clear button
    if (value === "AC") {
        input = "";
        displayBar.value = "";
    } else if (value === "=") {
        try {
        // the eval() funciton evaluates the inputs as a mathematical expression
        const result = eval(input);
        displayBar.value = result;
        input = result.toString();
          // catch() checks for any invalid inputs when calculating
        } catch (error) {
        displayBar.value = "ERROR";
        input = "";
        }
    } else {
        input += value;
        displayBar.value = input;
    }
    });
}
});
// the delete button clears the most recent input, added the eventListener to activate when clicked
deleteButton.addEventListener("click", () => {
    let currentValue = displayBar.value;
    displayBar.value = currentValue.slice(0, -1);
    input = displayBar.value;
  // console.log("After delete:", input);
});
