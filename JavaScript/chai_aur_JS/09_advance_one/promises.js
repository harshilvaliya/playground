console.log("start at 0th sec");

//promise 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("async task is complete");
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise 1 consumed after 1 sec");
});

//promise 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 consumed");
  }, 2000);
}).then(() => {
  console.log("Promise 2 consumed after 2 sec");
});

//promise 3
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 3 consumed");
    resolve({ username: "peacemaker", userId: 1390 });
  }, 3000);
});

promiseThree.then((user) => {
  console.log("Promise 3 consumed after 3 sec");
  console.log(user);
  console.log(user.username);
});

//promise 4
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 4 consumed");
    let error = true;
    if (error) {
      resolve({ username: "idli dosa", userTown: "tamil" });
    } else {
      reject("ERROR : something went wrong !!");
    }
  }, 4000);
});

promiseFour
  .then((user2) => {
    console.log("Promise 4 consumed after 4 sec");
    console.log(user2);
    return user2.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//promise 5
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 5 consumed");
    let error = true;
    if (!error) {
      resolve({ username: "Thalapathy", userChar: "Leo" });
    } else {
      reject("ERROR : movie went wrong !!");
    }
  }, 5000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//fetch [video 41 > chai aur js]
fetch("https://api.github.com/users/harshilvaliya")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally("finally");
