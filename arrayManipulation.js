// processArray

function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; 
        } else {
            return number * 3; 
        }
    });
}

module.exports = { processArray };


// formatArrayStrings
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); 
        } else {
            return str.toLowerCase(); 
        }
    });
}

module.exports = { processArray, formatArrayStrings };
