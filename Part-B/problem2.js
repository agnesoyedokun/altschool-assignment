function diffObjects(oldObj, newObj) {
    const oldKeys = Object.keys(oldObj);
    const newKeys = Object.keys(newObj);

    const oldKeySet = new Set(oldKeys);
    const newKeySet = new Set(newKeys);

    const result = {
        added: {},
        removed: {},
        changed: {}
    };

    // Find added and changed keys
    for (const key of newKeys) {
        if (!oldKeySet.has(key)) {
            result.added[key] = newObj[key];
        } else if (oldObj[key] !== newObj[key]) {
            result.changed[key] = {
                oldValue: oldObj[key],
                newValue: newObj[key]
            };
        }
    }

    // Find removed keys
    for (const key of oldKeys) {
        if (!newKeySet.has(key)) {
            result.removed[key] = oldObj[key];
        }
    }

    return result;
}


// Example using my name

const oldPerson = {
    name: "Agnes Tioluwanimi Oyedokun",
    age: 20,
    course: "Software Engineering"
};

const newPerson = {
    name: "Agnes Tioluwanimi Oyedokun",
    age: 21,
    country: "Nigeria"
};

console.log(diffObjects(oldPerson, newPerson));
