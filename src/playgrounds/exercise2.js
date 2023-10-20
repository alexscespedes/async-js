// My code

function delay(time, message) {
  return new Promise(function () {
    setTimeout(() => {
      if (true) {
        console.log(message);
      } else {
        console.log("Fail test!");
      }
    }, time);
  });
}

delay(5000, "Hello after 2s").then((result) => {
  console.log(result);
});

// Platzi Code

function delay(time, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

delay(2000, "Hello after 2s").then((result) => {
    console.log(result);
  });