// const promise = new Promise(function (resolve, reject) {
    
// })

const cows = 15;
const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There aren't cows available on the farm`);
    }
});

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally')
})