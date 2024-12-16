const buttons = document.querySelectorAll("button"); // All calculator buttons
const display = document.getElementById("display"); // The display input where results are shown  
const clear = document.getElementById("clear"); //Clear button

let firstNum = ""; // Stores the first number entered
let secondNum = ""; // Stores the second number entered
let operator = ""; // Stores the operator (+, -, *, /)

// Add an event so it does the math and operations 
function handleClick(event){
    console.log("You pressed a button!");

    // If the button pressed is a number or a decimal, and the display has less than 11 characters
    if((!isNaN(event.target.innerText) || (event.target.innerText) === ".") && display.innerText.length < 11){
        
        if(display.innerText === "0"){
            display.innerText = event.target.innerText; // Replace "0" with the new input
        }
        else{
            display.innerText += event.target.innerText; // Append the new input to the existing display value
        }
    }

        // If the clear button ("c") is pressed
    else if (event.target.innerText === "c" ) {
       display.innerText = "0"; // Reset the display to "0"
    }

        // If the equals button ("=") is pressed
    else if(event.target.innerText === "="){
        // display.innerText = secondNum;
        secondNum = display.innerText
        
        let result; // Variable to hold the result
        
        //If the number has a period then it means its a decimal number 
        if(firstNum.includes(".") === true || secondNum.includes(".") === true){
            firstNum = parseFloat(firstNum); // Convert to floating-point if either number has a decimal
            secondNum = parseFloat(secondNum); // Convert to floating-point if either number has a decimal
        }
        //the number is a integer
        else{
            firstNum = parseInt(firstNum); // Convert to integer
            secondNum = parseInt(secondNum); // Convert to integer

        }
        
        // Perform the calculation based on the operator
        if (operator === "+") {
            result = firstNum + secondNum;
        } else if (operator === "-") {
            result = firstNum - secondNum;
        } else if (operator === "*") {
            result = firstNum * secondNum;
        } else if (operator === "/") {
            result = secondNum !== 0 ? firstNum / secondNum : "Error"; // Prevent division by zero
        }

        display.innerText = result; // Show the result on the display

    }

    //When pressing one of the next buttons/math symbols the display will show cero 
    else{
        if(event.target.innerText === "/" || event.target.innerText === "*" || event.target.innerText === "-" || event.target.innerText ==="+"){
            firstNum = display.innerText; // Store the current display value as the first number
            operator = event.target.innerText;
            display.innerText = "0"; // Append "0" to the display 
        }
    }
}

// Add a click event listener to each button
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleClick); // Attach the handleClick function to each button
}
