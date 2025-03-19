// predict.js - A simple prediction function

function predictNumber(input) {
    if (input > 10) {
        return "High";
    } else {
        return "Low";
    }
}

// Example usage
console.log(predictNumber(15)); // Output: "High"
console.log(predictNumber(5));  // Output: "Low"

module.exports = predictNumber;
