

// Define a type for the car object
type Car = {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
};

// Function to store car information
function createCar(manufacturer: string, modelName: string, additionalProps: { [key: string]: any }): Car {
    return {
        manufacturer,
        modelName,
        ...additionalProps
    };
}

// Call the function with required information and additional name-value pairs
const myCar = createCar('Toyota', 'Corolla', { color: 'Red', year: 2021});

// Print the object to verify the information
console.log(myCar);
