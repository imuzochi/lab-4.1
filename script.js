function formatFullName (firstName, lastName) {
    if (firstName === "" || lastName === "") {
        console.log("Invalid name input.");
    }
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    console.log(`${lastName}, ${firstName}`);
}

function calculateTotalCost(price, quantity, taxRate) {
    let totalCost = 0;
    if (Number.isInteger(price) && Number.isInteger(quantity) && Number.isInteger(taxRate)) {
        totalCost = (price * quantity) * (1 + taxRate);
    }
    else {
        console.log("Invalid input");
    }
}

function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed) {
        console.log("You are eligible for this program");
    }
    else if (age > 18 && !(isEmployed)) {
        console.log("You are conditionally eligible for this program");
    }
    else {
        console.log("You are not eligible for this program");
    }
}

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    let totalCost = 0;
    if (Number.isInteger(price) && Number.isInteger(quantity) && Number.isInteger(taxRate)) {
        totalCost = (price * quantity) * (1 + taxRate) - discount;
    }
    else {
        console.log("Invalid input");
    }
}