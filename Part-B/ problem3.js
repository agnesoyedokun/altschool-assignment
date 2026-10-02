function deepFreeze(obj) {
    // Get all the values inside the object
    const values = Object.values(obj);

    // Check each value
    for (const value of values) {
        // If the value is an object and is not null
        if (value !== null && typeof value === "object") {
            // Freeze the nested object too
            deepFreeze(value);
        }
    }

    // Freeze the main object
    return Object.freeze(obj);
}


// Example using my name

const person = {
    name: "Agnes Tioluwanimi Oyedokun",
    age: 20,
    address: {
        city: "Lagos",
        country: "Nigeria"
    }
};

deepFreeze(person);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));
