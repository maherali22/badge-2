// Object with nested structure
const company = {
  name: "Bridgeon",
  location: {
    city: "Malappuram",
    state: "Kerala"
  },
  employees: 50
};

// Destructuring nested properties
const { name: companyName, location: { city, state }, employees } = company;

console.log(`Company: ${companyName}`);  // Output: Company: Bridgeon
console.log(`City: ${city}`);            // Output: City: Malappuram
console.log(`State: ${state}`);          // Output: State: Kerala
console.log(`Employees: ${employees}`); // Output: Employees: 50
console.log(companyName);
console.log(city);