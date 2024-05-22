// Define the function describe_city with a default country parameter
function describe_city(city: string, country: string = 'USA') {
    console.log(`${city} is in ${country}.`);
}

// Call the function with different cities
describe_city('New York'); // Uses default country
describe_city('Los Angeles'); // Uses default country
describe_city('Tokyo', 'Japan'); // Specifies a different country
describe_city('Karachi', 'Pakistan'); // Specifies a different country
