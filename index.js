// myEach
function myEach(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

// myMap
function myMap(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], i, collection));
    }
    return result;
}

// myReduce
function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;

    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

// myFind
function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

// myFilter
function myFilter(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

// mySize
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys
function myKeys(object) {
    return Object.keys(object);
}

// myValues
function myValues(object) {
    return Object.values(object);
}

// Example Usage
console.log(myEach([1, 2, 3], console.log)); // Logs 1, 2, 3
console.log(myMap([1, 2, 3], num => num * 3)); // [3, 6, 9]
console.log(myReduce([1, 2, 3], (acc, num) => acc + num, 10)); // 16
console.log(myFind([1, 2, 3, 4, 5], num => num % 2 === 0)); // 2
console.log(myFilter([1, 2, 3, 4], num => num % 2 === 0)); // [2, 4]
console.log(mySize([1, 2, 3])); // 3
console.log(myFirst([5, 4, 3, 2, 1])); // 5
console.log(myLast([5, 4, 3, 2, 1])); // 1
console.log(myKeys({one: 1, two: 2, three: 3})); // ["one", "two", "three"]
console.log(myValues({one: 1, two: 2, three: 3})); // [1, 2, 3]
