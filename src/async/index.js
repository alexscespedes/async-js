const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve("Async!"), 2000)
        : reject(new Error("Failed!")); 
    })
}

const anotherFn = async () => {
    const something = await fnAsync()
    console.log(something)
    console.log("Hello")
}

anotherFn();
console.log("It comes before...")