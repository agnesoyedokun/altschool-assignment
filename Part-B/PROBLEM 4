function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        get value() {
            return count;
        }
    };
}


// Example

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);

counter.decrement();

console.log(counter.value);

