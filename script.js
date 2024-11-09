let displayBar = document.getElementById("displayBar");
let buttons = document.querySelectorAll("#calc button");
let deleteButton = document.getElementById("delete");

let input = "";

buttons.forEach((button) => {
  if (button !== deleteButton) {
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (value === "AC") {
        input = "";
        displayBar.value = "";
      } else if (value === "=") {
        try {
          const result = eval(input);
          displayBar.value = result;
          input = result.toString();
        } catch (error) {
          displayBar.value = "ERRRRRR";
          input = "";
        }
      } else {
        input += value;
        displayBar.value = input;
      }
    });
  }
});

deleteButton.addEventListener("click", () => {
  let currentValue = displayBar.value;
  displayBar.value = currentValue.slice(0, -1);
  // console.log("After delete:", input);
});
