// Create 2 arrays, one holds the integer value the user provides.
// The other holds the string values that will be displayed based on input integer.
var inputInteger = [];
var displayString = [];

// Function to push values into the arrays. 
function pushData() {
    // Get the input value from inputVal. 
    var inputVal = document.getElementById('inputVal').value;

    // Append data into the arrays based on user input.
    //  Implement most demanding condition first.
    if (inputVal === '') {
        alert('Error! No Data Entered.');
        return false;

    } else if (inputVal % 3 === 0 && inputVal % 5 === 0) {
        inputInteger.push(inputVal);
        displayString.push("MustangBronco");

    } else if (inputVal % 3 === 0) {
        inputInteger.push(inputVal);
        displayString.push("Mustang");

    } else if (inputVal % 5 === 0) {
        inputInteger.push(inputVal);
        displayString.push("Bronco");
    }
    else {
        inputInteger.push(inputVal);
        displayString.push(inputVal);
    }

    // Variables to hold data from arrays.
    var showInput = "";
    var showOutput = "";

    for (i = 0; i < displayString.length; i++) {
        showInput = inputInteger[i];
        showOutput = displayString[i];
    }

    // Display array data inside a table. 
    // Create a table and insert new rows based on user input.
    // Column 1 shows "Input Integer" by user. Column 2 shows "String Value Based on Algorithm".
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);

    cel1.innerHTML = showInput;
    cel2.innerHTML = showOutput;

}

// Function to clear the table data.
function clearTable() {
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}


// Allows user to enter value without having to manually click the "enter" button on page.
var button = document.getElementById("button");
var textBox = document.getElementById("inputVal");

// The event is fired when a button is clicked. 
textBox.addEventListener("keydown", function (event) {

    // Checks if ENTER key is pressed, if pressed then click listener on button is called.
    if (event.keyCode == 13) {
        button.click();
    }
});