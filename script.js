let displayBar = document.getElementById("displayBar");
let buttons = document.querySelectorAll("#calc button");

let input = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if(value === 'C') {
            input = '';
            displayBar.value = '';
        
        } else if(value === '=') {

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
});