function validateSchema(obj, schema) {
    const errors = [];

    for (const [key, expectedType] of Object.entries(schema)) {
        if (!Object.hasOwn(obj, key)) {
            errors.push(`Missing key: ${key}`);
        } else if (typeof obj[key] !== expectedType) {
            errors.push(
                `Invalid type for ${key}: expected ${expectedType}, got ${typeof obj[key]}`
            );
        }
    }

    return errors;
}
