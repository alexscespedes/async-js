function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

function* iterable(array) {
    for (let value of array) {
        // console.log(value)
        yield value
    }
}

const it = iterable(["oscar", "ana", "chris"])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)