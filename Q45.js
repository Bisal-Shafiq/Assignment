"use strict";
// Function to store car information
function createCar(manufacturer, modelName, additionalProps) {
    return Object.assign({ manufacturer,
        modelName }, additionalProps);
}
// Call the function with required information and additional name-value pairs
const myCar = createCar('Toyota', 'Corolla', { color: 'Red', year: 2021 });
// Print the object to verify the information
console.log(myCar);
